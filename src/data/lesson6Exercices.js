export const lesson6Exercises = [
  {
    id: 1,
    title: "دالة حساب سعر منتج بعد الخصم",
    difficulty: "سهل",
    context:
      "تبني شاشة منتج في تطبيق Flutter، وتحتاج دالة تحسب السعر النهائي بعد تطبيق نسبة خصم.",
    questions: [
      "اكتب دالة double finalPrice(double price, double discountPercent) بمعاملات موضعية.",
      "احسب داخلها السعر بعد الخصم وأرجعه باستعمال return.",
      "جرّب الدالة بالاستدعاء finalPrice(200.0, 10) واطبع النتيجة.",
    ],
  },
  {
    id: 2,
    title: "دالة التحقق من صلاحية العمر",
    difficulty: "سهل",
    context:
      "قبل السماح لمستخدم بإنشاء حساب في تطبيقك، تحتاج التحقق من أن عمره لا يقل عن 18 سنة.",
    questions: [
      "اكتب دالة bool isAdult(int age) باستعمال arrow syntax (=>).",
      "اجعلها تُرجع true إذا كان age أكبر أو يساوي 18، وfalse خلاف ذلك.",
      "استعملها داخل if لطباعة 'Account allowed' أو 'Too young'.",
    ],
  },
  {
    id: 3,
    title: "دالة عرض ملف مستخدم (Profile) بمعاملات مسمّاة",
    difficulty: "متوسط",
    context:
      "تبني widget لعرض بطاقة مستخدم، وتريد دالة واضحة القراءة عند الاستدعاء بدل الاعتماد على ترتيب المعاملات.",
    questions: [
      "اكتب دالة void printProfile({required String name, required int age, String city = 'Casablanca'}).",
      "اطبع داخلها سطراً يجمع الاسم والعمر والمدينة.",
      "استدعِ الدالة مرة بدون تمرير city، ومرة أخرى بتمرير city مختلفة.",
    ],
  },
  {
    id: 4,
    title: "دالة بناء عنوان مع شارة اختيارية",
    difficulty: "متوسط",
    context:
      "في قائمة منتجات، بعض المنتجات تحمل شارة مثل 'جديد' أو 'تخفيض'، والبعض الآخر بدون شارة.",
    questions: [
      "اكتب دالة String buildTitle(String name, [String? badge]) بمعامل اختياري.",
      "إذا كانت badge تساوي null، أرجع الاسم فقط؛ وإلا أرجع الاسم متبوعاً بالشارة بين قوسين.",
      "جرّب الدالة مرة بمعامل واحد، ومرة بمعاملين.",
    ],
  },
  {
    id: 5,
    title: "دالة تنسيق السعر مع عملة افتراضية",
    difficulty: "متوسط",
    context:
      "تعرض أسعار المنتجات في عدة أماكن من التطبيق، وتريد صيغة موحدة لعرض السعر مع العملة.",
    questions: [
      "اكتب دالة String formatPrice({required double amount, String currency = 'MAD'}).",
      "أرجع نصاً يجمع القيمة والعملة، مثل '149.90 MAD'.",
      "استدعِ الدالة مرة بدون تحديد currency، ومرة بتحديد currency = 'USD'.",
    ],
  },
  {
    id: 6,
    title: "دالة حساب متوسط علامات الطالب",
    difficulty: "متوسط",
    context: "تبني شاشة نتائج لطالب، وتحتاج دالة تحسب المعدل من قائمة علامات.",
    questions: [
      "اكتب دالة double average(List<double> grades).",
      "استعمل حلقة for بداخلها لحساب مجموع العلامات.",
      "أرجع المجموع مقسوماً على عدد العلامات (grades.length).",
    ],
  },
  {
    id: 7,
    title: "دالة التحقق من صحة حقول تسجيل الدخول",
    difficulty: "صعب نسبياً",
    context:
      "قبل إرسال بيانات تسجيل الدخول إلى الخادم، تريد التحقق محلياً من أن البريد الإلكتروني وكلمة المرور غير فارغين.",
    questions: [
      "اكتب دالة bool isFormValid({required String email, required String password}).",
      "أرجع true فقط إذا كانت email.isNotEmpty وpassword.isNotEmpty معاً (استعمل &&).",
      "استعمل الدالة داخل if لطباعة 'Can submit' أو 'Missing fields'.",
    ],
  },
  {
    id: 8,
    title: "دالة تصنيف نتيجة اختبار (Grade)",
    difficulty: "صعب نسبياً",
    context:
      "تبني تطبيقاً تعليمياً، وتريد دالة تُرجع تقدير الطالب الحرفي بناءً على النقطة الرقمية.",
    questions: [
      "اكتب دالة String gradeFromScore(int score).",
      "استعمل switch expression بداخلها لتحويل score إلى تقدير: 'A' إذا >= 90، 'B' إذا >= 75، 'C' إذا >= 50، وإلا 'F'.",
      "جرّب الدالة مع عدة قيم مختلفة لـ score.",
    ],
  },
  {
    id: 9,
    title: "دالة بناء رسالة ترحيب حسب الوقت",
    difficulty: "صعب نسبياً",
    context:
      "تريد عرض رسالة ترحيب مختلفة في الشاشة الرئيسية حسب ساعة اليوم (صباح، مساء...).",
    questions: [
      "اكتب دالة String greetingMessage(int hour, {String name = 'Guest'}) بمعامل موضعي ومعامل مسمّى بقيمة افتراضية.",
      "استعمل if/else if/else لتحديد الرسالة: 'صباح الخير' إذا hour < 12، 'مساء الخير' إذا hour < 18، وإلا 'مساء الخير جداً'.",
      "أرجع الرسالة مدموجة مع الاسم، مثل 'صباح الخير Amine'.",
    ],
  },
  {
    id: 10,
    title: "دالة حساب سعر توصيل الطلب",
    difficulty: "صعب",
    context:
      "في تطبيق توصيل، سعر التوصيل يختلف حسب المسافة، وقد يكون هناك توصيل مجاني إذا تجاوز مبلغ الطلب حداً معيناً.",
    questions: [
      "اكتب دالة double deliveryFee({required double orderAmount, required double distanceKm, double freeAbove = 300}).",
      "إذا كانت orderAmount أكبر أو تساوي freeAbove، أرجع 0 مباشرة (استعمل return مبكرة).",
      "خلاف ذلك، احسب السعر بضرب distanceKm في سعر ثابت لكل كيلومتر (مثلاً 2.5) وأرجعه.",
      "جرّب الدالة بحالتين: طلب صغير المسافة قريبة، وطلب كبير يتجاوز freeAbove.",
    ],
  },
];
