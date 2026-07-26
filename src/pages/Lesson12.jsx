import CodeBlock from "../components/CodeBlock";
import LessonNav from "../components/LessonNav";
import Callout from "../components/Callout";
import ExerciseCard from "../components/ExerciseCard";
import { lessonsData } from "../data/lessonsData";
import { lesson12Exercises } from "../data/lesson12Exercises";

export default function Lesson12() {
  const lesson = lessonsData.find((l) => l.id === 12);

  return (
    <>
      <div className="lesson-header">
        <p className="eyebrow">الدرس الحالي</p>
        <h2>{lesson.title}</h2>
        <p>{lesson.summary}</p>
      </div>

      <div className="lesson-card pdf-content">
        <h3 className="section-title">المحتويات</h3>
        <ol className="toc-list">
          <li>لماذا Collection if وCollection for؟</li>
          <li>Collection if: إضافة عنصر بشرط</li>
          <li>Collection if / else</li>
          <li>Collection for: بناء عناصر من حلقة</li>
          <li>الدمج مع عامل الـ Spread (...)</li>
          <li>مثال شامل</li>
          <li>تمارين تطبيقية (10 Exercises)</li>
        </ol>

        <hr className="divider" />

        <h3 className="section-title">
          1 لماذا Collection if وCollection for؟
        </h3>
        <p>
          في كثير من الأحيان، نريد بناء قائمة (أو Set أو Map) تحتوي على عناصر
          تعتمد على شرط، أو عناصر ناتجة عن تكرار. بدل كتابة القائمة أولاً ثم
          تعديلها بعد ذلك بـ if أو for خارج تعريفها، تسمح Dart بكتابة الشرط أو
          الحلقة مباشرة داخل قوسي [ ] عند إنشاء القائمة.
        </p>

        <div className="diagram-box">
          <div className="diagram-item">
            <span>الطريقة القديمة</span>
            <div className="diagram-shape">List فارغة + add داخل حلقة</div>
          </div>
          <div className="diagram-equals">→</div>
          <div className="diagram-item">
            <span>الطريقة الجديدة</span>
            <div className="diagram-shape type-shape">
              if / for داخل [ ] مباشرة
            </div>
          </div>
        </div>

        <Callout type="note">
          <strong>بتعبير مبسط:</strong> بدل أن تبني القائمة خطوة بخطوة خارج
          تعريفها، تكتب الشرط أو الحلقة "من الداخل"، وDart تتكفل ببناء القائمة
          النهائية مباشرة.
        </Callout>

        <h3 className="section-title">2 Collection if: إضافة عنصر بشرط</h3>
        <p>
          يسمح لك بإضافة عنصر إلى القائمة فقط إذا تحقق شرط معيّن، دون الحاجة لـ
          if خارجي وadd منفصلة:
        </p>

        <div className="syntax-box">
          <span>[</span>
          <span className="syntax-part value-part">'Home'</span>
          <span>,</span>
          <span className="syntax-part">if</span>
          <span>(</span>
          <span className="syntax-part value-part">isAdmin</span>
          <span>)</span>
          <span className="syntax-part value-part">'Settings'</span>
          <span>]</span>
        </div>

        <div className="syntax-labels">
          <span>عنصر عادي</span>
          <span>الشرط</span>
          <span>عنصر شرطي</span>
        </div>

        <CodeBlock
          code={`void main() {\n  bool isAdmin = true;\n\n  List<String> menuItems = [\n    'Home',\n    'Profile',\n    if (isAdmin) 'Settings',\n  ];\n\n  print(menuItems); // [Home, Profile, Settings]\n}`}
        />

        <p>مقارنة بالطريقة التقليدية دون Collection if:</p>

        <CodeBlock
          code={`void main() {\n  bool isAdmin = false;\n\n  // بدون collection if\n  List<String> menuItems = ['Home', 'Profile'];\n  if (isAdmin) {\n    menuItems.add('Settings');\n  }\n\n  print(menuItems); // [Home, Profile]\n}`}
        />

        <h3 className="section-title">3 Collection if / else</h3>
        <p>يمكن أيضاً استعمال else لإضافة عنصر بديل إذا لم يتحقق الشرط:</p>

        <CodeBlock
          code={`void main() {\n  bool isLoggedIn = false;\n\n  List<String> menuItems = [\n    'Home',\n    if (isLoggedIn) 'My Orders' else 'Login',\n  ];\n\n  print(menuItems); // [Home, Login]\n}`}
        />

        <Callout type="warning">
          <strong>ملاحظة مهمة:</strong> Collection if يُستعمل فقط لإضافة عنصر
          واحد أو عدمه (أو بديل عنه)؛ لا يمكن وضع تعليمات معقدة بداخله كما في if
          العادية.
        </Callout>

        <h3 className="section-title">4 Collection for: بناء عناصر من حلقة</h3>
        <p>
          يسمح لك ببناء عدة عناصر انطلاقاً من حلقة for مباشرة داخل تعريف
          القائمة، بدل حلقة for خارجية مع add في كل تكرار:
        </p>

        <CodeBlock
          code={`void main() {\n  List<int> numbers = [1, 2, 3];\n\n  List<int> doubled = [\n    for (var n in numbers) n * 2,\n  ];\n\n  print(doubled); // [2, 4, 6]\n}`}
        />

        <p>مقارنة بالطريقة التقليدية:</p>

        <CodeBlock
          code={`void main() {\n  List<int> numbers = [1, 2, 3];\n\n  // بدون collection for\n  List<int> doubled = [];\n  for (var n in numbers) {\n    doubled.add(n * 2);\n  }\n\n  print(doubled); // [2, 4, 6]\n}`}
        />

        <Callout type="note">
          يمكن استعمال for العادية (مع عداد) أو for-in بداخل collection for،
          تماماً كما تستعملهما خارج القائمة.
        </Callout>

        <h3 className="section-title">5 الدمج مع عامل الـ Spread (...)</h3>
        <p>
          غالباً ما تُستعمل Collection if وCollection for مع عامل ... لبناء
          قوائم مرنة تجمع بين عناصر ثابتة، شرطية، ومُولَّدة من حلقات:
        </p>

        <CodeBlock
          code={`void main() {\n  bool hasDiscount = true;\n  List<String> newProducts = ['Sac', 'Montre'];\n\n  List<String> displayItems = [\n    'Welcome Banner',\n    ...newProducts,\n    if (hasDiscount) 'Discount Banner',\n    for (var i in [1, 2, 3]) 'Ad Slot $i',\n  ];\n\n  print(displayItems);\n  // [Welcome Banner, Sac, Montre, Discount Banner, Ad Slot 1, Ad Slot 2, Ad Slot 3]\n}`}
        />

        <Callout type="warning">
          <strong>ملاحظة مهمة:</strong> يمكن دمج ...، collection if، وcollection
          for داخل نفس القائمة بأي ترتيب تحتاجه؛ Dart تُقيِّم كل عنصر بترتيب
          ظهوره في القائمة.
        </Callout>

        <h3 className="section-title">6 مثال شامل</h3>
        <CodeBlock
          code={`void main() {\n  bool isPremiumUser = true;\n  List<String> baseFeatures = ['Chat', 'Notifications'];\n  List<int> extraSlots = [1, 2];\n\n  List<String> availableFeatures = [\n    ...baseFeatures,\n    if (isPremiumUser) 'Priority Support' else 'Standard Support',\n    for (var slot in extraSlots) 'Extra Slot $slot',\n  ];\n\n  print(availableFeatures);\n  // [Chat, Notifications, Priority Support, Extra Slot 1, Extra Slot 2]\n}`}
        />

        <Callout type="exercise">
          <strong>تمرين صغير:</strong> لديك bool isDarkMode = true. أنشئ
          List&lt;String&gt; themeOptions تحتوي على 'Default' دائماً، مع إضافة
          'Dark' باستعمال collection if إذا كانت isDarkMode تساوي true.
        </Callout>

        <h3 className="section-title">7 تمارين تطبيقية (10 Exercises)</h3>
        <p>
          هذه سلسلة من 10 تمارين مستوحاة من مواقف حقيقية في تطوير تطبيقات
          Flutter، تعتمد على بناء المجموعات ديناميكياً باستعمال collection if
          وcollection for.
        </p>

        <div className="exercises-grid">
          {lesson12Exercises.map((ex, index) => (
            <ExerciseCard
              key={ex.id}
              number={index + 1}
              title={ex.title}
              difficulty={ex.difficulty}
              context={ex.context}
              questions={ex.questions}
            />
          ))}
        </div>

        <Callout type="summary">
          <strong>خلاصة:</strong> Collection if يسمح بإضافة عنصر (أو بديل عنه
          عبر else) حسب شرط مباشرة داخل تعريف القائمة، وCollection for يبني عدة
          عناصر انطلاقاً من حلقة دون الحاجة لـ add خارجية. مدمجَين مع عامل ...،
          يمنحانك طريقة مختصرة وواضحة لبناء قوائم Flutter الديناميكية (قوائم
          عناصر واجهة، قوائم اختيار، إلخ) بأقل قدر من الكود.
        </Callout>
      </div>

      <LessonNav currentId={12} />
    </>
  );
}
