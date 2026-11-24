/* ==========================================================================
   ALSHURAIHI — portfolio behaviour
   No dependencies. Language, theme, hero, menu, reveal, cursor, intro.
   ========================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var body = document.body;
  var reduceMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
  var REDUCED = reduceMQ.matches;
  if (REDUCED) root.classList.add('reduce-motion');

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  var DICT = {
    ar: {
      'meta.title': 'الشريحي — معرض أعمال رقمية | ALSHURAIHI',
      'meta.desc': 'معرض الشريحي: تسعة مشاريع رقمية في السرد والذاكرة والتوعية والتصميم. من وحي الفكرة إلى روعة التنفيذ.',

      'brand.tagline': 'من وحي الفكرة إلى روعة التنفيذ',

      'nav.work': 'الأعمال',
      'nav.index': 'الفهرس',
      'nav.about': 'عن المعرض',
      'nav.contact': 'التواصل',

      'ui.skip': 'انتقل إلى المحتوى',
      'ui.view': 'عرض',
      'ui.home': 'الشريحي — الرئيسية',
      'ui.mainNav': 'التنقل الرئيسي',
      'ui.menuNav': 'قائمة التنقل',
      'ui.footerNav': 'روابط التذييل',
      'ui.themeToDark': 'التبديل إلى الوضع الليلي',
      'ui.themeToLight': 'التبديل إلى الوضع النهاري',
      'ui.toEnglish': 'التبديل إلى الإنجليزية',
      'ui.toArabic': 'التبديل إلى العربية',
      'ui.openMenu': 'فتح القائمة',
      'ui.closeMenu': 'إغلاق القائمة',
      'ui.darkMode': 'الوضع الليلي',
      'ui.lightMode': 'الوضع النهاري',
      'ui.english': 'English',
      'ui.arabic': 'العربية',
      'ui.opensNew': 'يفتح في تبويب جديد',
      'ui.type': 'النوع',
      'ui.focus': 'المحتوى',
      'ui.visit': 'زيارة المشروع',
      'ui.backTop': 'العودة إلى الأعلى',

      'menu.label': 'أين تحب أن تبدأ؟',
      'menu.foot': 'معرض أعمال رقمي — ٢٠٢٦',

      'hero.eyebrow': 'معرض أعمال رقمي · ٢٠٢٦',
      'hero.tagline': 'من وحي الفكرة<span class="hero__star" aria-hidden="true">✦</span>إلى روعة التنفيذ.',
      'hero.desc': 'تسعة مشاريع تُترجم الأفكار إلى تجارب رقمية: سردٌ للتاريخ والذاكرة، توعيةٌ تحمي التفاصيل، وتصميمٌ يُروى بالحركة والصورة والكلمة.',
      'hero.cta1': 'استكشف الأعمال',
      'hero.cta2': 'تعرّف على المعرض',
      'hero.open': 'افتح المشروع',
      'hero.featured': 'مشروع مختار',
      'hero.dotsLabel': 'اختيار مشروع مميز',
      'hero.prev': 'المشروع السابق',
      'hero.next': 'المشروع التالي',
      'hero.fact1': 'مشاريع مختارة',
      'hero.fact2': 'نسختان كاملتان',
      'hero.fact3': 'وضعان للعرض',
      'hero.scroll': 'مرّر للاستكشاف',
      'hero.edition': 'الإصدار ٠١ — ٢٠٢٦',
      'seal.text': 'من وحي الفكرة · إلى روعة التنفيذ ·',

      'statement.eyebrow': 'الهوية',
      'statement.title': 'من وحي الفكرة<br><em>إلى روعة التنفيذ.</em>',
      'statement.desc': 'لا شيء يبدأ جاهزاً. كل مشروع هنا بدأ سؤالاً، ثم صار حكاية، ثم واجهة تُقرأ وتُعاش. بين الفكرة والتنفيذ، تعيش التفاصيل التي تصنع الفرق.',
      'statement.chip1': 'سرد وتاريخ',
      'statement.chip2': 'توعية وتجربة',
      'statement.chip3': 'هوية وتفاصيل',

      'marquee.1': 'سرد تفاعلي',
      'marquee.2': 'هوية رقمية',
      'marquee.3': 'توعية واعية',
      'marquee.4': 'تجارب ويب',
      'marquee.5': 'تفاصيل تُروى',

      'index.eyebrow': 'الفهرس',
      'index.title': 'تسعة مشاريع،<br><em>وبابٌ لكل حكاية.</em>',
      'index.note': 'من الخريطة التي تحكي وطناً، إلى المحاكاة التي تعلّمك قبل أن تنقر. اختر مشروعاً لتنتقل إلى فصله.',
      'index.listLabel': 'فهرس المشاريع',
      'index.hint': 'مرّر على الأسماء لمعاينة سريعة، واضغط لتفتح الفصل.',

      'works.eyebrow': 'الأعمال المختارة',
      'works.title': 'تسعة أعمال،<br><em>ولكلٍّ منها عالم.</em>',
      'works.desc': 'من الخريطة التي تحكي وطناً، إلى المحاكاة التي تعلّمك قبل أن تنقر؛ كل فصل هنا مشروع حقيقي كما يعيشه الزائر.',
      'works.end': 'تمّ العرض — تسعة مشاريع',
      'works.back': 'العودة إلى الفهرس',

      'ch.1.type': 'تجربة سردية',
      'ch.1.titleMain': 'فلسطين',
      'ch.1.titleSub': 'حكاية وطن',
      'ch.1.titleFull': 'فلسطين | حكاية وطن',
      'ch.1.desc': 'رحلة تفاعلية في جغرافيا فلسطين وتاريخها وتراثها؛ من خريطة المدن والمقدسات إلى خط زمني يمتد من فجر الحضارات إلى الحاضر، ومعرض بصري يروي حكاية وطن.',
      'ch.1.tag1': 'سرد تفاعلي',
      'ch.1.tag2': 'خريطة وذاكرة',
      'ch.1.tag3': 'تراث',
      'ch.1.metaType': 'تجربة سردية',
      'ch.1.metaFocus': 'خريطة المدن · خط زمني · معرض بصري',
      'ch.1.altA': 'لقطة شاشة من موقع فلسطين: القدس وقبة الصخرة مع عنوان «فلسطين حكاية وطن»',
      'ch.1.altB': 'قسم خريطة المدن داخل موقع فلسطين',
      'ch.1.capA': 'الواجهة الرئيسية لتجربة «فلسطين | حكاية وطن»',
      'ch.1.capB': 'خريطة المدن داخل التجربة',

      'ch.2.type': 'منصة تعريفية',
      'ch.2.titleMain': 'فجر اليمن',
      'ch.2.titleFull': 'فجر اليمن',
      'ch.2.desc': 'منصة تعريفية مستقلة تغطي عملية «فجر اليمن» وتطوراتها، مع أقسام للأخبار والبيانات والمحافظات، ومحور خاص بتعز، ومساحة للمصادر والتحقق قبل التصديق.',
      'ch.2.tag1': 'منصة إخبارية',
      'ch.2.tag2': 'بيانات',
      'ch.2.tag3': 'تحقق',
      'ch.2.metaType': 'منصة تعريفية',
      'ch.2.metaFocus': 'أخبار · بيانات · مصادر',
      'ch.2.altA': 'لقطة شاشة من منصة فجر اليمن: واجهة رئيسية لمدينة تاريخية وعنوان الحرب اليمنية',
      'ch.2.altB': 'قسم الأخبار والتقارير في منصة فجر اليمن',
      'ch.2.capA': 'الواجهة الرئيسية لمنصة «فجر اليمن»',
      'ch.2.capB': 'أحدث الأخبار والتقارير',
      'ch.2.ticker': 'سياق · أخبار · تحقق',

      'ch.3.type': 'أرشيف تفاعلي',
      'ch.3.titleMain': 'سوريا',
      'ch.3.titleSub': 'ذاكرة وطن',
      'ch.3.titleFull': 'سوريا | ذاكرة وطن',
      'ch.3.desc': 'أرشيف رقمي لسوريا: خط زمني للحضارات، ومدنٌ تحكي التاريخ، وتراثٌ ومطبخ وأزياء، ومحطات الألم والتحرير، وحكايات أمل تنتهي بسؤال المستقبل.',
      'ch.3.tag1': 'أرشيف بصري',
      'ch.3.tag2': 'خط زمني',
      'ch.3.tag3': 'ذاكرة',
      'ch.3.metaType': 'أرشيف تفاعلي',
      'ch.3.metaFocus': 'مدن · تراث · تحرير',
      'ch.3.altA': 'غلاف موقع سوريا: حارة دمشقية قديمة وعنوان «سوريا حكاية أرض وذاكرة شعب وأمل لا ينطفئ»',
      'ch.3.altB': 'قسم مدن تحكي التاريخ داخل موقع سوريا',
      'ch.3.capA': 'غلاف «سوريا | حكاية وطن لا ينكسر»',
      'ch.3.capB': 'مدن تحكي التاريخ',

      'ch.4.type': 'سيرة رقمية',
      'ch.4.titleMain': 'السيرة الذاتية الرقمية',
      'ch.4.titleFull': 'السيرة الذاتية الرقمية',
      'ch.4.desc': 'سيرة ذاتية رقمية تحوّل البيانات الشخصية والتعليم والخبرات والمهارات إلى صفحة منظمة قابلة للطباعة، مع وضع ليلي وتجربة قراءة مريحة على الشاشات الصغيرة.',
      'ch.4.tag1': 'سيرة رقمية',
      'ch.4.tag2': 'واجهة',
      'ch.4.tag3': 'طباعة',
      'ch.4.metaType': 'سيرة ذاتية رقمية',
      'ch.4.metaFocus': 'تعليم · خبرات · مهارات',
      'ch.4.altA': 'لقطة شاشة للسيرة الذاتية الرقمية تعرض البيانات الشخصية والتعليم',
      'ch.4.altB': 'قسم الخبرات والمهارات في السيرة الذاتية الرقمية',
      'ch.4.capA': 'الصفحة الأولى من السيرة الذاتية الرقمية',
      'ch.4.capB': 'التعليم والخبرات والمهارات',
      'ch.4.chip1': 'وضع ليلي',
      'ch.4.chip2': 'قابلة للطباعة',

      'ch.5.type': 'متجر خدمات',
      'ch.5.titleMain': 'متجر MKH',
      'ch.5.titleFull': 'متجر MKH',
      'ch.5.desc': 'واجهة خدمات تصميم رقمية وتعليمية تجمع الخدمات والأسعار في مكان واحد، مع حاسبة طلب تفاعلية تعرض ملخص التكلفة قبل التواصل والطلب عبر تيليجرام.',
      'ch.5.tag1': 'خدمات تصميم',
      'ch.5.tag2': 'حاسبة طلب',
      'ch.5.tag3': 'تيليجرام',
      'ch.5.metaType': 'متجر خدمات',
      'ch.5.metaFocus': 'أسعار · حاسبة طلب · تواصل',
      'ch.5.altA': 'واجهة متجر MKH: عنوان «التصميم معنا له فن ومعنى» وعينات من الأعمال',
      'ch.5.altB': 'معرض الأعمال والخدمات داخل متجر MKH',
      'ch.5.capA': 'واجهة متجر MKH الرئيسية',
      'ch.5.capB': 'معرض الأعمال والخدمات',
      'ch.5.chip1': '١٢ خدمة',

      'ch.6.type': 'معرض أعمال',
      'ch.6.titleMain': 'معرض أعمال MKH',
      'ch.6.titleFull': 'معرض أعمال MKH',
      'ch.6.desc': 'معرض أعمال شخصي يجمع مشاريع المواقع والتجارب الرقمية، ويعرّف بالنهج والأدوات المستخدمة، من تنظيم الفكرة إلى النشر، بلغة بصرية دافئة وتفاصيل متقنة.',
      'ch.6.tag1': 'معرض أعمال',
      'ch.6.tag2': 'هوية',
      'ch.6.tag3': 'أدوات',
      'ch.6.metaType': 'معرض أعمال',
      'ch.6.metaFocus': 'مشاريع · نهج · أدوات',
      'ch.6.altA': 'واجهة معرض أعمال MKH: عنوان «من وحي الفكرة إلى روعة التنفيذ» ونافذة مشروع',
      'ch.6.altB': 'قسم «أصنع الواجهة، وأعتني بالحكاية» داخل معرض أعمال MKH',
      'ch.6.capA': 'الواجهة الرئيسية لمعرض أعمال MKH',
      'ch.6.capB': 'قسم النهج: أصنع الواجهة، وأعتني بالحكاية',

      'ch.7.type': 'تحقيق تفاعلي',
      'ch.7.titleMain': 'ما وراء الصورة',
      'ch.7.titleFull': 'ما وراء الصورة',
      'ch.7.desc': 'تحقيق بصري تفاعلي في عصر التزييف العميق: خمس عشرة شريحة تفحص كيف تخدع الصورة فهمنا للواقع، بين حالات حقيقية وأرقام واختبار بصري وأدوات للتحقق.',
      'ch.7.tag1': 'تحقيق بصري',
      'ch.7.tag2': 'تزييف عميق',
      'ch.7.tag3': 'وعي',
      'ch.7.metaType': 'تحقيق تفاعلي',
      'ch.7.metaFocus': 'خمس عشرة شريحة · اختبار بصري',
      'ch.7.altA': 'غلاف «كيف تخدع صورة واحدة ملايين العقول؟» بعين كبيرة وعنوان أحمر',
      'ch.7.altB': 'شريحة «صور كاذبة هزّت العالم» داخل التحقيق البصري',
      'ch.7.capA': 'غلاف التحقيق البصري',
      'ch.7.capB': 'حالات صور كاذبة هزّت العالم',
      'ch.7.chip1': '١٥ شريحة',

      'ch.8.type': 'محاكاة توعوية',
      'ch.8.titleMain': 'قبل أن تنقر',
      'ch.8.titleSub': 'التوعية بالروابط الخطرة',
      'ch.8.titleFull': 'قبل أن تنقر | التوعية بالروابط الخطرة',
      'ch.8.desc': 'محاكاة توعوية تفاعلية تحوّل خطر الروابط المشبوهة إلى تجربة آمنة؛ ثماني محطات تستعرض التصيد والاختراق والوقاية، وتنتهي باختبار قصير — دون فحص الجهاز أو جمع بيانات.',
      'ch.8.tag1': 'محاكاة',
      'ch.8.tag2': 'أمن رقمي',
      'ch.8.tag3': 'توعية',
      'ch.8.metaType': 'محاكاة توعوية',
      'ch.8.metaFocus': 'ثماني محطات · اختبار قصير',
      'ch.8.altA': 'شاشة البداية لعرض «ضغطة واحدة قد تكلّفك الكثير» بهاتف ينبه إلى رابط مشبوه',
      'ch.8.altB': 'محطة المخاطر داخل المحاكاة: ماذا يحدث عند فتح رابط خبيث؟',
      'ch.8.capA': 'شاشة البداية للمحاكاة التوعوية',
      'ch.8.capB': 'محطة المخاطر: ماذا يحدث عند فتح رابط خبيث؟',
      'ch.8.chip1': '٨ محطات',

      'ch.9.type': 'عرض تقديمي',
      'ch.9.titleMain': 'رحلتي في عالم الويب',
      'ch.9.titleFull': 'رحلتي في عالم الويب',
      'ch.9.desc': 'عرض تفاعلي يوثّق رحلة بناء ثمانية مشاريع ويب متنوعة، من الحكاية والذاكرة إلى الخدمات والتوعية، ويستخلص الدروس التي تحوّل كل تجربة إلى خطوة جديدة.',
      'ch.9.tag1': 'عرض تفاعلي',
      'ch.9.tag2': 'رحلة',
      'ch.9.tag3': 'دروس',
      'ch.9.metaType': 'عرض تقديمي',
      'ch.9.metaFocus': 'ثمانية مشاريع · اثنتا عشرة شريحة',
      'ch.9.altA': 'غلاف «رحلتي في عالم الويب» بتكوين من الأوراق وخط عربي',
      'ch.9.altB': 'شريحة السيرة الذاتية الرقمية داخل عرض «رحلتي في عالم الويب»',
      'ch.9.capA': 'غلاف «رحلتي في عالم الويب»',
      'ch.9.capB': 'شريحة السيرة الذاتية داخل العرض',
      'ch.9.chip1': '١٢ شريحة',

      'about.eyebrow': 'عن المعرض',
      'about.title': 'المعنى أولاً،<br><em>ثم تأتي الواجهة.</em>',
      'about.lead': '«الشريحي» معرض رقمي يجمع تسعة أعمال في السرد والتاريخ، والتوعية، والتصميم. هنا لا تُعرض المشاريع كروابط، بل كتجارب لها فكرة وإيقاع وتفاصيل.',
      'about.text': 'أبدأ كل عمل من سؤال: ما الذي يجب أن يخرج به الزائر؟ ثم تُرتّب المعلومة، ويُختار الإيقاع، ويُبنى المسار. أتعلّم بالممارسة، وأعيد مراجعة كل تفصيلة — من حجم الصورة إلى سرعة التحميل — قبل النشر.',
      'about.quote': 'الواجهة الجيدة لا ترفع صوتها؛ بل تجعل المعنى مسموعاً.',
      'about.step1t': 'الفكرة',
      'about.step1d': 'نبدأ من المعنى والجمهور قبل الألوان والخطوط.',
      'about.step2t': 'الحكاية',
      'about.step2d': 'نرتّب المحتوى في مسار يُقرأ ويُشاهد بلا تشتيت.',
      'about.step3t': 'التفاصيل',
      'about.step3d': 'المسافات، والصورة، والحركة في خدمة المعنى.',
      'about.step4t': 'التنفيذ',
      'about.step4d': 'تجربة سريعة ومتجاوبة تُختبر على الشاشات قبل النشر.',

      'contact.eyebrow': 'لنبدأ الحكاية التالية',
      'contact.title': 'لديك فكرة؟<br><em>لنجعلها واقعاً.</em>',
      'contact.desc': 'شاركني الفكرة في سطرين، ودعنا نبدأ من هناك. التواصل عبر تيليجرام مباشرة.',
      'contact.button': 'تواصل عبر تيليجرام',
      'contact.note': 'رابط مباشر إلى حساب المعرض على تيليجرام.',

      'footer.label': 'قناة التواصل',
      'footer.rights': 'الشريحي — جميع الحقوق محفوظة.',
      'footer.meta': 'عربي / English — وضع ليلي / نهاري',

      'intro.kicker': 'معرض أعمال رقمي',
      'intro.loading': 'جارٍ فتح المعرض',
      'intro.skip': 'تخطّي المقدمة'
    },

    en: {
      'meta.title': 'ALSHURAIHI — Digital Portfolio',
      'meta.desc': 'ALSHURAIHI: nine digital projects in narrative, memory, awareness, and design. From the spark of an idea to the brilliance of execution.',

      'brand.tagline': 'From the spark of an idea to the brilliance of execution',

      'nav.work': 'Work',
      'nav.index': 'Index',
      'nav.about': 'About',
      'nav.contact': 'Contact',

      'ui.skip': 'Skip to content',
      'ui.view': 'View',
      'ui.home': 'ALSHURAIHI — Home',
      'ui.mainNav': 'Main navigation',
      'ui.menuNav': 'Menu navigation',
      'ui.footerNav': 'Footer links',
      'ui.themeToDark': 'Switch to dark mode',
      'ui.themeToLight': 'Switch to light mode',
      'ui.toEnglish': 'Switch to English',
      'ui.toArabic': 'Switch to Arabic',
      'ui.openMenu': 'Open menu',
      'ui.closeMenu': 'Close menu',
      'ui.darkMode': 'Dark mode',
      'ui.lightMode': 'Light mode',
      'ui.english': 'English',
      'ui.arabic': 'العربية',
      'ui.opensNew': 'Opens in a new tab',
      'ui.type': 'Type',
      'ui.focus': 'Scope',
      'ui.visit': 'Visit project',
      'ui.backTop': 'Back to top',

      'menu.label': 'Where would you like to begin?',
      'menu.foot': 'Digital portfolio — 2026',

      'hero.eyebrow': 'Digital portfolio · 2026',
      'hero.tagline': 'From the spark of an idea<span class="hero__star" aria-hidden="true">✦</span>to the brilliance of execution.',
      'hero.desc': 'Nine projects that turn ideas into digital experiences: histories and memories retold, awareness that protects the details, and design narrated through motion, image, and word.',
      'hero.cta1': 'Explore the work',
      'hero.cta2': 'About the portfolio',
      'hero.open': 'Open project',
      'hero.featured': 'Selected work',
      'hero.dotsLabel': 'Choose a featured project',
      'hero.prev': 'Previous project',
      'hero.next': 'Next project',
      'hero.fact1': 'Selected projects',
      'hero.fact2': 'Full editions',
      'hero.fact3': 'Viewing modes',
      'hero.scroll': 'Scroll to explore',
      'hero.edition': 'Edition 01 — 2026',
      'seal.text': 'FROM THE IDEA · TO THE EXECUTION ·',

      'statement.eyebrow': 'The ethos',
      'statement.title': 'From the spark of an idea<br><em>to the brilliance of execution.</em>',
      'statement.desc': 'Nothing begins finished. Every project here started as a question, became a story, then a screen you read and inhabit. Between the idea and its execution live the details that make the difference.',
      'statement.chip1': 'Narrative & history',
      'statement.chip2': 'Awareness & experience',
      'statement.chip3': 'Identity & detail',

      'marquee.1': 'Interactive narrative',
      'marquee.2': 'Digital identity',
      'marquee.3': 'Conscious awareness',
      'marquee.4': 'Web experiences',
      'marquee.5': 'Details retold',

      'index.eyebrow': 'Index',
      'index.title': "Nine projects,<br><em>and a door into each story.</em>",
      'index.note': "From the map that tells a homeland's story to the simulation that teaches you before you click. Choose a project to enter its chapter.",
      'index.listLabel': 'Project index',
      'index.hint': 'Hover a title for a quick preview; click to enter the chapter.',

      'works.eyebrow': 'Selected work',
      'works.title': "Nine works,<br><em>each with its own world.</em>",
      'works.desc': "From the map that tells a homeland's story to the simulation that teaches you before you click — every chapter is a real project as a visitor experiences it.",
      'works.end': 'End of presentation — nine projects',
      'works.back': 'Back to the index',

      'ch.1.type': 'Narrative experience',
      'ch.1.titleMain': 'Palestine',
      'ch.1.titleSub': "A Homeland's Story",
      'ch.1.titleFull': "Palestine | A Homeland's Story",
      'ch.1.desc': "An interactive journey through Palestine's geography, history, and heritage — from a map of cities and sacred sites to a timeline stretching from the dawn of civilizations to the present, and a visual gallery that tells a homeland's story.",
      'ch.1.tag1': 'Interactive narrative',
      'ch.1.tag2': 'Map & memory',
      'ch.1.tag3': 'Heritage',
      'ch.1.metaType': 'Narrative experience',
      'ch.1.metaFocus': 'City map · timeline · visual gallery',
      'ch.1.altA': "Screenshot of the Palestine site: Jerusalem and the Dome of the Rock with the title 'Palestine, A Homeland's Story'",
      'ch.1.altB': 'The cities map section inside the Palestine site',
      'ch.1.capA': "Home screen of 'Palestine | A Homeland's Story'",
      'ch.1.capB': 'The cities map inside the experience',

      'ch.2.type': 'Information platform',
      'ch.2.titleMain': 'Fajr Al-Yemen',
      'ch.2.titleFull': 'Fajr Al-Yemen',
      'ch.2.desc': 'An independent information platform covering Operation Fajr Al-Yemen and its developments, with sections for news, data, and governorates, a dedicated focus on Taiz, and a space for sources and verification before belief.',
      'ch.2.tag1': 'News platform',
      'ch.2.tag2': 'Data',
      'ch.2.tag3': 'Verification',
      'ch.2.metaType': 'Information platform',
      'ch.2.metaFocus': 'News · data · sources',
      'ch.2.altA': 'Screenshot of the Fajr Al-Yemen platform: a homepage of a historic city and a headline on the Yemen war',
      'ch.2.altB': 'News and reports section of the Fajr Al-Yemen platform',
      'ch.2.capA': 'Home screen of the Fajr Al-Yemen platform',
      'ch.2.capB': 'Latest news and reports',
      'ch.2.ticker': 'Context · News · Verification',

      'ch.3.type': 'Interactive archive',
      'ch.3.titleMain': 'Syria',
      'ch.3.titleSub': "A Homeland's Memory",
      'ch.3.titleFull': "Syria | A Homeland's Memory",
      'ch.3.desc': "A digital archive of Syria: a timeline of civilizations, cities that tell history, heritage, cuisine and dress, stations of pain and liberation, and stories of hope that end with a question about the future.",
      'ch.3.tag1': 'Visual archive',
      'ch.3.tag2': 'Timeline',
      'ch.3.tag3': 'Memory',
      'ch.3.metaType': 'Interactive archive',
      'ch.3.metaFocus': 'Cities · heritage · liberation',
      'ch.3.altA': "Cover of the Syria site: an old Damascus alley and the title 'Syria — a story of land, a people's memory, and a hope that never fades'",
      'ch.3.altB': 'The cities that tell history section inside the Syria site',
      'ch.3.capA': "Cover of 'Syria | A homeland that does not break'",
      'ch.3.capB': 'Cities that tell history',

      'ch.4.type': 'Digital CV',
      'ch.4.titleMain': 'The Digital CV',
      'ch.4.titleFull': 'The Digital CV',
      'ch.4.desc': 'A digital CV that turns personal details, education, experience, and skills into an organised, printable page, with a dark mode and a comfortable reading experience on small screens.',
      'ch.4.tag1': 'Digital CV',
      'ch.4.tag2': 'Interface',
      'ch.4.tag3': 'Print',
      'ch.4.metaType': 'Digital CV',
      'ch.4.metaFocus': 'Education · experience · skills',
      'ch.4.altA': 'Screenshot of the digital CV showing personal details and education',
      'ch.4.altB': 'Experience and skills section of the digital CV',
      'ch.4.capA': 'The first page of the digital CV',
      'ch.4.capB': 'Education, experience, and skills',
      'ch.4.chip1': 'Dark mode',
      'ch.4.chip2': 'Print-ready',

      'ch.5.type': 'Services store',
      'ch.5.titleMain': 'MKH Store',
      'ch.5.titleFull': 'MKH Store',
      'ch.5.desc': 'A digital design and education services storefront that gathers services and prices in one place, with an interactive order calculator that shows a cost summary before contacting and ordering via Telegram.',
      'ch.5.tag1': 'Design services',
      'ch.5.tag2': 'Order calculator',
      'ch.5.tag3': 'Telegram',
      'ch.5.metaType': 'Services store',
      'ch.5.metaFocus': 'Pricing · order calculator · contact',
      'ch.5.altA': "The MKH Store interface: the title 'Design with us has art and meaning' and samples of work",
      'ch.5.altB': 'The work and services gallery inside MKH Store',
      'ch.5.capA': 'The MKH Store home screen',
      'ch.5.capB': 'The work and services gallery',
      'ch.5.chip1': '12 services',

      'ch.6.type': 'Portfolio',
      'ch.6.titleMain': 'MKH Portfolio',
      'ch.6.titleFull': 'MKH Portfolio',
      'ch.6.desc': 'A personal portfolio gathering web projects and digital experiences, introducing the approach and tools used, from organising the idea to publishing, in a warm visual language and considered detail.',
      'ch.6.tag1': 'Portfolio',
      'ch.6.tag2': 'Identity',
      'ch.6.tag3': 'Tools',
      'ch.6.metaType': 'Portfolio',
      'ch.6.metaFocus': 'Projects · approach · tools',
      'ch.6.altA': "The MKH Portfolio interface: the title 'From the spark of an idea to the brilliance of execution' and a project window",
      'ch.6.altB': "The section 'I craft the interface and tend the story' inside MKH Portfolio",
      'ch.6.capA': 'The MKH Portfolio home screen',
      'ch.6.capB': 'The approach section: I craft the interface and tend the story',

      'ch.7.type': 'Interactive investigation',
      'ch.7.titleMain': 'Beyond the Image',
      'ch.7.titleFull': 'Beyond the Image',
      'ch.7.desc': 'An interactive visual investigation into the age of deepfakes: fifteen slides examining how the image can deceive our sense of reality, with real cases, figures, a visual test, and verification tools.',
      'ch.7.tag1': 'Visual investigation',
      'ch.7.tag2': 'Deepfakes',
      'ch.7.tag3': 'Awareness',
      'ch.7.metaType': 'Interactive investigation',
      'ch.7.metaFocus': 'Fifteen slides · visual test',
      'ch.7.altA': "Cover of 'How can one image deceive millions of minds?' with a large eye and a red title",
      'ch.7.altB': "The slide 'False images that shook the world' inside the visual investigation",
      'ch.7.capA': 'Cover of the visual investigation',
      'ch.7.capB': 'False images that shook the world',
      'ch.7.chip1': '15 slides',

      'ch.8.type': 'Awareness simulation',
      'ch.8.titleMain': 'Before You Click',
      'ch.8.titleSub': 'Dangerous-link awareness',
      'ch.8.titleFull': 'Before You Click | Dangerous-link awareness',
      'ch.8.desc': 'An interactive awareness simulation that turns the danger of suspicious links into a safe experience: eight stations covering phishing, hacking, and prevention, ending with a short quiz — with no device scan and no data collection.',
      'ch.8.tag1': 'Simulation',
      'ch.8.tag2': 'Digital security',
      'ch.8.tag3': 'Awareness',
      'ch.8.metaType': 'Awareness simulation',
      'ch.8.metaFocus': 'Eight stations · short quiz',
      'ch.8.altA': "Opening screen of 'One click can cost you a lot' with a phone warning of a suspicious link",
      'ch.8.altB': 'The risk station inside the simulation: what happens when you open a malicious link?',
      'ch.8.capA': 'Opening screen of the awareness simulation',
      'ch.8.capB': 'The risk station: what happens when you open a malicious link?',
      'ch.8.chip1': '8 stations',

      'ch.9.type': 'Presentation',
      'ch.9.titleMain': 'My Web Journey',
      'ch.9.titleFull': 'My Web Journey',
      'ch.9.desc': 'An interactive presentation documenting the journey of building eight varied web projects, from story and memory to services and awareness, distilling the lessons that turn each experience into a new step.',
      'ch.9.tag1': 'Interactive presentation',
      'ch.9.tag2': 'Journey',
      'ch.9.tag3': 'Lessons',
      'ch.9.metaType': 'Presentation',
      'ch.9.metaFocus': 'Eight projects · twelve slides',
      'ch.9.altA': "Cover of 'My Web Journey' with a composition of papers and Arabic type",
      'ch.9.altB': "The digital CV slide inside 'My Web Journey'",
      'ch.9.capA': "Cover of 'My Web Journey'",
      'ch.9.capB': 'The digital CV slide inside the presentation',
      'ch.9.chip1': '12 slides',

      'about.eyebrow': 'About the portfolio',
      'about.title': 'Meaning first,<br><em>then the interface.</em>',
      'about.lead': 'ALSHURAIHI is a digital portfolio gathering nine works across narrative and history, awareness, and design. Here, projects are not shown as links but as experiences with an idea, a rhythm, and details.',
      'about.text': 'Every work begins with a question: what should the visitor leave with? Then the information is ordered, the rhythm chosen, the path built. I learn by making, and revisit every detail — from image scale to loading speed — before publishing.',
      'about.quote': 'A good interface does not raise its voice; it makes meaning audible.',
      'about.step1t': 'The idea',
      'about.step1d': 'Begin with meaning and audience before colour and type.',
      'about.step2t': 'The story',
      'about.step2d': 'Order content into a path that is read and watched without distraction.',
      'about.step3t': 'The details',
      'about.step3d': 'Space, image, and motion in the service of meaning.',
      'about.step4t': 'The execution',
      'about.step4d': 'A fast, responsive experience tested across screens before publishing.',

      'contact.eyebrow': "Let's begin the next story",
      'contact.title': "Have an idea?<br><em>Let's make it real.</em>",
      'contact.desc': "Share the idea in two lines, and let's begin there. Talk to me directly on Telegram.",
      'contact.button': "Let's Talk on Telegram",
      'contact.note': "A direct link to the portfolio's Telegram account.",

      'footer.label': 'Telegram',
      'footer.rights': 'ALSHURAIHI — All rights reserved.',
      'footer.meta': 'Arabic / English — Dark / Light',

      'intro.kicker': 'Digital portfolio',
      'intro.loading': 'Opening the portfolio',
      'intro.skip': 'Skip intro'
    }
  };

  var HERO = [
    { ch: '#ch-palestine', href: 'https://palestine-interactiv-nv9w.bolt.host/', img: 'assets/img/projects/palestine-01.webp', alt: 'ch.1.altA', title: 'ch.1.titleFull', main: 'ch.1.titleMain', sub: 'ch.1.titleSub', tags: ['ch.1.tag1', 'ch.1.tag2', 'ch.1.tag3'], num: '01' },
    { ch: '#ch-fajr', href: 'https://fajr-al-yemen.bolt.host/', img: 'assets/img/projects/fajr-01.webp', alt: 'ch.2.altA', title: 'ch.2.titleFull', main: 'ch.2.titleMain', sub: null, tags: ['ch.2.tag1', 'ch.2.tag2', 'ch.2.tag3'], num: '02' },
    { ch: '#ch-syria', href: 'https://interactive-syria-he-5ofy.bolt.host/', img: 'assets/img/projects/syria-01.webp', alt: 'ch.3.altA', title: 'ch.3.titleFull', main: 'ch.3.titleMain', sub: 'ch.3.titleSub', tags: ['ch.3.tag1', 'ch.3.tag2', 'ch.3.tag3'], num: '03' },
    { ch: '#ch-cv', href: 'https://marwa-al-shuraihi-ye.netlify.app/', img: 'assets/img/projects/cv-01.webp', alt: 'ch.4.altA', title: 'ch.4.titleFull', main: 'ch.4.titleMain', sub: null, tags: ['ch.4.tag1', 'ch.4.tag2', 'ch.4.tag3'], num: '04' },
    { ch: '#ch-store', href: 'https://mkh.abdukhayemen.workers.dev/', img: 'assets/img/projects/store-01.webp', alt: 'ch.5.altA', title: 'ch.5.titleFull', main: 'ch.5.titleMain', sub: null, tags: ['ch.5.tag1', 'ch.5.tag2', 'ch.5.tag3'], num: '05' },
    { ch: '#ch-gallery', href: 'https://mkh26.abdukhayemen.workers.dev/', img: 'assets/img/projects/gallery-01.webp', alt: 'ch.6.altA', title: 'ch.6.titleFull', main: 'ch.6.titleMain', sub: null, tags: ['ch.6.tag1', 'ch.6.tag2', 'ch.6.tag3'], num: '06' },
    { ch: '#ch-beyond', href: 'https://marwa.abdukhayemen.workers.dev/#slide-1', img: 'assets/img/projects/beyond-01.webp', alt: 'ch.7.altA', title: 'ch.7.titleFull', main: 'ch.7.titleMain', sub: null, tags: ['ch.7.tag1', 'ch.7.tag2', 'ch.7.tag3'], num: '07' },
    { ch: '#ch-warning', href: 'https://warning.abdukhayemen.workers.dev/', img: 'assets/img/projects/warning-01.webp', alt: 'ch.8.altA', title: 'ch.8.titleFull', main: 'ch.8.titleMain', sub: 'ch.8.titleSub', tags: ['ch.8.tag1', 'ch.8.tag2', 'ch.8.tag3'], num: '08' },
    { ch: '#ch-journey', href: 'https://my-web-journey.abdukhayemen.workers.dev/#slide-12', img: 'assets/img/projects/journey-01.webp', alt: 'ch.9.altA', title: 'ch.9.titleFull', main: 'ch.9.titleMain', sub: null, tags: ['ch.9.tag1', 'ch.9.tag2', 'ch.9.tag3'], num: '09' }
  ];

  var lang = root.getAttribute('data-lang') === 'en' ? 'en' : 'ar';

  function dict() { return DICT[lang] || DICT.ar; }
  function t(key) {
    var d = dict();
    if (Object.prototype.hasOwnProperty.call(d, key)) return d[key];
    return Object.prototype.hasOwnProperty.call(DICT.ar, key) ? DICT.ar[key] : '';
  }

  /* --------------------------------------------------------------------------
     Language rendering
     -------------------------------------------------------------------------- */
  var metaTitle = document.querySelector('title');
  var metaDesc = document.querySelector('meta[name="description"]');

  function renderStatic() {
    $$('[data-i18n]').forEach(function (el) {
      var val = t(el.getAttribute('data-i18n'));
      if (val) el.textContent = val;
    });
    $$('[data-i18n-html]').forEach(function (el) {
      var val = t(el.getAttribute('data-i18n-html'));
      if (val) el.innerHTML = val;
    });
    $$('[data-i18n-aria-label]').forEach(function (el) {
      var val = t(el.getAttribute('data-i18n-aria-label'));
      if (val) el.setAttribute('aria-label', val);
    });
    $$('[data-i18n-alt]').forEach(function (el) {
      var val = t(el.getAttribute('data-i18n-alt'));
      if (val) el.setAttribute('alt', val);
    });
    if (metaTitle) metaTitle.textContent = t('meta.title');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.desc'));
  }

  function renderIndexRows() {
    $$('.index__row').forEach(function (row) {
      var id = row.getAttribute('data-project');
      var p = HERO.filter(function (x) { return x.ch === '#ch-' + id; })[0];
      if (!p) return;
      var titleEl = $('.index__rowtitle', row);
      if (titleEl) {
        titleEl.textContent = '';
        titleEl.appendChild(document.createTextNode(t(p.main)));
        if (p.sub) {
          titleEl.appendChild(document.createTextNode(' '));
          var span = document.createElement('span');
          span.textContent = '| ' + t(p.sub);
          titleEl.appendChild(span);
        }
      }
      var tagsEl = $('.index__tags', row);
      if (tagsEl) tagsEl.textContent = p.tags.map(t).join(' · ');
      row.setAttribute('aria-label', t(p.title));
    });
  }

  function syncControls() {
    var theme = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var themeKey = theme === 'dark' ? 'ui.themeToLight' : 'ui.themeToDark';
    $$('[data-theme-toggle]').forEach(function (btn) { btn.setAttribute('aria-label', t(themeKey)); });
    var menuTheme = $('[data-menu-theme-label]');
    if (menuTheme) menuTheme.textContent = t(theme === 'dark' ? 'ui.lightMode' : 'ui.darkMode');
    var langTarget = $('[data-lang-target]');
    if (langTarget) langTarget.textContent = lang === 'ar' ? 'EN' : 'ع';
    var langLabel = $('[data-lang-label]');
    if (langLabel) langLabel.textContent = lang === 'ar' ? 'English' : 'العربية';
    var langKey = lang === 'ar' ? 'ui.toEnglish' : 'ui.toArabic';
    $$('[data-lang-toggle]').forEach(function (btn) { btn.setAttribute('aria-label', t(langKey)); });
    var cursorLabel = $('.cursor__label');
    if (cursorLabel) cursorLabel.textContent = t('ui.view');
    if (previewProject && preview.classList.contains('is-visible')) {
      previewLabel.textContent = t(previewProject.title);
    }
  }

  function applyLanguage(next, persist) {
    lang = next === 'en' ? 'en' : 'ar';
    root.setAttribute('data-lang', lang);
    root.lang = lang;
    root.dir = lang === 'en' ? 'ltr' : 'rtl';
    if (persist) {
      try { localStorage.setItem('alshuraihi.lang', lang); } catch (e) {}
    }
    renderStatic();
    renderIndexRows();
    updateHeroUI();
    syncControls();
    root.classList.add('i18n-ready');
  }

  /* --------------------------------------------------------------------------
     Theme
     -------------------------------------------------------------------------- */
  function commitTheme(next) {
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('alshuraihi.theme', next); } catch (e) {}
    var m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute('content', next === 'dark' ? '#0b0c0a' : '#f2ede3');
    syncControls();
  }

  function toggleTheme() {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    if (!REDUCED && typeof document.startViewTransition === 'function') {
      try {
        document.startViewTransition(function () { commitTheme(next); });
        return;
      } catch (e) {}
    }
    commitTheme(next);
  }

  $$('[data-theme-toggle]').forEach(function (btn) {
    btn.addEventListener('click', toggleTheme);
  });

  /* --------------------------------------------------------------------------
     Language toggles
     -------------------------------------------------------------------------- */
  $$('[data-lang-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLanguage(lang === 'ar' ? 'en' : 'ar', true);
    });
  });

  /* --------------------------------------------------------------------------
     Hero
     -------------------------------------------------------------------------- */
  var heroStage = $('#heroStage');
  var heroImgA = $('#heroImgA');
  var heroImgB = $('#heroImgB');
  var heroCount = $('#heroCount');
  var heroIndex = $('#heroIndex');
  var heroProject = $('#heroProject');
  var heroOpen = $('#heroOpen');
  var heroDots = $('#heroDots');
  var activeHero = 0;
  var heroToken = 0;
  var dots = [];
  var autoTimer = null;
  var heroPaused = false;

  if (heroProject) heroProject.removeAttribute('data-i18n');
  if (heroImgA) heroImgA.removeAttribute('data-i18n-alt');
  if (heroImgB) heroImgB.removeAttribute('data-i18n-alt');
  if (heroImgA) heroImgA.setAttribute('data-index', '0');

  function updateHeroUI() {
    if (!heroProject) return;
    var p = HERO[activeHero];
    if (heroCount) heroCount.textContent = p.num + ' / 09';
    if (heroIndex) heroIndex.textContent = p.num;
    heroProject.textContent = t(p.title);
    heroProject.setAttribute('href', p.ch);
    if (heroOpen) heroOpen.setAttribute('href', p.href);
    dots.forEach(function (dot, i) {
      dot.classList.toggle('is-active', i === activeHero);
      dot.setAttribute('aria-current', i === activeHero ? 'true' : 'false');
      dot.setAttribute('aria-label', t(HERO[i].title));
    });
    var front = heroImgA && heroImgA.classList.contains('is-active') ? heroImgA : heroImgB;
    if (front) front.setAttribute('alt', t(p.alt));
  }

  function showHero(i, immediate) {
    if (!heroImgA || !heroImgB) return;
    i = ((i % HERO.length) + HERO.length) % HERO.length;
    if (i === activeHero) {
      updateHeroUI();
      return;
    }
    var token = ++heroToken;
    var p = HERO[i];
    activeHero = i;
    updateHeroUI();

    var incoming = heroImgA.classList.contains('is-active') ? heroImgB : heroImgA;
    var outgoing = incoming === heroImgA ? heroImgB : heroImgA;

    function swap() {
      if (token !== heroToken) return;
      incoming.classList.add('is-active');
      incoming.removeAttribute('aria-hidden');
      incoming.setAttribute('data-index', String(i));
      incoming.setAttribute('alt', t(p.alt));
      outgoing.classList.remove('is-active');
      outgoing.setAttribute('aria-hidden', 'true');
      outgoing.setAttribute('alt', '');
    }

    incoming.onload = function () { incoming.onload = null; swap(); };
    incoming.onerror = function () { incoming.onerror = null; swap(); };
    incoming.src = p.img;

    if (immediate || incoming.complete) {
      window.requestAnimationFrame(swap);
    }
  }

  function startAuto() {
    if (REDUCED) return;
    if (autoTimer) window.clearInterval(autoTimer);
    autoTimer = window.setInterval(function () {
      if (heroPaused || document.hidden) return;
      showHero(activeHero + 1);
    }, 7000);
  }

  if (heroDots) {
    HERO.forEach(function (p, i) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'hero__dot' + (i === 0 ? ' is-active' : '');
      dot.setAttribute('aria-label', t(p.title));
      dot.setAttribute('aria-current', i === 0 ? 'true' : 'false');
      dot.addEventListener('click', function () {
        showHero(i);
        startAuto();
      });
      heroDots.appendChild(dot);
      dots.push(dot);
    });
  }

  var heroPrev = $('#heroPrev');
  var heroNext = $('#heroNext');
  if (heroPrev) heroPrev.addEventListener('click', function () { showHero(activeHero - 1); startAuto(); });
  if (heroNext) heroNext.addEventListener('click', function () { showHero(activeHero + 1); startAuto(); });

  if (heroStage) {
    heroStage.addEventListener('pointerenter', function () { heroPaused = true; });
    heroStage.addEventListener('pointerleave', function () { heroPaused = false; });
    heroStage.addEventListener('focusin', function () { heroPaused = true; });
    heroStage.addEventListener('focusout', function () { heroPaused = false; });
  }
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) heroPaused = false;
  });

  /* --------------------------------------------------------------------------
     Index hover preview
     -------------------------------------------------------------------------- */
  var preview = $('#indexPreview');
  var previewImg = $('#indexPreviewImg');
  var previewLabel = $('#indexPreviewLabel');
  var previewProject = null;
  var previewRaf = 0;
  var previewX = 0;
  var previewY = 0;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

  function canPreview() { return finePointer.matches && window.innerWidth > 900; }

  function positionPreview() {
    previewRaf = 0;
    if (!preview) return;
    preview.style.setProperty('--px', (previewX + 22) + 'px');
    preview.style.setProperty('--py', (previewY - 10) + 'px');
  }

  if (preview) {
    $$('.index__row').forEach(function (row) {
      var p = HERO.filter(function (x) { return x.ch === '#ch-' + row.getAttribute('data-project'); })[0];
      if (!p) return;
      row.addEventListener('pointerenter', function (e) {
        if (!canPreview()) return;
        previewProject = p;
        if (previewImg) {
          previewImg.src = row.getAttribute('data-preview') || p.img;
          previewImg.alt = '';
        }
        if (previewLabel) previewLabel.textContent = t(p.title);
        previewX = e.clientX;
        previewY = e.clientY;
        if (!previewRaf) previewRaf = window.requestAnimationFrame(positionPreview);
        preview.classList.add('is-visible');
      });
      row.addEventListener('pointerleave', function () {
        preview.classList.remove('is-visible');
        previewProject = null;
      });
    });
    document.addEventListener('pointermove', function (e) {
      if (!preview.classList.contains('is-visible')) return;
      previewX = e.clientX;
      previewY = e.clientY;
      if (!previewRaf) previewRaf = window.requestAnimationFrame(positionPreview);
    }, { passive: true });
  }

  /* --------------------------------------------------------------------------
     Menu
     -------------------------------------------------------------------------- */
  var menu = $('#menu');
  var menuOpenBtn = $('[data-menu-open]');
  var menuCloseBtn = $('[data-menu-close]');
  var menuTimer = null;
  var lastFocus = null;

  function openMenu() {
    if (!menu) return;
    window.clearTimeout(menuTimer);
    lastFocus = document.activeElement;
    menu.hidden = false;
    root.classList.add('menu-open');
    if (menuOpenBtn) menuOpenBtn.setAttribute('aria-expanded', 'true');
    window.requestAnimationFrame(function () {
      menu.classList.add('is-open');
      if (menuCloseBtn) menuCloseBtn.focus();
    });
  }

  function closeMenu(restoreFocus) {
    if (!menu || menu.hidden) return;
    menu.classList.remove('is-open');
    root.classList.remove('menu-open');
    if (menuOpenBtn) menuOpenBtn.setAttribute('aria-expanded', 'false');
    menuTimer = window.setTimeout(function () {
      menu.hidden = true;
    }, 520);
    if (restoreFocus !== false && lastFocus && typeof lastFocus.focus === 'function') {
      lastFocus.focus({ preventScroll: true });
    }
  }

  if (menuOpenBtn) menuOpenBtn.addEventListener('click', openMenu);
  if (menuCloseBtn) menuCloseBtn.addEventListener('click', function () { closeMenu(true); });

  if (menu) {
    $$('a[href^="#"]', menu).forEach(function (a) {
      a.addEventListener('click', function () { closeMenu(false); });
    });

    document.addEventListener('keydown', function (e) {
      if (menu.hidden) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        closeMenu(true);
        return;
      }
      if (e.key === 'Tab') {
        var focusables = $$('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])', menu).filter(function (el) {
          return el.offsetParent !== null;
        });
        if (!focusables.length) return;
        var first = focusables[0];
        var last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

  /* --------------------------------------------------------------------------
     Intro
     -------------------------------------------------------------------------- */
  var intro = $('#intro');
  var introSkip = $('#introSkip');
  var introNum = $('#introNum');
  var introEnded = false;
  var introTimer = null;
  var introCountTimer = null;

  function introSeen() {
    try { return window.sessionStorage.getItem('alshuraihi.intro') === '1'; } catch (e) { return false; }
  }

  function endIntro() {
    if (!intro || introEnded) return;
    introEnded = true;
    window.clearTimeout(introTimer);
    window.clearInterval(introCountTimer);
    intro.classList.add('is-leaving');
    root.classList.remove('intro-open');
    root.classList.add('intro-done');
    try { window.sessionStorage.setItem('alshuraihi.intro', '1'); } catch (e) {}
    startAuto();
    window.setTimeout(function () {
      intro.hidden = true;
      intro.classList.remove('is-leaving', 'is-counting');
    }, 760);
  }

  function startIntro() {
    if (!intro) return;
    intro.hidden = false;
    root.classList.add('intro-open');
    intro.classList.add('is-counting');
    var n = 0;
    introCountTimer = window.setInterval(function () {
      n = Math.min(9, n + 1);
      if (introNum) introNum.textContent = n < 10 ? '0' + n : String(n);
      if (n >= 9) window.clearInterval(introCountTimer);
    }, 190);
    introTimer = window.setTimeout(endIntro, 2450);
    if (introSkip) introSkip.addEventListener('click', endIntro);
    document.addEventListener('keydown', function (e) {
      if (!introEnded && e.key === 'Escape') endIntro();
    });
  }

  if (intro) {
    var hashNow = window.location.hash;
    var skipIntro = REDUCED || introSeen() || (hashNow && hashNow !== '#top');
    if (skipIntro) {
      intro.hidden = true;
      root.classList.add('intro-done');
      startAuto();
    } else {
      startIntro();
    }
  } else {
    root.classList.add('intro-done');
    startAuto();
  }

  /* --------------------------------------------------------------------------
     Reveal on scroll
     -------------------------------------------------------------------------- */
  var revealTargets = $$('.reveal');
  $$('.statement__title, .statement__aside, .index__head, .works__head, .about__main, .contact__inner').forEach(function (el) {
    el.classList.add('reveal');
    revealTargets.push(el);
  });

  if (REDUCED || !('IntersectionObserver' in window)) {
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    revealTargets.forEach(function (el) { revealObserver.observe(el); });
  }

  /* --------------------------------------------------------------------------
     Scroll: header state, progress, active nav
     -------------------------------------------------------------------------- */
  var header = $('#siteHeader');
  var progress = $('#scrollProgress');
  var lastY = window.pageYOffset || 0;
  var scrollTick = false;

  function onScroll() {
    scrollTick = false;
    var y = window.pageYOffset || document.documentElement.scrollTop || 0;

    if (header) {
      header.classList.toggle('is-scrolled', y > 18);
      if (!root.classList.contains('menu-open') && !root.classList.contains('intro-open')) {
        if (y > lastY + 4 && y > 480) header.classList.add('is-hidden');
        else if (y < lastY - 4 || y < 160) header.classList.remove('is-hidden');
      } else {
        header.classList.remove('is-hidden');
      }
    }

    if (progress) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
      progress.style.transform = 'scaleX(' + ratio + ')';
    }

    lastY = y;
  }

  window.addEventListener('scroll', function () {
    if (!scrollTick) {
      scrollTick = true;
      window.requestAnimationFrame(onScroll);
    }
  }, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();

  var navLinks = $$('[data-nav]');
  function setActiveNav(id) {
    navLinks.forEach(function (link) {
      var on = link.getAttribute('data-nav') === id;
      link.classList.toggle('is-active', on);
      if (on) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }

  var navSections = ['works', 'index', 'about', 'contact']
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && navSections.length) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActiveNav(entry.target.id);
      });
    }, { rootMargin: '-42% 0px -52% 0px', threshold: 0 });
    navSections.forEach(function (section) { navObserver.observe(section); });
  }

  /* --------------------------------------------------------------------------
     Custom cursor
     -------------------------------------------------------------------------- */
  var cursor = $('.cursor');
  var cursorDot = $('.cursor__dot');
  var cursorRing = $('.cursor__ring');
  var pointerFine = window.matchMedia('(hover: hover) and (pointer: fine)');

  if (cursor && cursorDot && cursorRing && pointerFine.matches) {
    body.classList.add('cursor-ready');
    cursor.classList.add('is-hidden');
    var cx = window.innerWidth / 2;
    var cy = window.innerHeight / 2;
    var tx = cx;
    var ty = cy;
    var cursorActive = false;
    var cursorRaf = 0;
    var lerp = REDUCED ? 1 : 0.2;

    function moveLoop() {
      cursorRaf = 0;
      cx += (tx - cx) * lerp;
      cy += (ty - cy) * lerp;
      var ringTransform = 'translate3d(' + cx + 'px,' + cy + 'px,0) translate(-50%,-50%)';
      cursorRing.style.transform = ringTransform;
      cursorDot.style.transform = 'translate3d(' + tx + 'px,' + ty + 'px,0) translate(-50%,-50%)';
      if (Math.abs(tx - cx) > 0.3 || Math.abs(ty - cy) > 0.3) {
        cursorRaf = window.requestAnimationFrame(moveLoop);
      }
    }

    function requestCursorMove() {
      if (!cursorRaf) cursorRaf = window.requestAnimationFrame(moveLoop);
    }

    document.addEventListener('pointermove', function (e) {
      if (e.pointerType === 'touch') return;
      tx = e.clientX;
      ty = e.clientY;
      if (!cursorActive) {
        cursorActive = true;
        cx = tx;
        cy = ty;
        cursor.classList.remove('is-hidden');
      }
      requestCursorMove();
    }, { passive: true });

    document.addEventListener('pointerover', function (e) {
      var target = e.target;
      if (!(target instanceof Element)) return;
      var view = target.closest('[data-cursor="view"]');
      var interactive = target.closest('a, button, input, textarea, select, label, [role="button"]');
      body.classList.toggle('cursor-view', !!view);
      body.classList.toggle('cursor-link', !view && !!interactive);
    });

    document.addEventListener('pointerleave', function () {
      cursor.classList.add('is-hidden');
      cursorActive = false;
    });
    window.addEventListener('blur', function () { cursor.classList.add('is-hidden'); });
  }

  /* --------------------------------------------------------------------------
     Footer year
     -------------------------------------------------------------------------- */
  $$('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* --------------------------------------------------------------------------
     Boot
     -------------------------------------------------------------------------- */
  applyLanguage(lang, false);
  updateHeroUI();
  onScroll();

  if (reduceMQ.addEventListener) {
    reduceMQ.addEventListener('change', function (e) {
      REDUCED = e.matches;
      root.classList.toggle('reduce-motion', REDUCED);
      if (REDUCED && autoTimer) window.clearInterval(autoTimer);
      if (!REDUCED) startAuto();
    });
  }
})();
