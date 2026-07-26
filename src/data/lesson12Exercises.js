export const lesson12Exercises = [
  {
    id: 1,
    title: "قائمة تنقّل تعرض 'الإعدادات' فقط للمسؤول",
    difficulty: "سهل",
    context:
      "تبني قائمة تنقّل جانبية (drawer) في تطبيق، وتريد إظهار خيار 'Settings' فقط إذا كان المستخدم مسؤولاً (admin).",
    questions: [
      "أنشئ متغيراً bool isAdmin = true.",
      "أنشئ List<String> menuItems تحتوي على 'Home' و'Profile' بشكل ثابت.",
      "استعمل collection if لإضافة 'Settings' فقط إذا كانت isAdmin تساوي true، ثم اطبع القائمة.",
    ],
  },
  {
    id: 2,
    title: "إضافة شارة 'خصم' حسب حالة العرض",
    difficulty: "سهل",
    context:
      "في بطاقة منتج، تريد إضافة كلمة 'Discount' إلى قائمة الشارات المعروضة فقط إذا كان المنتج عليه تخفيض.",
    questions: [
      "أنشئ متغيراً bool hasDiscount = false.",
      "أنشئ List<String> badges تحتوي على 'New' بشكل ثابت.",
      "استعمل collection if لإضافة 'Discount' حسب قيمة hasDiscount، ثم اطبع القائمة بحالتين مختلفتين لـ hasDiscount.",
    ],
  },
  {
    id: 3,
    title: "زر تسجيل الدخول أو الملف الشخصي (if/else)",
    difficulty: "متوسط",
    context:
      "في الشريط العلوي للتطبيق، تريد عرض 'Login' إذا لم يكن المستخدم مسجلاً، أو 'My Profile' إذا كان مسجلاً.",
    questions: [
      "أنشئ متغيراً bool isLoggedIn = false.",
      "أنشئ List<String> topBarItems تحتوي على 'Home' و'Search' بشكل ثابت.",
      "استعمل collection if/else لإضافة 'My Profile' أو 'Login' حسب isLoggedIn، ثم اطبع النتيجة.",
    ],
  },
  {
    id: 4,
    title: "بناء قائمة مضاعفة من كميات المنتجات",
    difficulty: "متوسط",
    context:
      "لديك قائمة كميات منتجات في السلة، وتريد بناء قائمة جديدة تعرض كل كمية بعد مضاعفتها (محاكاة لعرض 'اشترِ واحد واحصل على واحد مجاناً').",
    questions: [
      "أنشئ List<int> quantities تحتوي على 4 قيم.",
      "استعمل collection for لبناء List<int> doubledQuantities تحتوي على كل قيمة بعد ضربها في 2.",
      "اطبع القائمتين الأصلية والجديدة للمقارنة.",
    ],
  },
  {
    id: 5,
    title: "بناء قائمة أسماء منتجات بأحرف كبيرة",
    difficulty: "متوسط",
    context:
      "تريد عرض أسماء المنتجات بأحرف كبيرة بالكامل في شاشة عروض خاصة، دون تعديل القائمة الأصلية.",
    questions: [
      "أنشئ List<String> productNames تحتوي على 4 أسماء منتجات بأحرف صغيرة أو مختلطة.",
      "استعمل collection for مع toUpperCase() لبناء List<String> upperCaseNames جديدة.",
      "اطبع القائمتين للتأكد أن الأصلية لم تتغيّر.",
    ],
  },
  {
    id: 6,
    title: "دمج منتجات ثابتة مع منتجات مقترحة ديناميكياً",
    difficulty: "متوسط",
    context:
      "في الصفحة الرئيسية، تريد بناء قائمة عرض واحدة تجمع عنصراً ثابتاً في البداية، منتجات مقترحة من قائمة أخرى، وعنصر شرطي في النهاية.",
    questions: [
      "أنشئ List<String> suggestedProducts تحتوي على 3 منتجات، ومتغيراً bool showPromo = true.",
      "أنشئ List<String> homeSection تبدأ بـ 'Welcome' كعنصر ثابت.",
      "استعمل عامل ... لدمج suggestedProducts، ثم collection if لإضافة 'Promo Banner' إذا كانت showPromo تساوي true، واطبع القائمة النهائية.",
    ],
  },
  {
    id: 7,
    title: "بناء قائمة صفحات Onboarding حسب نوع المستخدم",
    difficulty: "صعب نسبياً",
    context:
      "شاشات الترحيب (onboarding) تختلف قليلاً حسب نوع المستخدم: صفحة إضافية تظهر فقط للمستخدمين الجدد.",
    questions: [
      "أنشئ متغيراً bool isNewUser = true.",
      "أنشئ List<String> onboardingPages تحتوي على 'Welcome' و'Features' بشكل ثابت.",
      "استعمل collection if لإضافة 'Getting Started Guide' فقط إذا كانت isNewUser تساوي true، وelse لإضافة 'Whats New' إذا لم يكن كذلك، ثم اطبع النتيجة.",
    ],
  },
  {
    id: 8,
    title: "بناء قائمة تقييمات نجوم (Star Rating) بحلقة",
    difficulty: "صعب نسبياً",
    context:
      "تبني widget تقييم بالنجوم، وتحتاج بناء قائمة من الرموز (● أو ○) حسب عدد النجوم الكلي والتقييم الحالي.",
    questions: [
      "أنشئ متغيرين int totalStars = 5 وint currentRating = 3.",
      "استعمل collection for مع for عادية (بعداد i من 0 إلى totalStars - 1) لبناء List<String> stars.",
      "بداخل الحلقة، استعمل ternary operator لإضافة ● إذا كانت i أصغر من currentRating، وإلا ○، ثم اطبع القائمة النهائية.",
    ],
  },
  {
    id: 9,
    title: "بناء قائمة تبويبات ديناميكية من فئات المنتجات",
    difficulty: "صعب نسبياً",
    context:
      "شاشة المتجر تعرض تبويباً لكل فئة منتجات موجودة في المخزون، بالإضافة إلى تبويب ثابت 'All' في البداية.",
    questions: [
      "أنشئ List<String> categories تحتوي على 4 فئات مختلفة.",
      "أنشئ List<String> tabs تبدأ بعنصر ثابت 'All'.",
      "استعمل collection for لإضافة كل عنصر من categories إلى tabs مباشرة داخل تعريفها، ثم اطبع tabs الكاملة.",
    ],
  },
  {
    id: 10,
    title: "بناء قائمة عناصر شاشة رئيسية متكاملة",
    difficulty: "صعب",
    context:
      "تبني قائمة العناصر التي ستُعرض في الشاشة الرئيسية لتطبيق، والتي تجمع بين: بانر ترحيب ثابت، منتجات جديدة من قائمة، شارة عرض خاص حسب شرط، ومساحات إعلانية مبنية من حلقة.",
    questions: [
      "أنشئ List<String> newArrivals تحتوي على منتجين، ومتغيراً bool hasSpecialOffer = true.",
      "أنشئ List<int> adSlotsCount تحتوي على [1, 2] لتمثيل عدد المساحات الإعلانية.",
      "ابنِ List<String> homeScreenItems تبدأ بـ 'Welcome Banner'، تدمج newArrivals عبر ...، تضيف 'Special Offer' عبر collection if حسب hasSpecialOffer، وتضيف 'Ad Slot' لكل عنصر في adSlotsCount عبر collection for، ثم اطبع القائمة الكاملة.",
    ],
  },
];
