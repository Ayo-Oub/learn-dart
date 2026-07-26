import CodeBlock from "../components/CodeBlock";
import LessonNav from "../components/LessonNav";
import Callout from "../components/Callout";
import TypeTree from "../components/TypeTree";
import { lessonsData } from "../data/lessonsData";

export default function Lesson2() {
  const lesson = lessonsData.find((l) => l.id === 2);

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
          <li>ما هو المتغير؟</li>
          <li>كيفية التصريح عن متغير
            <ul>
              <li>1.2 الكلمات المفتاحية: var, final, const</li>
            </ul>
          </li>
          <li>الاستنتاج التلقائي للنوع (Type Inference)</li>
          <li>الأنواع الأساسية للبيانات</li>
          <li>شجرة الأنواع في Dart</li>
          <li>مثال شامل</li>
        </ol>

        <hr className="divider" />

        <h3 className="section-title">1 ما هو المتغير؟</h3>
        <p>المتغير (Variable) هو عبارة عن صندوق في الذاكرة يُخزَّن فيه قيمة، وهذه القيمة يمكن استعمالها وتعديلها لاحقاً. كل متغير يمتلك:</p>
        <ul>
          <li><strong>اسم (name)</strong> -- للرجوع إليه.</li>
          <li><strong>نوع (type)</strong> -- يحدد نوع القيمة التي يمكن تخزينها (رقم، نص، منطقي...).</li>
          <li><strong>قيمة (value)</strong> -- الشيء المخزن في الصندوق.</li>
        </ul>
        
        <div className="diagram-box">
          <div className="diagram-item">
            <span>اسم المتغير</span>
            <div className="diagram-shape">age</div>
          </div>
          <div className="diagram-equals">=</div>
          <div className="diagram-item">
            <span>النوع</span>
            <div className="diagram-shape type-shape">int</div>
          </div>
          <div className="diagram-item">
            <span>القيمة</span>
            <div className="diagram-shape value-shape">20</div>
          </div>
        </div>

        <Callout type="note">
          <strong>بتعبير مبسط:</strong> يمكن تخيل المتغير على أنه كيس بلاستيكي مكتوب عليه اسمه، توضع بداخله قيمة معينة (رقم، كلمة...)، ويحدد النوع ما الذي يمكن أن يوضع بداخله.
          <br/>
          <em>(ملاحظة: المتغير صندوق يحفظ البيانات ويمكن تغيير محتواه لاحقاً بحسب النوع المسموح به).</em>
        </Callout>

        <h3 className="section-title">2 كيفية التصريح عن متغير</h3>
        <p>في Dart، للتصريح عن متغير عندك بنية ثابتة:</p>
        <div className="syntax-box">
          <span className="syntax-part">var</span>
          <span className="syntax-part">name</span>
          <span>=</span>
          <span className="syntax-part value-part">'Amine'</span>
          <span>;</span>
        </div>
        
        <div className="syntax-labels">
          <span>الكلمة المفتاحية</span>
          <span>اسم المتغير</span>
          <span>القيمة الابتدائية</span>
        </div>

        <CodeBlock code={`void main() {\n  var name = 'Amine';  // type inferred automatically\n  print(name);\n}`} />

        <h4 className="subsection-title">1.2 الكلمات المفتاحية: const, final, var</h4>
        <p>توفر لك Dart ثلاث طرق للتصريح عن متغير، ولكل واحدة منطقها الخاص:</p>

        <table className="data-table">
          <thead>
            <tr>
              <th>النوع</th>
              <th>الوصف</th>
              <th>الكلمة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>mutable</td>
              <td>يتم تحديد النوع تلقائياً، والقيمة يمكن تغييرها لاحقاً.</td>
              <td><strong>var</strong></td>
            </tr>
            <tr>
              <td>immutable</td>
              <td>يُصرح به مرة واحدة فقط، والقيمة لا تتغير بعد تحديدها (في الـ runtime).</td>
              <td><strong>final</strong></td>
            </tr>
            <tr>
              <td>immutable + fixed</td>
              <td>مشابه لـ final ولكن يجب أن تكون القيمة معروفة قبل تشغيل البرنامج (compile-time).</td>
              <td><strong>const</strong></td>
            </tr>
          </tbody>
        </table>

        <CodeBlock code={`var city = 'Oujda'; // can be changed\ncity = 'Rabat'; // OK\nfinal year = 2026; // set once\n// year = 2027; -> Error!\n\nconst pi = 3.14159; // fixed from the start`} />

        <Callout type="warning">
          <strong>ملاحظة مهمة:</strong> يجب أن تكون قيمة const ثابتة ومعروفة مباشرة (مثل رقم أو نص)، بخلاف final التي يمكن أن تأتي قيمتها من دالة أو حساب يتم في وقت التشغيل.
        </Callout>

        <h3 className="section-title">3 الاستنتاج التلقائي للنوع (Type Inference)</h3>
        <p>عندما تكتب var دون تحديد النوع، تقرأ Dart القيمة التي أعطيتها لها وتحدد النوع بنفسها:</p>

        <div className="inference-diagram">
          <div className="inf-item">
            <div className="inf-code">var x = 10;</div>
            <div className="inf-arrow">↓</div>
            <div className="inf-type int-type">int</div>
          </div>
          <div className="inf-item">
            <div className="inf-code">var y = 14.3;</div>
            <div className="inf-arrow">↓</div>
            <div className="inf-type double-type">double</div>
          </div>
          <div className="inf-item">
            <div className="inf-code">var z = 'hi';</div>
            <div className="inf-arrow">↓</div>
            <div className="inf-type string-type">String</div>
          </div>
        </div>

        <Callout type="note">
          إذا أردت تحديد النوع يدوياً منذ البداية، يمكنك كتابته مباشرة بدلاً من var: <code>int x = 10;</code> -- هذا يجعل الكود أوضح وأسهل في القراءة.
        </Callout>

        <h3 className="section-title">4 الأنواع الأساسية للبيانات</h3>
        <p>تحتوي Dart على العديد من الأنواع، وهذه هي الأكثر استعمالاً:</p>

        <table className="data-table">
          <thead>
            <tr>
              <th>مثال</th>
              <th>الوصف</th>
              <th>النوع</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td dir="ltr">int age = 25;</td>
              <td>أعداد صحيحة (بلا فاصلة)</td>
              <td><strong>int</strong></td>
            </tr>
            <tr>
              <td dir="ltr">double h = 75.1;</td>
              <td>أعداد عشرية (بفاصلة)</td>
              <td><strong>double</strong></td>
            </tr>
            <tr>
              <td dir="ltr">String n = 'Ali';</td>
              <td>نص أو سلسلة حروف</td>
              <td><strong>String</strong></td>
            </tr>
            <tr>
              <td dir="ltr">bool ok = true;</td>
              <td>قيمة منطقية: صح أو خطأ</td>
              <td><strong>bool</strong></td>
            </tr>
            <tr>
              <td dir="ltr">List nums = [1,2,3];</td>
              <td>قائمة عناصر مرتبة</td>
              <td><strong>List</strong></td>
            </tr>
            <tr>
              <td dir="ltr">{"Map m = {'a':1};"}</td>
              <td>مفاتيح مرتبطة بقيم</td>
              <td><strong>Map</strong></td>
            </tr>
            <tr>
              <td dir="ltr">dynamic x = 5;</td>
              <td>يمكن أن يتغير نوعها لاحقاً</td>
              <td><strong>dynamic</strong></td>
            </tr>
          </tbody>
        </table>

        <CodeBlock code={`int score = 95;\ndouble price = 5.12;\nString city = 'Oujda';\nbool isStudent = true;\nList<int> grades = [18, 15, 20];\nMap<String, int> ages = {'Sara': 21, 'Reda': 23};`} />

        <h3 className="section-title">5 شجرة الأنواع في Dart</h3>
        <p>يوضح المخطط التالي كيف أن جميع الأنواع الأساسية يعود أصلها إلى Object:</p>
        
        <TypeTree />

        <Callout type="note">
          كل شيء في Dart هو object، حتى الأرقام والنصوص. وكما يظهر في الشجرة أعلاه، فإن int و double كلاهما نوع فرعي من num.
        </Callout>

        <h3 className="section-title">6 مثال شامل</h3>
        <CodeBlock code={`void main() {\n  String studentName = 'Yassine';\n  int age = 20;\n  double average = 75.15;\n  bool isPassed = average >= 10;\n  final List<String> subjects = ['Math', 'Dart', 'Physics'];\n\n  print('$studentName -- $age years -- $average');\n  print(isPassed ? 'ناجح' : 'راسب');\n}`} />

        <Callout type="exercise">
          <strong>تمرين صغير:</strong> جرّب تغيير قيمة average إلى رقم أقل من 10، ماذا سيحدث للمتغير isPassed؟
        </Callout>

        <Callout type="summary">
          <strong>خلاصة:</strong> يُستعمل var / final / const للتصريح عن المتغيرات، ويُحدَّد النوع تلقائياً أو يدوياً.
          هذه هي ركائز أي برنامج بلغة Dart.
        </Callout>
      </div>

      <LessonNav currentId={2} />
    </>
  );
}