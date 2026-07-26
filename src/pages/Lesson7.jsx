import CodeBlock from "../components/CodeBlock";
import LessonNav from "../components/LessonNav";
import Callout from "../components/Callout";
import ExerciseCard from "../components/ExerciseCard";
import { lessonsData } from "../data/lessonsData";
import { lesson7Exercises } from "../data/lesson7Exercises";

export default function Lesson7() {
  const lesson = lessonsData.find((l) => l.id === 7);

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
          <li>الدوال المجهولة (Anonymous Functions) وLambdas</li>
          <li>تمرير الدوال كمعاملات (Callbacks)</li>
          <li>Lexical Closures: فهم نطاق المتغيرات داخل الدوال</li>
          <li>مثال شامل</li>
          <li>تمارين تطبيقية (10 Exercises)</li>
        </ol>

        <hr className="divider" />

        <h3 className="section-title">1 الدوال المجهولة (Anonymous Functions) وLambdas</h3>
        <p>الدالة المجهولة (Anonymous Function) هي دالة بدون اسم، تُستعمل غالباً مرة واحدة مباشرة في المكان الذي تحتاجها فيه، دون الحاجة لتعريفها بشكل منفصل باسم خاص. تُسمى أحياناً Lambda أو closure حسب السياق.</p>

        <div className="syntax-box">
          <span>(</span>
          <span className="syntax-part value-part">int x</span>
          <span>{`) {`}</span>
          <span className="syntax-part">return x * 2;</span>
          <span>{`}`}</span>
        </div>

        <div className="syntax-labels">
          <span>المعاملات</span>
          <span>جسم الدالة</span>
        </div>

        <CodeBlock code={`void main() {\n  var double = (int x) {\n    return x * 2;\n  };\n\n  print(double(5)); // 10\n}`} />

        <p>يمكن أيضاً كتابتها بشكل أقصر باستعمال arrow syntax، تماماً كما رأينا مع الدوال العادية:</p>

        <CodeBlock code={`void main() {\n  var double = (int x) => x * 2;\n  print(double(5)); // 10\n}`} />

        <Callout type="note">
          <strong>بتعبير مبسط:</strong> الدالة المجهولة هي دالة "جاهزة للاستعمال الفوري"، بدون اسم يميّزها، تماماً كما تكتب رقماً مباشرة (5) بدل تعريف متغير لتخزينه أولاً.
        </Callout>

        <h3 className="section-title">2 تمرير الدوال كمعاملات (Callbacks)</h3>
        <p>بما أن الدوال في Dart هي first-class objects، يمكن تمريرها كمعاملات لدوال أخرى، تماماً مثل أي قيمة عادية (رقم، نص...). الدالة الممرَّرة بهذا الشكل تُسمى callback، وتُستدعى داخل الدالة الأخرى في اللحظة المناسبة:</p>

        <CodeBlock code={`void processOrder(String item, void Function(String) onDone) {\n  print('Processing $item...');\n  onDone(item); // نداء الـ callback بعد الانتهاء\n}\n\nvoid main() {\n  processOrder('Laptop', (item) {\n    print('$item is ready!');\n  });\n}\n// Processing Laptop...\n// Laptop is ready!`} />

        <p>هذا هو بالضبط المبدأ الذي تعتمد عليه Flutter في مكونات مثل الأزرار، حيث تُمرَّر دالة كـ callback تُستدعى عند الضغط:</p>

        <CodeBlock code={`void onButtonPressed(void Function() callback) {\n  print('Button tapped');\n  callback();\n}\n\nvoid main() {\n  onButtonPressed(() {\n    print('Navigating to next screen...');\n  });\n}`} />

        <Callout type="warning">
          <strong>ملاحظة مهمة:</strong> نوع المعامل void Function(String) يعني "دالة لا تُرجع شيئاً وتستقبل معامل String واحد"؛ يجب أن يتطابق شكل الدالة الممرَّرة مع هذا التوقيع (signature).
        </Callout>

        <h3 className="section-title">3 Lexical Closures: فهم نطاق المتغيرات داخل الدوال</h3>
        <p>الـ Closure هي دالة "تتذكر" المتغيرات الموجودة في النطاق (scope) الذي أُنشئت فيه، حتى بعد خروج التنفيذ من ذلك النطاق. بعبارة أخرى، الدالة "تحتفظ" بمرجع للمتغيرات المحيطة بها وقت إنشائها:</p>

        <div className="diagram-box">
          <div className="diagram-item">
            <span>النطاق الخارجي</span>
            <div className="diagram-shape">count = 0</div>
          </div>
          <div className="diagram-equals">⊂</div>
          <div className="diagram-item">
            <span>الدالة الداخلية</span>
            <div className="diagram-shape type-shape">() =&gt; count++</div>
          </div>
        </div>

        <CodeBlock code={`Function makeCounter() {\n  int count = 0;\n\n  return () {\n    count++;\n    return count;\n  };\n}\n\nvoid main() {\n  var counter = makeCounter();\n\n  print(counter()); // 1\n  print(counter()); // 2\n  print(counter()); // 3 -- count بقات محفوظة بين كل نداء\n}`} />

        <p>كل نداء لـ makeCounter() ينشئ نطاقاً جديداً ومستقلاً للمتغير count، لأن كل دالة مُرجَعة تحتفظ بنسخة خاصة بها من المتغيرات المحيطة بها:</p>

        <CodeBlock code={`void main() {\n  var counterA = makeCounter();\n  var counterB = makeCounter();\n\n  print(counterA()); // 1\n  print(counterA()); // 2\n  print(counterB()); // 1 -- مستقلة تماماً عن counterA\n}`} />

        <Callout type="note">
          هذا المبدأ يُستعمل كثيراً في Flutter، مثلاً عندما تُنشئ دالة onPressed داخل ListView.builder وتحتاج أن "تتذكر" index العنصر الذي أُنشئت من أجله.
        </Callout>

        <h3 className="section-title">4 مثال شامل</h3>
        <CodeBlock code={`// دالة تستقبل callback لتصفية قائمة\nList<int> filterList(List<int> numbers, bool Function(int) test) {\n  List<int> result = [];\n  for (var n in numbers) {\n    if (test(n)) {\n      result.add(n);\n    }\n  }\n  return result;\n}\n\n// closure تحتفظ بحد أدنى محدد مسبقاً\nbool Function(int) makeMinFilter(int min) {\n  return (n) => n >= min;\n}\n\nvoid main() {\n  List<int> scores = [45, 78, 90, 32, 88, 60];\n\n  // تمرير دالة مجهولة مباشرة كـ callback\n  var passing = filterList(scores, (n) => n >= 50);\n  print(passing); // [78, 90, 88, 60]\n\n  // استعمال closure جاهزة\n  var isHighScore = makeMinFilter(80);\n  var highScores = filterList(scores, isHighScore);\n  print(highScores); // [90, 88]\n}`} />

        <Callout type="exercise">
          <strong>تمرين صغير:</strong> اكتب دالة مجهولة تستقبل رقماً وتُرجع true إذا كان زوجياً، ثم مررها كـ callback لدالة filterList من المثال أعلاه.
        </Callout>

        <h3 className="section-title">5 تمارين تطبيقية (10 Exercises)</h3>
        <p>هذه سلسلة من 10 تمارين مستوحاة من مواقف حقيقية في تطوير تطبيقات Flutter، تعتمد على الدوال المجهولة، تمرير الدوال كمعاملات (callbacks)، وLexical Closures.</p>

        <div className="exercises-grid">
          {lesson7Exercises.map((ex, index) => (
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
          <strong>خلاصة:</strong> الدوال المجهولة تسمح بكتابة منطق سريع بدون تسمية، والـ callbacks تجعل الدوال قابلة للتخصيص عبر تمرير سلوك مختلف لها في كل مرة، بينما الـ closures تمنح الدالة القدرة على "تذكر" المتغيرات المحيطة بها حتى بعد خروج التنفيذ من نطاقها الأصلي. هذه المفاهيم الثلاثة هي أساس الكثير مما ستراه لاحقاً في Flutter (onPressed, onTap, builders...).
        </Callout>
      </div>

      <LessonNav currentId={7} />
    </>
  );
}
