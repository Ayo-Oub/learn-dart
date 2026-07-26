import CodeBlock from "../components/CodeBlock";
import LessonNav from "../components/LessonNav";
import Callout from "../components/Callout";
import { lessonsData } from "../data/lessonsData";

export default function Lesson3() {
  const lesson = lessonsData.find((l) => l.id === 3);

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
          <li>ما هو العامل (Operator)؟</li>
          <li>العوامل الحسابية (Arithmetic)</li>
          <li>عوامل المقارنة (Relational)</li>
          <li>العوامل المنطقية (Logical)</li>
          <li>عوامل الإسناد (Assignment)</li>
          <li>مثال شامل</li>
        </ol>

        <hr className="divider" />

        <h3 className="section-title">1 ما هو العامل (Operator)؟</h3>
        <p>العامل (Operator) هو رمز خاص يُستعمل لإجراء عملية على قيمة واحدة أو أكثر (تسمى operands)، مثل الجمع أو المقارنة أو إسناد قيمة لمتغير. في Dart، العوامل مقسّمة إلى عدة فئات حسب نوع العملية التي تقوم بها.</p>

        <div className="diagram-box">
          <div className="diagram-item">
            <span>القيمة الأولى</span>
            <div className="diagram-shape">10</div>
          </div>
          <div className="diagram-equals">+</div>
          <div className="diagram-item">
            <span>القيمة الثانية</span>
            <div className="diagram-shape value-shape">5</div>
          </div>
          <div className="diagram-equals">=</div>
          <div className="diagram-item">
            <span>النتيجة</span>
            <div className="diagram-shape type-shape">15</div>
          </div>
        </div>

        <Callout type="note">
          <strong>بتعبير مبسط:</strong> العامل هو أداة تربط بين قيمتين أو أكثر لتنتج قيمة جديدة أو نتيجة منطقية (صح/خطأ)، تماماً كما تربط علامة + بين رقمين لتعطيك مجموعهما.
        </Callout>

        <h3 className="section-title">2 العوامل الحسابية (Arithmetic)</h3>
        <p>تُستعمل لإجراء العمليات الحسابية الأساسية على الأرقام (int أو double):</p>

        <table className="data-table">
          <thead>
            <tr>
              <th>مثال</th>
              <th>الوصف</th>
              <th>العامل</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td dir="ltr">a + b</td>
              <td>الجمع</td>
              <td><strong>+</strong></td>
            </tr>
            <tr>
              <td dir="ltr">a - b</td>
              <td>الطرح</td>
              <td><strong>-</strong></td>
            </tr>
            <tr>
              <td dir="ltr">a * b</td>
              <td>الضرب</td>
              <td><strong>*</strong></td>
            </tr>
            <tr>
              <td dir="ltr">a / b</td>
              <td>القسمة (تعطي دائماً double)</td>
              <td><strong>/</strong></td>
            </tr>
            <tr>
              <td dir="ltr">a ~/ b</td>
              <td>القسمة الصحيحة (تُهمل الباقي)</td>
              <td><strong>~/</strong></td>
            </tr>
            <tr>
              <td dir="ltr">a % b</td>
              <td>باقي القسمة (modulo)</td>
              <td><strong>%</strong></td>
            </tr>
            <tr>
              <td dir="ltr">a++ / a--</td>
              <td>الزيادة أو النقصان بواحد</td>
              <td><strong>++ / --</strong></td>
            </tr>
          </tbody>
        </table>

        <CodeBlock code={`void main() {\n  int a = 17;\n  int b = 5;\n\n  print(a + b);   // 22\n  print(a - b);   // 12\n  print(a * b);   // 85\n  print(a / b);   // 3.4\n  print(a ~/ b);  // 3\n  print(a % b);   // 2\n\n  a++;\n  print(a); // 18\n}`} />

        <Callout type="warning">
          <strong>ملاحظة مهمة:</strong> عامل القسمة العادي / يُرجع دائماً قيمة من نوع double حتى لو كان الناتج عدداً صحيحاً، بينما ~/ يُرجع int دائماً.
        </Callout>

        <h3 className="section-title">3 عوامل المقارنة (Relational)</h3>
        <p>تُستعمل لمقارنة قيمتين، وتُرجع دائماً قيمة منطقية bool (true أو false):</p>

        <div className="inference-diagram">
          <div className="inf-item">
            <div className="inf-code">5 == 5</div>
            <div className="inf-arrow">↓</div>
            <div className="inf-type int-type">true</div>
          </div>
          <div className="inf-item">
            <div className="inf-code">5 != 3</div>
            <div className="inf-arrow">↓</div>
            <div className="inf-type double-type">true</div>
          </div>
          <div className="inf-item">
            <div className="inf-code">5 &gt; 8</div>
            <div className="inf-arrow">↓</div>
            <div className="inf-type string-type">false</div>
          </div>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>المعنى</th>
              <th>العامل</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>يساوي</td>
              <td><strong>==</strong></td>
            </tr>
            <tr>
              <td>لا يساوي</td>
              <td><strong>!=</strong></td>
            </tr>
            <tr>
              <td>أكبر من / أصغر من</td>
              <td><strong>&gt; / &lt;</strong></td>
            </tr>
            <tr>
              <td>أكبر أو يساوي / أصغر أو يساوي</td>
              <td><strong>&gt;= / &lt;=</strong></td>
            </tr>
          </tbody>
        </table>

        <CodeBlock code={`int age = 20;\n\nprint(age == 18); // false\nprint(age != 18); // true\nprint(age >= 18); // true`} />

        <h3 className="section-title">4 العوامل المنطقية (Logical)</h3>
        <p>تُستعمل لدمج أو عكس عدة شروط منطقية (bool) مع بعضها:</p>

        <table className="data-table">
          <thead>
            <tr>
              <th>الوصف</th>
              <th>مثال</th>
              <th>العامل</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>و (يجب أن يتحقق الشرطان معاً)</td>
              <td dir="ltr">a &amp;&amp; b</td>
              <td><strong>&amp;&amp;</strong></td>
            </tr>
            <tr>
              <td>أو (يكفي تحقق شرط واحد)</td>
              <td dir="ltr">a || b</td>
              <td><strong>||</strong></td>
            </tr>
            <tr>
              <td>نفي (عكس القيمة المنطقية)</td>
              <td dir="ltr">!a</td>
              <td><strong>!</strong></td>
            </tr>
          </tbody>
        </table>

        <CodeBlock code={`bool isStudent = true;\nbool hasCard = false;\n\nprint(isStudent && hasCard); // false\nprint(isStudent || hasCard); // true\nprint(!isStudent);           // false`} />

        <Callout type="note">
          يمكنك دمج عوامل المقارنة مع العوامل المنطقية لبناء شروط أكثر تعقيداً، مثل: <code>age &gt;= 18 &amp;&amp; hasID == true</code>.
        </Callout>

        <h3 className="section-title">5 عوامل الإسناد (Assignment)</h3>
        <p>تُستعمل لإسناد قيمة إلى متغير، وتوجد نسخة "مختصرة" منها تجمع بين عملية حسابية وإسناد في آن واحد:</p>

        <div className="syntax-box">
          <span className="syntax-part">a</span>
          <span className="syntax-part value-part">+=</span>
          <span>5</span>
          <span>;</span>
        </div>

        <div className="syntax-labels">
          <span>المتغير</span>
          <span>عامل الإسناد المختصر</span>
          <span>القيمة</span>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>يعادل</th>
              <th>مثال</th>
              <th>العامل</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td dir="ltr">a = 5</td>
              <td dir="ltr">a = 5</td>
              <td><strong>=</strong></td>
            </tr>
            <tr>
              <td dir="ltr">a = a + b</td>
              <td dir="ltr">a += b</td>
              <td><strong>+=</strong></td>
            </tr>
            <tr>
              <td dir="ltr">a = a - b</td>
              <td dir="ltr">a -= b</td>
              <td><strong>-=</strong></td>
            </tr>
            <tr>
              <td dir="ltr">a = a * b</td>
              <td dir="ltr">a *= b</td>
              <td><strong>*=</strong></td>
            </tr>
            <tr>
              <td dir="ltr">a = a / b</td>
              <td dir="ltr">a /= b</td>
              <td><strong>/=</strong></td>
            </tr>
            <tr>
              <td dir="ltr">a = a ~/ b</td>
              <td dir="ltr">a ~/= b</td>
              <td><strong>~/=</strong></td>
            </tr>
            <tr>
              <td dir="ltr">a = a ?? b</td>
              <td dir="ltr">a ??= b</td>
              <td><strong>??=</strong></td>
            </tr>
          </tbody>
        </table>

        <CodeBlock code={`void main() {\n  int score = 10;\n\n  score += 5;  // score = score + 5\n  print(score); // 15\n\n  score *= 2;  // score = score * 2\n  print(score); // 30\n\n  int? bonus;\n  bonus ??= 100; // يُسند فقط إذا كانت bonus تساوي null\n  print(bonus); // 100\n}`} />

        <Callout type="warning">
          <strong>ملاحظة مهمة:</strong> عامل ??= خاص بـ Dart ويُستعمل مع القيم القابلة لأن تكون null، حيث يُسند القيمة الجديدة فقط إذا كان المتغير لا يزال null.
        </Callout>

        <h3 className="section-title">6 مثال شامل</h3>
        <CodeBlock code={`void main() {\n  int average = 8;\n  int bonus = 3;\n\n  average += bonus; // إسناد + جمع\n  bool isPassed = average >= 10;\n\n  bool eligible = isPassed && average <= 20;\n\n  print(average);   // 11\n  print(isPassed);  // true\n  print(eligible);  // true\n}`} />

        <Callout type="exercise">
          <strong>تمرين صغير:</strong> جرّب استعمال ~/ و % على عددين من اختيارك، ثم استعمل +=، ودمج شرط بـ && و|| للتحقق من نتيجة الطالب.
        </Callout>

        <Callout type="summary">
          <strong>خلاصة:</strong> العوامل الحسابية تُجري العمليات على الأرقام، وعوامل المقارنة تقارن القيم، والعوامل المنطقية تدمج الشروط، بينما عوامل الإسناد تُبسّط كتابة الكود عند تحديث قيمة متغير.
          هذه الأدوات الأربع هي أساس أي عملية حسابية أو منطقية في Dart.
        </Callout>
      </div>

      <LessonNav currentId={3} />
    </>
  );
}