export const lesson5Exercises = [
  {
    id: 1,
    title: "بناء قائمة منتجات (ListView)",
    difficulty: "سهل",
    context:
      "لديك List<String> products تحتوي على أسماء منتجات: ['Sac', 'Chaussures', 'Montre', 'Casquette'].",
    questions: [
      "استعمل حلقة for مع عداد i للمرور على القائمة.",
      "اطبع كل منتج مسبوقاً برقمه بالشكل: 'Product 1: Sac'.",
      "لاحظ كيف يشبه هذا ما ستفعله لاحقاً داخل ListView.builder في Flutter.",
    ],
  },
  {
    id: 2,
    title: "حساب مجموع السلة (Cart Total)",
    difficulty: "سهل",
    context:
      "لديك List<double> prices = [48.9, 120.0, 15.5, 79.99] تمثل أثمنة المنتجات في سلة الشراء.",
    questions: [
      "أنشئ متغيراً double total = 0.",
      "استعمل حلقة for لجمع كل الأثمنة داخل total.",
      "اطبع النتيجة النهائية كما تظهر في شاشة الدفع (checkout).",
    ],
  },
  {
    id: 3,
    title: "عدّ المنتجات المتوفرة (Stock)",
    difficulty: "متوسط",
    context:
      "لديك قائمتان متوازيتان: List<String> productNames وList<bool> inStock، بحيث يمثل كل عنصر في inStock حالة توفر المنتج الموجود في نفس الموضع من productNames.",
    questions: [
      "استعمل حلقة for مع عداد i للمرور على القائمتين معاً.",
      "استعمل continue لتخطي أي منتج تكون قيمته في inStock تساوي false.",
      "اطبع أسماء المنتجات المتوفرة فقط.",
      "اطبع في النهاية العدد الإجمالي للمنتجات المتوفرة.",
    ],
  },
  {
    id: 4,
    title: "البحث عن أول مهمة غير منجزة",
    difficulty: "متوسط",
    context:
      "لديك قائمتان متوازيتان: List<String> todoTitles وList<bool> todoDone.",
    questions: [
      "استعمل حلقة while أو for مع عداد i.",
      "تحقق في كل تكرار إذا كانت todoDone[i] تساوي false.",
      "إذا وجدت أول مهمة غير منجزة، اطبع عنوانها من todoTitles ثم استعمل break لإيقاف الحلقة.",
    ],
  },
  {
    id: 5,
    title: "تقسيم النتائج إلى صفحات (Pagination)",
    difficulty: "متوسط",
    context:
      "تريد عرض نتائج API مقسّمة على شكل صفحات، كل صفحة تحتوي على 10 عناصر من أصل 50 عنصراً.",
    questions: [
      "أنشئ List<int> allItemsIds تحتوي على 50 عنصراً باستعمال حلقة for (من 0 إلى 49).",
      "استعمل حلقة for ثانية بخطوة i += 10 للمرور على الصفحات.",
      "اطبع رقم أول عنصر في كل صفحة (الصفحة 1 تبدأ من 0، الصفحة 2 من 10، وهكذا).",
    ],
  },
  {
    id: 6,
    title: "إعادة المحاولة عند فشل الاتصال (Retry)",
    difficulty: "متوسط",
    context:
      "لديك متغير bool isConnected = false يمثل حالة الاتصال بالشبكة، ومتغير int attempts = 0.",
    questions: [
      "اكتب حلقة do-while تزيد قيمة attempts في كل تكرار.",
      "بعد المحاولة الثانية، اجعل isConnected تصبح true (لمحاكاة نجاح الاتصال).",
      "أوقف الحلقة إذا أصبح isConnected يساوي true، أو إذا وصلت attempts إلى 3 محاولات.",
      "اطبع رسالة تلخص النتيجة (نجاح الاتصال أو فشل بعد 3 محاولات).",
    ],
  },
  {
    id: 7,
    title: "عدّ الإشعارات غير المقروءة",
    difficulty: "متوسط",
    context:
      "لديك List<bool> isRead تمثل حالة قراءة كل إشعار (true = مقروء، false = غير مقروء).",
    questions: [
      "استعمل حلقة for-in للمرور على القائمة.",
      "استعمل continue لتخطي الإشعارات المقروءة (true).",
      "احسب عدد الإشعارات غير المقروءة في متغير عداد.",
      "اطبع العدد النهائي كما لو كان يظهر كـ badge فوق أيقونة الجرس.",
    ],
  },
  {
    id: 8,
    title: "التحقق من صحة نموذج (Validation Loop)",
    difficulty: "صعب نسبياً",
    context:
      "لديك List<String> fieldValues تمثل قيم حقول نموذج (Name, Email, Phone).",
    questions: [
      "استعمل حلقة for مع عداد i للمرور على كل قيمة.",
      "تحقق في كل تكرار إذا كانت fieldValues[i].isEmpty.",
      "إذا وجدت حقلاً فارغاً، اطبع 'Field X is required' (X هو رقم الحقل) ثم استعمل break.",
      "إذا مرّت كل الحقول بدون فراغ، اطبع 'Form is valid'.",
    ],
  },
  {
    id: 9,
    title: "بناء مؤشرات الشرائح (Carousel Dots)",
    difficulty: "صعب نسبياً",
    context:
      "لديك int totalSlides = 5 يمثل عدد الصور في carousel، وint currentIndex = 2.",
    questions: [
      "أنشئ متغيراً String dots = '' لتجميع النقاط.",
      "استعمل حلقة for من 0 إلى totalSlides - 1.",
      "أضف ● إلى dots إذا كانت i تساوي currentIndex، وإلا أضف ○.",
      "اطبع dots في النهاية كما تظهر عادة أسفل PageView.",
    ],
  },
  {
    id: 10,
    title: "رفع الصور على دفعات (Batch Upload)",
    difficulty: "صعب",
    context:
      "لديك List<String> imagePaths تحتوي على مسارات 6 صور تريد 'رفعها' واحدة تلو الأخرى (تكفي طباعة اسم كل صورة لمحاكاة الرفع).",
    questions: [
      "استعمل حلقة for-in مع عداد داخلي count = 0.",
      "اطبع اسم كل صورة، وزد count بمقدار 1 بعد كل رفع.",
      "كل ما وصل count إلى 3، اطبع 'Batch 1 done' وأعد count إلى 0 لبدء دفعة جديدة.",
    ],
  },
];