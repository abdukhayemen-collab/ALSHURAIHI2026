param(
  [Parameter(Mandatory=$true)][string]$Url,
  [Parameter(Mandatory=$true)][string]$Out,
  [int]$Width = 1440,
  [int]$Height = 900,
  [string]$Hash = "",
  [int]$ScrollY = -1,
  [int]$WaitMs = 3500,
  [int]$Quality = 84,
  [string]$PreShot = "",
  [string]$Format = "webp",
  [double]$ClipX = 0,
  [double]$ClipY = 0,
  [double]$ClipW = 0,
  [double]$ClipH = 0,
  [double]$Scale = 1
)

$ErrorActionPreference = "Stop"
$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$port = 9400 + (Get-Random -Minimum 0 -Maximum 300)
$profileDir = Join-Path $env:TEMP ("cdp-" + [guid]::NewGuid().ToString("N").Substring(0,8))

$args = @(
  "--headless=new",
  "--remote-debugging-port=$port",
  "--user-data-dir=$profileDir",
  "--hide-scrollbars",
  "--disable-gpu",
  "--disable-extensions",
  "--no-first-run",
  "--no-default-browser-check",
  "--disable-background-networking",
  "--window-size=$Width,$Height",
  "about:blank"
)
$proc = Start-Process -FilePath $chrome -ArgumentList $args -PassThru -WindowStyle Hidden

try {
  $version = $null
  for ($i = 0; $i -lt 60; $i++) {
    try { $version = Invoke-RestMethod -Uri "http://127.0.0.1:$port/json/version" -TimeoutSec 2; break } catch { Start-Sleep -Milliseconds 250 }
  }
  if (-not $version) { throw "Chrome DevTools did not start" }

  $target = Invoke-RestMethod -Method Put -Uri "http://127.0.0.1:$port/json/new?about:blank"
  $wsUrl = $target.webSocketDebuggerUrl

  $ws = [System.Net.WebSockets.ClientWebSocket]::new()
  $ws.ConnectAsync([Uri]$wsUrl, [Threading.CancellationToken]::None).Wait(15000) | Out-Null
  if ($ws.State -ne [System.Net.WebSockets.WebSocketState]::Open) { throw "WS connect failed" }

  $script:msgId = 0
  $script:buffer = New-Object byte[] 4194304
  $script:chunks = New-Object System.Collections.Generic.List[byte]

  function Send-Cdp([string]$method, $params) {
    $script:msgId++
    $obj = @{ id = $script:msgId; method = $method; params = $params }
    $json = $obj | ConvertTo-Json -Depth 12 -Compress
    $bytes = [Text.Encoding]::UTF8.GetBytes($json)
    $seg = [ArraySegment[byte]]::new($bytes)
    $ws.SendAsync($seg, [System.Net.WebSockets.WebSocketMessageType]::Text, $true, [Threading.CancellationToken]::None).Wait(15000) | Out-Null
    return $script:msgId
  }

  function Read-Cdp([int]$waitId = 0) {
    while ($true) {
      $script:chunks.Clear()
      do {
        $seg = [ArraySegment[byte]]::new($script:buffer)
        $res = $ws.ReceiveAsync($seg, [Threading.CancellationToken]::None)
        $res.Wait(30000) | Out-Null
        if ($res.Result.Count -gt 0) { $script:chunks.AddRange([byte[]]$script:buffer[0..($res.Result.Count-1)]) }
      } while (-not $res.Result.EndOfMessage)
      $text = [Text.Encoding]::UTF8.GetString($script:chunks.ToArray())
      $obj = $text | ConvertFrom-Json
      if ($waitId -gt 0) {
        if ($obj.id -eq $waitId) { return $obj }
      } else {
        return $obj
      }
    }
  }

  function Wait-Event([string]$name, [int]$timeoutMs = 30000) {
    $sw = [Diagnostics.Stopwatch]::StartNew()
    while ($sw.ElapsedMilliseconds -lt $timeoutMs) {
      try {
        $obj = Read-Cdp 0
        if ($obj.method -eq $name) { return $obj }
      } catch { break }
    }
    return $null
  }

  Send-Cdp "Page.enable" @{} | Out-Null
  Send-Cdp "Runtime.enable" @{} | Out-Null
  Send-Cdp "Emulation.setDeviceMetricsOverride" @{ width = $Width; height = $Height; deviceScaleFactor = 1; mobile = $false } | Out-Null

  $navUrl = $Url
  if ($Hash -ne "") { $navUrl = "$Url$Hash" }

  $navId = Send-Cdp "Page.navigate" @{ url = $navUrl }
  $sw = [Diagnostics.Stopwatch]::StartNew()
  while ($sw.ElapsedMilliseconds -lt 45000) {
    $obj = Read-Cdp 0
    if ($obj.method -eq "Page.loadEventFired") { break }
  }
  Start-Sleep -Milliseconds $WaitMs

  # Scroll to requested position, hide floating platform badges, settle animations
  $scrollJs = ""
  if ($ScrollY -ge 0) { $scrollJs = "window.scrollTo(0, $ScrollY);" }
  $hidden = Send-Cdp "Runtime.evaluate" @{ expression = @"
(() => {
  const st = document.createElement('style');
  st.id = '__clean_capture_style';
  st.textContent = '[style*="2147483647"]{display:none!important}[class*="bolt-badge"],[id*="bolt-badge"],[class*="made-in-bolt"],[class*="MadeInBolt"],[id*="made-in-bolt"]{display:none!important}';
  (document.head || document.documentElement).appendChild(st);
  document.querySelectorAll('body > *').forEach(el => {
    const s = getComputedStyle(el);
    if (s.position === 'fixed' && (parseInt(s.zIndex) > 1000000)) el.style.setProperty('display','none','important');
  });
  $scrollJs
  return { y: window.scrollY, h: document.documentElement.scrollHeight };
})()
"@; returnByValue = $true }
  $hideResp = Read-Cdp $hidden
  if ($hideResp.result.exceptionDetails) { Write-Host ("EVAL ERROR: " + ($hideResp.result.exceptionDetails | ConvertTo-Json -Depth 5 -Compress)) }
  Start-Sleep -Milliseconds 2200

  # Second pass right before capture (some widgets re-mount themselves)
  $hidden2 = Send-Cdp "Runtime.evaluate" @{ expression = @"
(() => {
  let n = 0;
  document.querySelectorAll('[style*="2147483647"]').forEach(el => { el.style.setProperty('display','none','important'); n++; });
  const s = document.getElementById('__clean_capture_style');
  if (!s) { const st = document.createElement('style'); st.id='__clean_capture_style'; st.textContent='[style*="2147483647"]{display:none!important}'; document.documentElement.appendChild(st); }
  return { hidden:n, styleTag: !!document.getElementById('__clean_capture_style') };
})()
"@; returnByValue = $true }
  $r2 = Read-Cdp $hidden2
  Write-Host ("HIDE: " + ($r2.result.result.value | ConvertTo-Json -Compress))

  if ($PreShot -ne "") {
    $pre = Send-Cdp "Runtime.evaluate" @{ expression = $PreShot; returnByValue = $true; awaitPromise = $true }
    $preResp = Read-Cdp $pre
    if ($preResp.result.exceptionDetails) { Write-Host ("PRE ERROR: " + ($preResp.result.exceptionDetails | ConvertTo-Json -Depth 5 -Compress)) }
    if ($null -ne $preResp.result.result.value) { Write-Host ("PRE: " + ($preResp.result.result.value | ConvertTo-Json -Depth 8 -Compress)) }
    Start-Sleep -Milliseconds 2400
  }
  Start-Sleep -Milliseconds 500

  $shotParams = @{ format = $Format; captureBeyondViewport = $false; fromSurface = $true }
  if ($Format -eq "webp" -or $Format -eq "jpeg") { $shotParams.quality = $Quality }
  if ($ClipW -gt 0 -and $ClipH -gt 0) {
    $shotParams.clip = @{ x = $ClipX; y = $ClipY; width = $ClipW; height = $ClipH; scale = $Scale }
  }
  $shot = Send-Cdp "Page.captureScreenshot" $shotParams
  $resp = Read-Cdp $shot
  if (-not $resp.result.data) { throw ("Screenshot failed: " + ($resp | ConvertTo-Json -Depth 6 -Compress)) }

  $bytes = [Convert]::FromBase64String($resp.result.data)
  $outPath = [IO.Path]::GetFullPath($Out)
  $dir = [IO.Path]::GetDirectoryName($outPath)
  if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
  [IO.File]::WriteAllBytes($outPath, $bytes)
  [Console]::Out.WriteLine("OK " + $bytes.Length + " bytes -> " + $outPath)

  $ws.CloseAsync([System.Net.WebSockets.WebSocketCloseStatus]::NormalClosure, "done", [Threading.CancellationToken]::None).Wait(3000) | Out-Null
}
finally {
  if ($proc -and -not $proc.HasExited) { Stop-Process -Id $proc.Id -Force -ErrorAction SilentlyContinue }
  Start-Sleep -Milliseconds 400
  Remove-Item -Recurse -Force $profileDir -ErrorAction SilentlyContinue
}
