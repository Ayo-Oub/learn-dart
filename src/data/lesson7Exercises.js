export const lesson7Exercises = [
  {
    id: 1,
    title: "دالة مجهولة لمضاعفة الكمية",
    difficulty: "سهل",
    context:
      "تحتاج دالة سريعة تُستعمل مرة واحدة فقط لحساب كمية مضاعفة قبل إرسالها إلى دالة أخرى.",
    questions: [
      "أنشئ متغيراً var doubleQty يُخزَّن فيه دالة مجهولة تستقبل int quantity.",
      "اجعل الدالة تُرجع quantity * 2 باستعمال arrow syntax.",
      "استدعِ doubleQty(5) واطبع النتيجة.",
    ],
  },
  {
    id: 2,
    title: "تمرير دالة onPressed لزر",
    difficulty: "سهل",
    context:
      "تبني دالة تحاكي سلوك زر في Flutter، حيث تستقبل دالة callback تُنفَّذ عند 'الضغط'.",
    questions: [
      "اكتب دالة void simulateButton(void Function() onPressed).",
      "اجعلها تطبع 'Button tapped' ثم تستدعي onPressed().",
      "استدعِ simulateButton مع دالة مجهولة تطبع 'Going to next screen'.",
    ],
  },
  {
    id: 3,
    title: "تصفية قائمة منتجات بشرط مخصص",
    difficulty: "متوسط",
    context:
      "تبني شاشة بحث، وتريد دالة عامة تصفّي قائمة أسعار حسب شرط يمرره المستخدم من الخارج.",
    questions: [
      "اكتب دالة List<double> filterPrices(List<double> prices, bool Function(double) test).",
      "استعمل حلقة for-in بداخلها لبناء قائمة جديدة تحتوي فقط على العناصر التي test(price) لها true.",
      "استدعِها مرة بدالة مجهولة تُبقي الأسعار الأقل من 100، ومرة أخرى بشرط مختلف.",
    ],
  },
  {
    id: 4,
    title: "دالة تنفَّذ بعد انتهاء عملية (Callback)",
    difficulty: "متوسط",
    context:
      "في تطبيقات حقيقية، تريد تنفيذ إجراء معيّن (مثل عرض رسالة) فقط بعد انتهاء عملية أخرى مثل حفظ بيانات.",
    questions: [
      "اكتب دالة void saveProfile(String name, void Function(String) onSaved).",
      "اجعلها تطبع 'Saving $name...' ثم تستدعي onSaved(name).",
      "استدعِها مع دالة مجهولة تطبع '$name saved successfully!' (استعمل معامل مناسب داخل الدالة المجهولة).",
    ],
  },
  {
    id: 5,
    title: "عداد بسيط باستعمال Closure",
    difficulty: "متوسط",
    context:
      "تريد بناء عداد نقاط (score counter) في لعبة صغيرة، بحيث تبقى القيمة محفوظة بين كل استدعاء.",
    questions: [
      "اكتب دالة Function makeScoreCounter() تحتوي على متغير محلي int score = 0.",
      "اجعلها تُرجع دالة مجهولة تزيد score بمقدار 1 في كل نداء وتُرجع القيمة الجديدة.",
      "أنشئ متغيراً var scoreA = makeScoreCounter() ونادِ عليه 3 مرات متتالية مع طباعة النتيجة كل مرة.",
    ],
  },
  {
    id: 6,
    title: "عدادان مستقلان (Independent Closures)",
    difficulty: "متوسط",
    context:
      "تريد التأكد من أن كل لاعب في تطبيقك له عداد نقاط مستقل تماماً عن باقي اللاعبين.",
    questions: [
      "باستعمال نفس الدالة makeScoreCounter() من التمرين السابق، أنشئ متغيرين player1Score وplayer2Score.",
      "نادِ على player1Score() مرتين، وعلى player2Score() مرة واحدة فقط.",
      "اطبع نتيجة كل واحد منهما، ولاحظ أنهما لا يتأثران ببعضهما.",
    ],
  },
  {
    id: 7,
    title: "تنفيذ إجراء لكل عنصر في قائمة (forEach مخصص)",
    difficulty: "صعب نسبياً",
    context:
      "تبني دالة عامة تسمح بتنفيذ أي إجراء تريده على كل عنصر من عناصر قائمة تنبيهات، بدل تكرار نفس الحلقة في كل مرة.",
    questions: [
      "اكتب دالة void runOnEach(List<String> items, void Function(String) action).",
      "استعمل حلقة for-in بداخلها لاستدعاء action(item) على كل عنصر.",
      "استدعِها مع دالة مجهولة تطبع كل عنصر مسبوقاً بكلمة 'Notification: '.",
    ],
  },
  {
    id: 8,
    title: "دالة تُنشئ رسالة ترحيب مخصصة (Closure بمعامل)",
    difficulty: "صعب نسبياً",
    context:
      "تريد تجهيز دالة ترحيب جاهزة لكل مستخدم بمجرد تسجيل الدخول، دون تكرار كتابة اسمه في كل رسالة لاحقة.",
    questions: [
      "اكتب دالة Function(String) makeGreeter(String userName) تُرجع دالة مجهولة.",
      "اجعل الدالة المُرجَعة تستقبل String message وتُرجع نصاً يجمع userName وmessage.",
      "أنشئ متغيراً var greetSara = makeGreeter('Sara') واستعمله لطباعة رسالتين مختلفتين.",
    ],
  },
  {
    id: 9,
    title: "التحقق من صحة الحقول بقائمة من الدوال",
    difficulty: "صعب نسبياً",
    context:
      "في نموذج تسجيل، تريد تشغيل عدة قواعد تحقق (validators) على نفس القيمة بدل كتابة شروط منفصلة لكل قاعدة.",
    questions: [
      "اكتب دالة bool runValidators(String value, List<bool Function(String)> validators).",
      "استعمل حلقة for-in على validators، وإذا وجدت واحدة تُرجع false، أرجع false مباشرة (return مبكرة).",
      "إذا نجحت كل القواعد، أرجع true. جرّبها بقائمة تحتوي على دالتين مجهولتين: واحدة تتحقق من isNotEmpty وأخرى تتحقق من length >= 6.",
    ],
  },
  {
    id: 10,
    title: "متتبّع طلبات بعداد داخلي (Closure أكثر تعقيداً)",
    difficulty: "صعب",
    context:
      "تبني نظام تتبع بسيط لعدد الطلبات المُعالجة في اليوم، حيث تحتاج دالتين مرتبطتين: واحدة لزيادة العدد وواحدة لقراءته، مع الحفاظ على نفس القيمة بينهما.",
    questions: [
      "اكتب دالة Map<String, Function> makeOrderTracker() تحتوي على متغير محلي int total = 0.",
      "أرجع منها خريطة تحتوي على مفتاحين: 'add' (دالة مجهولة تزيد total بمقدار 1) و'count' (دالة مجهولة تُرجع القيمة الحالية لـ total).",
      "أنشئ متغيراً var tracker = makeOrderTracker()، نادِ على tracker['add']!() ثلاث مرات، ثم اطبع tracker['count']!().",
    ],
  },
];
