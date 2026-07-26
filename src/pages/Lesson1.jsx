import CodeBlock from "../components/CodeBlock";
import LessonNav from "../components/LessonNav";
import Callout from "../components/Callout";
import { lessonsData } from "../data/lessonsData";

const comprehensiveCode = [
  "// أول برنامج Dart كامل",
  "void main() {",
  "  String language = 'Dart';",
  "  int version = 3;",
  "",
  "  print('مرحباً بك في لغة $language!');",
  "  print('هذا الدرس يستعمل الإصدار $version من السلسلة.');",
  "}",
].join("\n");

export default function Lesson1() {
  const lesson = lessonsData.find((l) => l.id === 1);

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
          <li>ما هي لغة Dart؟</li>
          <li>أين تُستخدم Dart؟</li>
          <li>لماذا نختار Dart؟</li>
          <li>تجربة Dart لأول مرة</li>
          <li>أول برنامج: Hello World</li>
          <li>بنية برنامج Dart</li>
          <li>التعليقات في الكود</li>
          <li>مثال شامل</li>
        </ol>

        <hr className="divider" />

        <h3 className="section-title">1 ما هي لغة Dart؟</h3>
        <p>Dart هي لغة برمجة طورتها شركة Google، مصممة لبناء تطبيقات سريعة وحديثة على مختلف المنصات. تتميز بأنها لغة مقروءة وسهلة التعلم، وفي نفس الوقت قوية بما يكفي لبناء تطبيقات احترافية.</p>
        <ul>
          <li><strong>لغة موجهة للكائنات (Object-Oriented)</strong> -- كل شيء تقريباً في Dart هو كائن (object).</li>
          <li><strong>لغة ذات نوع ثابت (Statically Typed)</strong> -- يتم التحقق من الأنواع أثناء الترجمة، مما يقلل الأخطاء.</li>
          <li><strong>لغة مُترجَمة (Compiled)</strong> -- يمكن ترجمتها مباشرة إلى كود آلة سريع التنفيذ.</li>
        </ul>

        <Callout type="note">
          <strong>بتعبير مبسط:</strong> Dart هي اللغة التي تقف خلف إطار العمل Flutter، الذي يُستعمل لبناء تطبيقات الهواتف والويب وسطح المكتب بكود واحد فقط.
        </Callout>

        <h3 className="section-title">2 أين تُستخدم Dart؟</h3>
        <p>لا تقتصر Dart على مجال واحد، بل يمكن استعمالها لبناء أنواع مختلفة من التطبيقات:</p>

        <div className="diagram-box">
          <div className="diagram-item">
            <span>الكود المصدري</span>
            <div className="diagram-shape">Dart Code</div>
          </div>
          <div className="diagram-equals">→</div>
          <div className="diagram-item">
            <span>الترجمة</span>
            <div className="diagram-shape type-shape">Compiler</div>
          </div>
          <div className="diagram-equals">→</div>
          <div className="diagram-item">
            <span>النتيجة</span>
            <div className="diagram-shape value-shape">App / Web / Server</div>
          </div>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>المجال</th>
              <th>الوصف</th>
              <th>مثال</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>تطبيقات الهواتف</td>
              <td>عبر إطار العمل Flutter لبناء تطبيقات iOS وAndroid بكود واحد</td>
              <td><strong>Mobile</strong></td>
            </tr>
            <tr>
              <td>تطبيقات الويب</td>
              <td>ترجمة الكود إلى JavaScript لتشغيله في المتصفح</td>
              <td><strong>Web</strong></td>
            </tr>
            <tr>
              <td>تطبيقات سطح المكتب</td>
              <td>بناء تطبيقات لـ Windows وmacOS وLinux</td>
              <td><strong>Desktop</strong></td>
            </tr>
            <tr>
              <td>خوادم وواجهات برمجية</td>
              <td>بناء خوادم ومعالجة الطلبات على الجانب الخلفي (Backend)</td>
              <td><strong>Server</strong></td>
            </tr>
          </tbody>
        </table>

        <h3 className="section-title">3 لماذا نختار Dart؟</h3>
        <p>تتوفر Dart على مجموعة من الخصائص التي تجعلها خياراً جذاباً للمطورين:</p>

        <table className="data-table">
          <thead>
            <tr>
              <th>الميزة</th>
              <th>الوصف</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Hot Reload</strong></td>
              <td>رؤية التعديلات في الكود مباشرة دون إعادة تشغيل التطبيق بالكامل</td>
            </tr>
            <tr>
              <td><strong>سهولة التعلم</strong></td>
              <td>صياغة قريبة من لغات معروفة مثل Java وJavaScript وC#</td>
            </tr>
            <tr>
              <td><strong>الأمان في الأنواع</strong></td>
              <td>اكتشاف الأخطاء المتعلقة بالأنواع قبل تشغيل البرنامج</td>
            </tr>
            <tr>
              <td><strong>الأداء العالي</strong></td>
              <td>ترجمة الكود إلى كود آلة (Native Code) لتنفيذ سريع</td>
            </tr>
            <tr>
              <td><strong>دعم Google</strong></td>
              <td>تطوير ودعم مستمرّان من طرف Google ومجتمع كبير من المطورين</td>
            </tr>
          </tbody>
        </table>

        <h3 className="section-title">4 تجربة Dart لأول مرة</h3>
        <p>لست بحاجة لتثبيت أي برنامج لتجربة Dart؛ يمكنك كتابة الكود وتشغيله مباشرة عبر المتصفح من خلال أداة DartPad الرسمية.</p>

        <Callout type="note">
          يمكنك زيارة <code>dartpad.dev</code> وكتابة أول كود لك مباشرة دون أي إعداد. أما إذا أردت تثبيت Dart SDK على جهازك، يمكنك التحقق من نجاح التثبيت بالأمر التالي:
        </Callout>

        <CodeBlock code={`dart --version`} />

        <h3 className="section-title">5 أول برنامج: Hello World</h3>
        <p>كل برنامج Dart يبدأ من دالة تُسمى <code>main()</code>، وهي نقطة الانطلاق التي يبدأ منها تنفيذ الكود:</p>

        <CodeBlock code={`void main() {\n  print('Hello, Dart!');\n}`} />

        <Callout type="note">
          الدالة <code>print()</code> هي دالة جاهزة في Dart تُستعمل لعرض النص أو القيمة في الطرفية (Console).
        </Callout>

        <h3 className="section-title">6 بنية برنامج Dart</h3>
        <p>لكل برنامج Dart بنية أساسية ثابتة:</p>

        <div className="syntax-box">
          <span className="syntax-part">void</span>
          <span className="syntax-part">main()</span>
          <span>{"{"}</span>
          <span className="syntax-part value-part">// التعليمات</span>
          <span>{"}"}</span>
        </div>

        <div className="syntax-labels">
          <span>نوع الإرجاع</span>
          <span>نقطة الانطلاق</span>
          <span>جسم الدالة</span>
        </div>

        <ul>
          <li>كل تعليمة (statement) في Dart تنتهي بفاصلة منقوطة <code>;</code>.</li>
          <li>الأقواس المعقوفة <code>{"{ }"}</code> تحدد بداية ونهاية جسم الدالة أو الكتلة البرمجية.</li>
          <li>تنفيذ البرنامج يبدأ دائماً من الدالة <code>main()</code>.</li>
        </ul>

        <h3 className="section-title">7 التعليقات في الكود</h3>
        <p>التعليقات هي أسطر لا يقوم Dart بتنفيذها، وتُستعمل لشرح الكود أو توضيحه:</p>

        <CodeBlock code={`// تعليق على سطر واحد\n\n/*\n  تعليق\n  على عدة أسطر\n*/\n\n/// تعليق توثيقي (documentation comment)\nvoid main() {\n  print('Dart is fun!'); // تعليق بجانب السطر\n}`} />

        <Callout type="warning">
          <strong>ملاحظة:</strong> التعليق التوثيقي <code>///</code> يُستعمل غالباً فوق الدوال والأصناف لشرح وظيفتها، ويمكن لأدوات التوثيق التلقائي قراءته.
        </Callout>

        <h3 className="section-title">8 مثال شامل</h3>
        <CodeBlock code={comprehensiveCode} />

        <Callout type="exercise">
          <strong>تمرين صغير:</strong> جرّب تعديل قيمة المتغير <code>language</code> ثم شغّل الكود عبر DartPad، ولاحظ كيف تتغير النتيجة المطبوعة.
        </Callout>

        <Callout type="summary">
          <strong>خلاصة:</strong> Dart لغة برمجة حديثة من Google، تُستعمل لبناء تطبيقات الهواتف والويب وسطح المكتب والخوادم. كل برنامج يبدأ من الدالة <code>main()</code>، وتنتهي كل تعليمة بفاصلة منقوطة. هذه هي البداية نحو تعلّم المتغيرات والأنواع في الدرس القادم.
        </Callout>
      </div>

      <LessonNav currentId={1} />
    </>
  );
}