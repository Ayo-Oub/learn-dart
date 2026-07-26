import CodeBlock from "../components/CodeBlock";
import LessonNav from "../components/LessonNav";
import Callout from "../components/Callout";
import { lessonsData } from "../data/lessonsData";

export default function Lesson4() {
  const lesson = lessonsData.find((l) => l.id === 4);

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
          <li>ما هي الشروط (Conditions)؟</li>
          <li>if, else if, else</li>
          <li>العامل الثلاثي (Ternary Operator)</li>
          <li>Switch والـ Pattern Matching</li>
          <li>مثال شامل</li>
        </ol>

        <hr className="divider" />

        <h3 className="section-title">1 ما هي الشروط (Conditions)؟</h3>
        <p>الشرط هو تعليمة تسمح للبرنامج باتخاذ قرار: تنفيذ كود معين إذا تحقق شرط ما، أو تنفيذ كود آخر إذا لم يتحقق. كل شرط يعتمد على تعبير (expression) يُقيَّم إلى true أو false.</p>

        <div className="diagram-box">
          <div className="diagram-item">
            <span>الشرط</span>
            <div className="diagram-shape">age &gt;= 18</div>
          </div>
          <div className="diagram-equals">؟</div>
          <div className="diagram-item">
            <span>true</span>
            <div className="diagram-shape type-shape">بالغ</div>
          </div>
          <div className="diagram-item">
            <span>false</span>
            <div className="diagram-shape value-shape">قاصر</div>
          </div>
        </div>

        <Callout type="note">
          <strong>بتعبير مبسط:</strong> تخيل الشرط كملتقى طرق: إذا تحقق شرط معين تسلك الطريق الأول، وإلا تسلك طريقاً آخر.
        </Callout>

        <h3 className="section-title">2 if, else if, else</h3>
        <p>هي البنية الأساسية لكتابة الشروط في Dart. يمكنك التحقق من شرط واحد، أو عدة شروط متتالية:</p>

        <div className="syntax-box">
          <span className="syntax-part">if</span>
          <span>(</span>
          <span className="syntax-part value-part">condition</span>
          <span>{`) { ... }`}</span>
        </div>

        <div className="syntax-labels">
          <span>الكلمة المفتاحية</span>
          <span>الشرط</span>
          <span>الكود المنفَّذ</span>
        </div>

        <CodeBlock code={`void main() {\n  int age = 20;\n\n  if (age < 13) {\n    print('طفل');\n  } else if (age < 18) {\n    print('مراهق');\n  } else {\n    print('بالغ');\n  }\n}`} />

        <table className="data-table">
          <thead>
            <tr>
              <th>الوصف</th>
              <th>الكلمة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>يُنفَّذ إذا تحقق الشرط</td>
              <td><strong>if</strong></td>
            </tr>
            <tr>
              <td>يُنفَّذ إذا لم يتحقق الشرط الأول، ويُختبَر شرط جديد</td>
              <td><strong>else if</strong></td>
            </tr>
            <tr>
              <td>يُنفَّذ إذا لم يتحقق أي شرط سابق</td>
              <td><strong>else</strong></td>
            </tr>
          </tbody>
        </table>

        <Callout type="warning">
          <strong>ملاحظة مهمة:</strong> يمكن أن يكون لديك عدة else if متتالية، لكن else واحد فقط في النهاية (اختياري)، ويُنفَّذ أول شرط يتحقق فقط.
        </Callout>

        <h3 className="section-title">3 العامل الثلاثي (Ternary Operator)</h3>
        <p>هو اختصار لكتابة if/else بسيطة في سطر واحد فقط، ويُستعمل عندما تريد اختيار قيمة من بين قيمتين حسب شرط:</p>

        <div className="syntax-box">
          <span className="syntax-part">condition</span>
          <span>?</span>
          <span className="syntax-part value-part">expr1</span>
          <span>:</span>
          <span className="syntax-part value-part">expr2</span>
        </div>

        <div className="syntax-labels">
          <span>الشرط</span>
          <span>القيمة إذا true</span>
          <span>القيمة إذا false</span>
        </div>

        <div className="inference-diagram">
          <div className="inf-item">
            <div className="inf-code">age &gt;= 18 ? 'بالغ' : 'قاصر'</div>
            <div className="inf-arrow">↓</div>
            <div className="inf-type int-type">'بالغ'</div>
          </div>
        </div>

        <CodeBlock code={`void main() {\n  int age = 20;\n\n  String status = age >= 18 ? 'بالغ' : 'قاصر';\n  print(status); // بالغ\n\n  int a = 10, b = 20;\n  int max = a > b ? a : b;\n  print(max); // 20\n}`} />

        <Callout type="note">
          العامل الثلاثي يُستعمل فقط عندما تريد <strong>قيمة</strong> ناتجة عن الشرط، وليس لتنفيذ عدة تعليمات؛ إذا احتجت لتعليمات معقدة، استعمل if/else العادية.
        </Callout>

        <h3 className="section-title">4 Switch والـ Pattern Matching</h3>
        <p>تُستعمل switch عندما تريد مقارنة قيمة واحدة بعدة احتمالات مختلفة. ومنذ Dart 3، أصبحت switch أقوى بكثير بفضل الـ pattern matching والـ exhaustiveness checking (يتحقق المترجم من تغطية كل الحالات الممكنة):</p>

        <CodeBlock code={`void main() {\n  String grade = 'B';\n\n  switch (grade) {\n    case 'A':\n      print('ممتاز');\n      break;\n    case 'B':\n      print('جيد جداً');\n      break;\n    case 'C':\n      print('مقبول');\n      break;\n    default:\n      print('غير محدد');\n  }\n}`} />

        <p>البنية الجديدة (switch expression) في Dart 3 تسمح باستعمال switch كتعبير يُرجع قيمة مباشرة، مع صيغة أوضح وبدون break:</p>

        <CodeBlock code={`void main() {\n  int score = 85;\n\n  String result = switch (score) {\n    >= 90 => 'ممتاز',\n    >= 75 => 'جيد جداً',\n    >= 50 => 'مقبول',\n    _ => 'راسب',\n  };\n\n  print(result); // جيد جداً\n}`} />

        <p>كما يمكن استعمال pattern matching للتحقق من بنية القيم نفسها، مثل الأزواج (records) أو القوائم:</p>

        <CodeBlock code={`void main() {\n  var point = (0, 5);\n\n  String description = switch (point) {\n    (0, 0) => 'نقطة الأصل',\n    (0, _) => 'على المحور y',\n    (_, 0) => 'على المحور x',\n    (_, _) => 'نقطة عادية',\n  };\n\n  print(description); // على المحور y\n}`} />

        <table className="data-table">
          <thead>
            <tr>
              <th>الوصف</th>
              <th>المفهوم</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>الصيغة القديمة، تُنفَّذ كسلسلة تعليمات</td>
              <td><strong>switch statement</strong></td>
            </tr>
            <tr>
              <td>الصيغة الجديدة (Dart 3)، تُرجع قيمة مباشرة</td>
              <td><strong>switch expression</strong></td>
            </tr>
            <tr>
              <td>المترجم يُجبرك على تغطية كل الحالات الممكنة</td>
              <td><strong>exhaustiveness</strong></td>
            </tr>
            <tr>
              <td>مطابقة بنية القيمة (record, list...) وليس فقط قيمتها</td>
              <td><strong>pattern matching</strong></td>
            </tr>
          </tbody>
        </table>

        <Callout type="warning">
          <strong>ملاحظة مهمة:</strong> في switch expression الجديدة، إذا لم تُغطِّ كل الحالات الممكنة ولم تضع الحالة الافتراضية <code>_</code>، سيعطيك المترجم خطأ في compile-time بدل أن ينهار البرنامج أثناء التشغيل.
        </Callout>

        <h3 className="section-title">5 مثال شامل</h3>
        <CodeBlock code={`void main() {\n  int score = 62;\n\n  // if / else if / else\n  if (score >= 50) {\n    print('ناجح');\n  } else {\n    print('راسب');\n  }\n\n  // ternary\n  String status = score >= 50 ? 'ناجح' : 'راسب';\n\n  // switch expression (Dart 3)\n  String grade = switch (score) {\n    >= 90 => 'A',\n    >= 75 => 'B',\n    >= 50 => 'C',\n    _ => 'F',\n  };\n\n  print('$status -- Grade: $grade');\n}`} />

        <Callout type="exercise">
          <strong>تمرين صغير:</strong> اكتب switch expression تُحوّل رقم يوم (1 إلى 7) إلى اسم اليوم المقابل باللغة العربية، مع التأكد من تغطية كل الحالات.
        </Callout>

        <Callout type="summary">
          <strong>خلاصة:</strong> if/else هي الأداة الأساسية لاتخاذ القرارات، والعامل الثلاثي اختصار لحالة بسيطة تُرجع قيمة، بينما switch (خصوصاً بعد Dart 3) توفر مقارنة أقوى وأوضح مع ضمان تغطية كل الحالات بفضل pattern matching.
        </Callout>
      </div>

      <LessonNav currentId={4} />
    </>
  );
}