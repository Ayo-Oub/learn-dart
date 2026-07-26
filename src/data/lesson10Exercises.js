export const lesson10Exercises = [
  {
    id: 1,
    title: "إنشاء بطاقة معلومات مستخدم",
    difficulty: "سهل",
    context:
      "تبني شاشة 'ملفي الشخصي' في تطبيق، وتحتاج تخزين معلومات المستخدم الأساسية في خريطة واحدة.",
    questions: [
      "أنشئ Map<String, dynamic> user تحتوي على 'name', 'age', 'city'.",
      "اطبع كل قيمة على حدة باستعمال user['name']، user['age']، user['city'].",
      "استعمل user['email'] واطبع النتيجة، ولاحظ أنها تُرجع null لأن المفتاح غير موجود.",
    ],
  },
  {
    id: 2,
    title: "إضافة وتحديث معلومات المستخدم",
    difficulty: "سهل",
    context:
      "بعد إنشاء الحساب، يريد المستخدم إضافة بريده الإلكتروني وتحديث مدينته في الملف الشخصي.",
    questions: [
      "أنشئ Map<String, dynamic> user تحتوي على 'name' و'city' فقط.",
      "أضف مفتاحاً جديداً 'email' بقيمة مناسبة باستعمال user['email'] = ....",
      "حدّث قيمة 'city' الموجودة مسبقاً، ثم اطبع الخريطة الكاملة.",
    ],
  },
  {
    id: 3,
    title: "تتبع مخزون المنتجات (Stock)",
    difficulty: "متوسط",
    context:
      "في لوحة تحكم متجر إلكتروني، تحتاج تتبع كمية كل منتج في المخزون باستعمال اسم المنتج كمفتاح.",
    questions: [
      "أنشئ Map<String, int> stock تحتوي على 3 منتجات مع كمياتها.",
      "استعمل containsKey للتحقق إذا كان منتج معيّن موجوداً في stock قبل الوصول لقيمته.",
      "إذا كان موجوداً، أنقص الكمية بمقدار 1 (محاكاة عملية بيع) واطبع الخريطة بعد التعديل.",
    ],
  },
  {
    id: 4,
    title: "حذف منتج نفد من المخزون",
    difficulty: "متوسط",
    context:
      "عندما تصل كمية منتج معيّن إلى 0، تريد إزالته تماماً من قائمة المنتجات المعروضة.",
    questions: [
      "أنشئ Map<String, int> stock تحتوي على 4 منتجات، بحيث تكون كمية واحد منها 0.",
      "استعمل remove لحذف المنتج الذي كميته 0.",
      "اطبع الخريطة قبل الحذف وبعده للمقارنة.",
    ],
  },
  {
    id: 5,
    title: "عرض كل مفاتيح وقيم إعدادات التطبيق",
    difficulty: "متوسط",
    context:
      "تبني شاشة 'الإعدادات' التي تعرض قائمة بكل خيار وحالته الحالية (مفعّل أو لا).",
    questions: [
      "أنشئ Map<String, bool> settings تحتوي على 3 إعدادات مثل 'darkMode' و'notifications'.",
      "اطبع كل المفاتيح باستعمال settings.keys، وكل القيم باستعمال settings.values.",
      "استعمل حلقة for-in على settings.entries لطباعة كل إعداد بالشكل: 'darkMode: false'.",
    ],
  },
  {
    id: 6,
    title: "حساب مجموع نقاط لاعبين",
    difficulty: "متوسط",
    context:
      "في لعبة صغيرة، تخزن نقاط كل لاعب في خريطة، وتحتاج حساب المجموع الكلي لكل النقاط.",
    questions: [
      "أنشئ Map<String, int> playerScores تحتوي على 3 لاعبين ونقاطهم.",
      "أنشئ متغيراً int total = 0.",
      "استعمل forEach للمرور على playerScores وجمع كل النقاط داخل total، ثم اطبع النتيجة النهائية.",
    ],
  },
  {
    id: 7,
    title: "تحديث كمية منتج في السلة بأمان",
    difficulty: "صعب نسبياً",
    context:
      "المستخدم يضغط على زر '+' بجانب منتج في السلة، فتحتاج زيادة كميته، أو إضافته بكمية 1 إذا لم يكن موجوداً بعد.",
    questions: [
      "أنشئ Map<String, int> cart تحتوي على منتجين فقط.",
      "اكتب دالة void addToCart(Map<String, int> cart, String product) تتحقق باستعمال containsKey.",
      "إذا كان المنتج موجوداً زد قيمته بـ 1، وإلا أضفه بقيمة 1 (استعمل if/else)، ثم جرّب الدالة مع منتج موجود ومنتج جديد.",
    ],
  },
  {
    id: 8,
    title: "البحث عن أول منتج نفد مخزونه",
    difficulty: "صعب نسبياً",
    context:
      "في لوحة تحكم المخزون، تحتاج تنبيهاً سريعاً بأول منتج تصل كميته إلى 0 للتعامل معه أولاً.",
    questions: [
      "أنشئ Map<String, int> stock تحتوي على 4 منتجات، بحيث تكون كمية واحد منها 0.",
      "استعمل حلقة for-in على stock.entries مع break لإيقاف الحلقة عند أول entry.value يساوي 0.",
      "اطبع اسم أول منتج نفد مخزونه (entry.key).",
    ],
  },
  {
    id: 9,
    title: "تحويل بيانات API إلى بطاقة عرض",
    difficulty: "صعب نسبياً",
    context:
      "استقبلت من API استجابة على شكل Map تحتوي على معلومات منتج، وتحتاج تجهيز نص جاهز لعرضه في بطاقة المنتج.",
    questions: [
      "أنشئ Map<String, dynamic> product تحتوي على 'name', 'price', 'inStock' (bool).",
      "اكتب دالة String buildCardText(Map<String, dynamic> product) باستعمال arrow syntax.",
      "اجعل الدالة تُرجع نصاً يجمع الاسم والسعر، ويضيف كلمة 'Available' أو 'Out of stock' حسب قيمة inStock (استعمل ternary operator).",
    ],
  },
  {
    id: 10,
    title: "دمج إعدادات افتراضية مع إعدادات المستخدم",
    difficulty: "صعب",
    context:
      "عند فتح التطبيق لأول مرة، تريد دمج الإعدادات الافتراضية مع أي إعدادات خاصة قام المستخدم بتغييرها مسبقاً، بحيث تطغى إعدادات المستخدم عند التعارض.",
    questions: [
      "أنشئ Map<String, bool> defaultSettings تحتوي على 3 إعدادات.",
      "أنشئ Map<String, bool> userSettings تحتوي على إعداد واحد فقط يعيد تعريف قيمة موجودة في defaultSettings.",
      "استعمل حلقة for-in على userSettings.entries لتحديث القيم المطابقة داخل defaultSettings (defaultSettings[entry.key] = entry.value)، ثم اطبع defaultSettings النهائية.",
    ],
  },
];
