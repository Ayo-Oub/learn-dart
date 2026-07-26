import CodeBlock from "../components/CodeBlock";
import LessonNav from "../components/LessonNav";
import Callout from "../components/Callout";
import ExerciseCard from "../components/ExerciseCard";
import { lessonsData } from "../data/lessonsData";
import { lesson6Exercises } from "../data/lesson6Exercices";

export default function Lesson6() {
  const lesson = lessonsData.find((l) => l.id === 6);

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
          <li>ما هي الدالة (Function)؟</li>
          <li>التصريح الأساسي: نوع الإرجاع، الاسم، المعاملات</li>
          <li>
            أنواع المعاملات
            <ul>
              <li>2.1 معاملات موضعية (Positional)</li>
              <li>2.2 معاملات مسمّاة (Named) بـ {`{}`}</li>
              <li>2.3 معاملات اختيارية (Optional) بـ [ ]</li>
              <li>2.4 القيم الافتراضية (Default Values)</li>
            </ul>
          </li>
          <li>Arrow Syntax: =&gt;</li>
          <li>مثال شامل</li>
          <li>تمارين تطبيقية (10 Exercises)</li>
        </ol>

        <hr className="divider" />

        <h3 className="section-title">1 ما هي الدالة (Function)؟</h3>
        <p>
          الدالة (Function) هي مجموعة من التعليمات المُجمَّعة تحت اسم واحد، يمكن
          استدعاؤها عدة مرات دون إعادة كتابة نفس الكود. Dart لغة كائنية التوجه
          (object-oriented)، لكنها تتيح أيضاً التعامل مع الدوال كـ first-class
          objects، أي يمكن تخزينها في متغيرات، تمريرها كمعاملات لدوال أخرى، أو
          إرجاعها من دالة أخرى.
        </p>

        <div className="diagram-box">
          <div className="diagram-item">
            <span>المدخلات</span>
            <div className="diagram-shape">a, b</div>
          </div>
          <div className="diagram-equals">↓</div>
          <div className="diagram-item">
            <span>الدالة</span>
            <div className="diagram-shape type-shape">add(a, b)</div>
          </div>
          <div className="diagram-equals">↓</div>
          <div className="diagram-item">
            <span>المخرجات</span>
            <div className="diagram-shape value-shape">a + b</div>
          </div>
        </div>

        <Callout type="note">
          <strong>بتعبير مبسط:</strong> تخيل الدالة كآلة: تُدخل لها بعض القيم من
          جهة (parameters)، وهي تُرجع لك نتيجة من الجهة الأخرى (return value)،
          دون أن تحتاج لمعرفة كيف تعمل من الداخل في كل مرة تستعملها.
        </Callout>

        <h3 className="section-title">
          2 التصريح الأساسي: نوع الإرجاع، الاسم، المعاملات
        </h3>
        <p>
          كل دالة في Dart تتكون من ثلاثة أجزاء رئيسية: نوع القيمة التي تُرجعها،
          اسمها، والمعاملات التي تستقبلها:
        </p>

        <div className="syntax-box">
          <span className="syntax-part">int</span>
          <span className="syntax-part value-part">add</span>
          <span>(</span>
          <span className="syntax-part value-part">int a, int b</span>
          <span>{`) { ... }`}</span>
        </div>

        <div className="syntax-labels">
          <span>نوع الإرجاع</span>
          <span>اسم الدالة</span>
          <span>المعاملات</span>
        </div>

        <CodeBlock
          code={`int add(int a, int b) {\n  return a + b;\n}\n\nvoid main() {\n  int result = add(3, 4);\n  print(result); // 7\n}`}
        />

        <table className="data-table">
          <thead>
            <tr>
              <th>الوصف</th>
              <th>الجزء</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                نوع القيمة التي تُرجعها الدالة (أو void إذا لم تُرجع شيئاً)
              </td>
              <td>
                <strong>return type</strong>
              </td>
            </tr>
            <tr>
              <td>الاسم الذي يُستعمل لاستدعاء الدالة</td>
              <td>
                <strong>name</strong>
              </td>
            </tr>
            <tr>
              <td>القيم التي تستقبلها الدالة لتعمل عليها</td>
              <td>
                <strong>parameters</strong>
              </td>
            </tr>
          </tbody>
        </table>

        <Callout type="warning">
          <strong>ملاحظة مهمة:</strong> إذا كانت الدالة لا تُرجع أي قيمة (فقط
          تنفذ عملية مثل الطباعة)، يجب استعمال void كنوع إرجاع بدل ترك النوع
          فارغاً.
        </Callout>

        <h3 className="section-title">3 أنواع المعاملات</h3>
        <p>
          توفر Dart عدة طرق لتمرير المعاملات إلى الدالة، حسب المرونة التي
          تحتاجها:
        </p>

        <h4 className="subsection-title">2.1 معاملات موضعية (Positional)</h4>
        <p>
          يجب تمريرها بنفس الترتيب الذي صُرِّح به في الدالة، وهي إجبارية بشكل
          افتراضي:
        </p>

        <CodeBlock
          code={`String greet(String name, int age) {\n  return 'Hello $name, you are $age years old';\n}\n\nvoid main() {\n  print(greet('Amine', 22)); // الترتيب مهم هنا\n}`}
        />

        <h4 className="subsection-title">
          2.2 معاملات مسمّاة (Named) بـ {`{}`}
        </h4>
        <p>
          تُوضع بين قوسين معقوفين {`{}`}، ويتم تمريرها باستعمال اسمها مباشرة،
          مما يجعل الترتيب غير مهم ويُسهّل قراءة الكود:
        </p>

        <CodeBlock
          code={`void showProfile({required String name, required int age}) {\n  print('$name -- $age');\n}\n\nvoid main() {\n  showProfile(age: 22, name: 'Sara'); // الترتيب غير مهم\n}`}
        />

        <Callout type="note">
          الكلمة required تعني أن المعامل المسمّى إجباري رغم أنه بين {`{}`}؛
          بدونها يصبح المعامل المسمّى اختيارياً تلقائياً.
        </Callout>

        <h4 className="subsection-title">
          2.3 معاملات اختيارية (Optional) بـ [ ]
        </h4>
        <p>
          تُوضع بين قوسين مربعين [ ]، ويمكن الاستغناء عنها عند استدعاء الدالة
          دون الحاجة لاسمها:
        </p>

        <CodeBlock
          code={`String buildMessage(String title, [String? subtitle]) {\n  if (subtitle == null) {\n    return title;\n  }\n  return '$title - $subtitle';\n}\n\nvoid main() {\n  print(buildMessage('Welcome'));            // Welcome\n  print(buildMessage('Welcome', 'to Dart')); // Welcome - to Dart\n}`}
        />

        <h4 className="subsection-title">
          2.4 القيم الافتراضية (Default Values)
        </h4>
        <p>
          يمكن إعطاء قيمة افتراضية لأي معامل مسمّى أو اختياري، بحيث تُستعمل
          تلقائياً إذا لم يُمرَّر المعامل عند الاستدعاء:
        </p>

        <CodeBlock
          code={`void showButton({String label = 'OK', bool enabled = true}) {\n  print('$label -- enabled: $enabled');\n}\n\nvoid main() {\n  showButton();                       // OK -- enabled: true\n  showButton(label: 'Cancel');        // Cancel -- enabled: true\n  showButton(label: 'Delete', enabled: false);\n}`}
        />

        <table className="data-table">
          <thead>
            <tr>
              <th>مثال</th>
              <th>إجباري افتراضياً؟</th>
              <th>نوع المعامل</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td dir="ltr">greet(name, age)</td>
              <td>نعم، ويجب احترام الترتيب</td>
              <td>
                <strong>Positional</strong>
              </td>
            </tr>
            <tr>
              <td dir="ltr">{`showProfile({required String name})`}</td>
              <td>لا، إلا إذا استُعملت required</td>
              <td>
                <strong>Named {`{}`}</strong>
              </td>
            </tr>
            <tr>
              <td dir="ltr">buildMessage(title, [subtitle])</td>
              <td>لا</td>
              <td>
                <strong>Optional [ ]</strong>
              </td>
            </tr>
          </tbody>
        </table>

        <h3 className="section-title">4 Arrow Syntax: =&gt;</h3>
        <p>
          عندما تحتوي الدالة على تعليمة واحدة فقط تُرجع قيمة، يمكن اختصار
          كتابتها باستعمال =&gt; بدل return و الأقواس {`{}`}:
        </p>

        <div className="inference-diagram">
          <div className="inf-item">
            <div className="inf-code">{`int square(int x) { return x * x; }`}</div>
            <div className="inf-arrow">↓</div>
            <div className="inf-type int-type">{`int square(int x) => x * x;`}</div>
          </div>
        </div>

        <CodeBlock
          code={`int square(int x) => x * x;\n\nbool isEven(int n) => n % 2 == 0;\n\nvoid main() {\n  print(square(5));   // 25\n  print(isEven(4));   // true\n}`}
        />

        <Callout type="warning">
          <strong>ملاحظة مهمة:</strong> صيغة =&gt; تصلح فقط للدوال المكوّنة من
          تعبير واحد (expression)؛ إذا احتجت لعدة تعليمات (مثل شروط أو حلقات)،
          يجب استعمال الصيغة الكاملة {`{ ... }`}.
        </Callout>

        <h3 className="section-title">5 مثال شامل</h3>
        <CodeBlock
          code={`// دالة بمعاملات موضعية + arrow syntax\ndouble calculateTotal(double price, int quantity) => price * quantity;\n\n// دالة بمعاملات مسمّاة وقيم افتراضية\nString formatPrice({required double amount, String currency = 'MAD'}) {\n  return '\${amount.toStringAsFixed(2)} $currency';\n}\n\n// دالة بمعامل اختياري\nString buildTitle(String name, [String? badge]) {\n  return badge == null ? name : '$name ($badge)';\n}\n\nvoid main() {\n  double total = calculateTotal(49.9, 3);\n  print(formatPrice(amount: total)); // 149.70 MAD\n  print(buildTitle('Sac', 'Promo'));  // Sac (Promo)\n}`}
        />

        <Callout type="exercise">
          <strong>تمرين صغير:</strong> اكتب دالة bool isAdult(int age) باستعمال
          arrow syntax تُرجع true إذا كان العمر أكبر أو يساوي 18.
        </Callout>

        <h3 className="section-title">6 تمارين تطبيقية (10 Exercises)</h3>
        <p>
          هذه سلسلة من 10 تمارين مستوحاة من مواقف حقيقية في تطوير تطبيقات
          Flutter، تعتمد على مفاهيم الدالة: التصريح الأساسي، المعاملات الموضعية
          والمسمّاة والاختيارية، القيم الافتراضية، وarrow syntax.
        </p>

        <div className="exercises-grid">
          {lesson6Exercises.map((ex, index) => (
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
          <strong>خلاصة:</strong> الدالة تجمع الكود المتكرر تحت اسم واحد وتوضح
          ما تحتاجه (return type, name, parameters). المعاملات الموضعية تحترم
          الترتيب، المسمّاة {`{}`} توضح المعنى عند الاستدعاء، الاختيارية [ ]
          تمنح مرونة إضافية، والقيم الافتراضية تقلل الحاجة لتكرار نفس القيم. أما
          =&gt; فهي مجرد اختصار كتابي للدوال البسيطة المكوّنة من تعبير واحد.
        </Callout>
      </div>

      <LessonNav currentId={6} />
    </>
  );
}
