import CodeBlock from "../components/CodeBlock";
import LessonNav from "../components/LessonNav";
import Callout from "../components/Callout";
import ExerciseCard from "../components/ExerciseCard";
import { lessonsData } from "../data/lessonsData";
import { lesson5Exercises } from "../data/lesson5Exercises";

export default function Lesson5() {
  const lesson = lessonsData.find((l) => l.id === 5);

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
          <li>ما هي الحلقات (Loops)؟</li>
          <li>حلقة for</li>
          <li>حلقة for-in</li>
          <li>حلقة while</li>
          <li>حلقة do-while</li>
          <li>التحكم في التدفق: break و continue</li>
          <li>مثال شامل</li>
          <li>تمارين تطبيقية (10 Exercises)</li>
        </ol>

        <hr className="divider" />

        <h3 className="section-title">1 ما هي الحلقات (Loops)؟</h3>
        <p>الحلقة (Loop) هي بنية برمجية تسمح بتكرار تنفيذ مجموعة من التعليمات عدة مرات، بدل إعادة كتابتها يدوياً في كل مرة. تتوقف الحلقة عادة عندما يتوقف تحقق شرط معين.</p>

        <div className="diagram-box">
          <div className="diagram-item">
            <span>الشرط</span>
            <div className="diagram-shape">i &lt; 5</div>
          </div>
          <div className="diagram-equals">↻</div>
          <div className="diagram-item">
            <span>التنفيذ</span>
            <div className="diagram-shape type-shape">print(i)</div>
          </div>
          <div className="diagram-item">
            <span>التحديث</span>
            <div className="diagram-shape value-shape">i++</div>
          </div>
        </div>

        <Callout type="note">
          <strong>بتعبير مبسط:</strong> تخيل الحلقة كشخص يكرر نفس الخطوة عدة مرات إلى أن يصل إلى هدف معين، مثل عد الأرقام من 1 إلى 10 دون أن يكتب print عشر مرات.
        </Callout>

        <h3 className="section-title">2 حلقة for</h3>
        <p>هي الحلقة الأكثر استعمالاً عندما تعرف عدد مرات التكرار مسبقاً. تتكون من ثلاثة أجزاء: البداية، الشرط، والتحديث:</p>

        <div className="syntax-box">
          <span className="syntax-part">for</span>
          <span>(</span>
          <span className="syntax-part value-part">int i = 0</span>
          <span>;</span>
          <span className="syntax-part value-part">i &lt; 5</span>
          <span>;</span>
          <span className="syntax-part value-part">i++</span>
          <span>{`) { ... }`}</span>
        </div>

        <div className="syntax-labels">
          <span>البداية</span>
          <span>الشرط</span>
          <span>التحديث</span>
        </div>

        <CodeBlock code={`void main() {\n  for (int i = 0; i < 5; i++) {\n    print('Iteration: $i');\n  }\n}\n// Iteration: 0\n// Iteration: 1\n// Iteration: 2\n// Iteration: 3\n// Iteration: 4`} />

        <Callout type="warning">
          <strong>ملاحظة مهمة:</strong> إذا نسيت تحديث المتغير (مثل i++)، سيبقى الشرط محققاً إلى الأبد وستدخل في حلقة لا نهائية (infinite loop).
        </Callout>

        <h3 className="section-title">3 حلقة for-in</h3>
        <p>تُستعمل خصيصاً للمرور على عناصر مجموعة (List, Set, Map...) دون الحاجة لعداد يدوي:</p>

        <CodeBlock code={`void main() {\n  List<String> fruits = ['تفاح', 'موز', 'برتقال'];\n\n  for (var fruit in fruits) {\n    print(fruit);\n  }\n}\n// تفاح\n// موز\n// برتقال`} />

        <div className="inference-diagram">
          <div className="inf-item">
            <div className="inf-code">for (var x in list)</div>
            <div className="inf-arrow">↓</div>
            <div className="inf-type int-type">مرور على كل عنصر</div>
          </div>
        </div>

        <Callout type="note">
          استعمل for-in عندما يهمك <strong>العنصر</strong> نفسه وليس موقعه (index)؛ وإذا احتجت للـ index أيضاً، استعمل الحلقة for العادية أو <code>list.asMap()</code>.
        </Callout>

        <h3 className="section-title">4 حلقة while</h3>
        <p>تُكرر تنفيذ الكود طالما أن الشرط لا يزال true. يتم التحقق من الشرط <strong>قبل</strong> كل تكرار:</p>

        <div className="syntax-box">
          <span className="syntax-part">while</span>
          <span>(</span>
          <span className="syntax-part value-part">condition</span>
          <span>{`) { ... }`}</span>
        </div>

        <div className="syntax-labels">
          <span>الكلمة المفتاحية</span>
          <span>الشرط</span>
          <span>الكود المكرَّر</span>
        </div>

        <CodeBlock code={`void main() {\n  int count = 0;\n\n  while (count < 3) {\n    print('Count: $count');\n    count++;\n  }\n}\n// Count: 0\n// Count: 1\n// Count: 2`} />

        <h3 className="section-title">5 حلقة do-while</h3>
        <p>تشبه while، لكن الفرق الأساسي أن الشرط يُتحقق منه <strong>بعد</strong> كل تكرار، مما يضمن تنفيذ الكود مرة واحدة على الأقل حتى لو كان الشرط false من البداية:</p>

        <CodeBlock code={`void main() {\n  int count = 5;\n\n  do {\n    print('Count: $count');\n    count++;\n  } while (count < 3);\n}\n// Count: 5   -> ينفَّذ مرة واحدة رغم أن الشرط false`} />

        <table className="data-table">
          <thead>
            <tr>
              <th>التنفيذ الأدنى</th>
              <th>وقت التحقق من الشرط</th>
              <th>الحلقة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>قد لا تُنفَّذ أبداً</td>
              <td>قبل التنفيذ</td>
              <td><strong>while</strong></td>
            </tr>
            <tr>
              <td>تُنفَّذ مرة واحدة على الأقل</td>
              <td>بعد التنفيذ</td>
              <td><strong>do-while</strong></td>
            </tr>
          </tbody>
        </table>

        <h3 className="section-title">6 التحكم في التدفق: break و continue</h3>
        <p>تسمح لك هاتان الكلمتان بالتحكم بشكل دقيق في سير الحلقة أثناء تنفيذها:</p>

        <table className="data-table">
          <thead>
            <tr>
              <th>الوصف</th>
              <th>الكلمة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>يوقف الحلقة نهائياً ويخرج منها مباشرة</td>
              <td><strong>break</strong></td>
            </tr>
            <tr>
              <td>يتخطى بقية الكود في التكرار الحالي وينتقل للتكرار التالي</td>
              <td><strong>continue</strong></td>
            </tr>
          </tbody>
        </table>

        <CodeBlock code={`void main() {\n  for (int i = 0; i < 10; i++) {\n    if (i == 5) {\n      break; // يوقف الحلقة كاملة عند i == 5\n    }\n    print(i);\n  }\n  // 0 1 2 3 4\n\n  for (int i = 0; i < 5; i++) {\n    if (i == 2) {\n      continue; // يتخطى i == 2 فقط ويكمل الباقي\n    }\n    print(i);\n  }\n  // 0 1 3 4\n}`} />

        <Callout type="warning">
          <strong>ملاحظة مهمة:</strong> break و continue يؤثران فقط على الحلقة الأقرب التي يوجدان بداخلها؛ إذا كانت لديك حلقات متداخلة (nested loops)، فهما لا يوقفان إلا الحلقة الداخلية.
        </Callout>

        <h3 className="section-title">7 مثال شامل</h3>
        <CodeBlock code={`void main() {\n  List<int> numbers = [4, 8, 15, 16, 23, 42];\n  int sum = 0;\n  int i = 0;\n\n  // for-in لجمع كل الأرقام\n  for (var n in numbers) {\n    sum += n;\n  }\n  print('Sum: $sum');\n\n  // while للبحث عن أول رقم أكبر من 20\n  while (i < numbers.length) {\n    if (numbers[i] > 20) {\n      print('أول رقم أكبر من 20: \${numbers[i]}');\n      break;\n    }\n    i++;\n  }\n\n  // for عادية مع continue لتخطي الأرقام الزوجية\n  for (int j = 0; j < numbers.length; j++) {\n    if (numbers[j] % 2 == 0) continue;\n    print('رقم فردي: \${numbers[j]}');\n  }\n}`} />

        <Callout type="exercise">
          <strong>تمرين صغير:</strong> اكتب حلقة do-while تطبع الأرقام من 10 إلى 1 (عد تنازلي)، ثم استعمل break لإيقافها عند الوصول إلى 5.
        </Callout>

        <h3 className="section-title">8 تمارين تطبيقية (10 Exercises)</h3>
        <p>هذه سلسلة من 10 تمارين مستوحاة من مواقف حقيقية يمكن أن تصادفها أثناء تطوير تطبيقات Flutter، وكلها تعتمد على المفاهيم التي رأيناها في هذا الدرس: for، for-in، while، do-while، break وcontinue.</p>

        <div className="exercises-grid">
          {lesson5Exercises.map((ex, index) => (
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
          <strong>خلاصة:</strong> for مناسبة عندما تعرف عدد التكرارات، for-in للمرور على عناصر مجموعة، while وdo-while للتكرار حسب شرط، بينما break وcontinue يمنحانك تحكماً دقيقاً في سير أي حلقة.
        </Callout>
      </div>

      <LessonNav currentId={5} />
    </>
  );
}