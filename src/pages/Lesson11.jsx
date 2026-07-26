import CodeBlock from "../components/CodeBlock";
import LessonNav from "../components/LessonNav";
import Callout from "../components/Callout";
import ExerciseCard from "../components/ExerciseCard";
import { lessonsData } from "../data/lessonsData";
import { lesson11Exercises } from "../data/lesson11Exercises";

export default function Lesson11() {
  const lesson = lessonsData.find((l) => l.id === 11);

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
          <li>لماذا طرق التكرار المتقدمة؟</li>
          <li>map: تحويل كل عنصر</li>
          <li>where: تصفية العناصر</li>
          <li>reduce: دمج العناصر في قيمة واحدة</li>
          <li>fold: مثل reduce لكن بقيمة بداية</li>
          <li>any و every: التحقق من شرط على المجموعة</li>
          <li>مثال شامل</li>
          <li>تمارين تطبيقية (10 Exercises)</li>
        </ol>

        <hr className="divider" />

        <h3 className="section-title">1 لماذا طرق التكرار المتقدمة؟</h3>
        <p>
          حتى الآن كنا نستعمل حلقة for أو for-in لمعالجة القوائم يدوياً. توفر
          Dart طرقاً جاهزة (methods) تُنفِّذ نفس المهام الشائعة (تحويل، تصفية،
          تجميع...) بسطر واحد وبشكل أوضح، دون الحاجة لكتابة الحلقة والمتغيرات
          الوسيطة يدوياً في كل مرة.
        </p>

        <div className="diagram-box">
          <div className="diagram-item">
            <span>القائمة الأصلية</span>
            <div className="diagram-shape">[1, 2, 3]</div>
          </div>
          <div className="diagram-equals">→</div>
          <div className="diagram-item">
            <span>method</span>
            <div className="diagram-shape type-shape">map / where / ...</div>
          </div>
          <div className="diagram-equals">→</div>
          <div className="diagram-item">
            <span>نتيجة جديدة</span>
            <div className="diagram-shape value-shape">[2, 4, 6]</div>
          </div>
        </div>

        <Callout type="note">
          <strong>بتعبير مبسط:</strong> هذه الطرق تشبه أدوات جاهزة في ورشة عمل:
          بدل أن تبني كل أداة يدوياً بحلقة for في كل مرة، تختار الأداة المناسبة
          (map للتحويل، where للتصفية...) وتستعملها مباشرة.
        </Callout>

        <h3 className="section-title">2 map: تحويل كل عنصر</h3>
        <p>
          تُنشئ map عنصراً جديداً من كل عنصر في القائمة الأصلية عبر تطبيق دالة
          عليه، وتُرجع Iterable جديد (يمكن تحويله إلى List بواسطة toList()):
        </p>

        <CodeBlock
          code={`void main() {\n  List<int> prices = [100, 200, 300];\n\n  List<double> pricesWithTax = prices.map((price) => price * 1.2).toList();\n\n  print(pricesWithTax); // [120.0, 240.0, 360.0]\n}`}
        />

        <Callout type="warning">
          <strong>ملاحظة مهمة:</strong> map لا تُعدِّل القائمة الأصلية؛ تُرجع
          دائماً مجموعة جديدة، ويجب استعمال toList() أو toSet() في النهاية إذا
          أردت نتيجة قابلة للتخزين والاستعمال مباشرة كقائمة.
        </Callout>

        <h3 className="section-title">3 where: تصفية العناصر</h3>
        <p>
          تُرجع where فقط العناصر التي تحقق شرطاً معيّناً، وهي بديل أقصر عن حلقة
          for مع if:
        </p>

        <CodeBlock
          code={`void main() {\n  List<int> scores = [45, 78, 90, 32, 88];\n\n  List<int> passingScores = scores.where((score) => score >= 50).toList();\n\n  print(passingScores); // [78, 90, 88]\n}`}
        />

        <h3 className="section-title">4 reduce: دمج العناصر في قيمة واحدة</h3>
        <p>
          تُدمج reduce كل عناصر القائمة في قيمة واحدة نهائية، عبر تطبيق دالة
          تجمع بين عنصرين في كل مرة. تبدأ العملية من أول عنصرين في القائمة:
        </p>

        <CodeBlock
          code={`void main() {\n  List<int> cartPrices = [50, 30, 20];\n\n  int total = cartPrices.reduce((value, element) => value + element);\n\n  print(total); // 100\n}`}
        />

        <Callout type="warning">
          <strong>ملاحظة مهمة:</strong> reduce تُسبب خطأ إذا كانت القائمة فارغة،
          لأنها لا تملك قيمة بداية؛ إذا كان هناك احتمال أن تكون القائمة فارغة،
          استعمل fold بدلاً منها.
        </Callout>

        <h3 className="section-title">5 fold: مثل reduce لكن بقيمة بداية</h3>
        <p>
          تعمل fold بنفس منطق reduce، لكنها تستقبل قيمة بداية (initial value)
          صريحة، مما يجعلها تعمل حتى مع القوائم الفارغة:
        </p>

        <CodeBlock
          code={`void main() {\n  List<int> cartPrices = [];\n\n  int total = cartPrices.fold(0, (value, element) => value + element);\n\n  print(total); // 0 -- لا يوجد خطأ رغم أن القائمة فارغة\n\n  List<String> names = ['Sara', 'Amine', 'Reda'];\n  String combined = names.fold('', (acc, name) => '$acc$name, ');\n  print(combined); // Sara, Amine, Reda,\n}`}
        />

        <table className="data-table">
          <thead>
            <tr>
              <th>يعمل مع قائمة فارغة؟</th>
              <th>قيمة البداية</th>
              <th>الدالة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>لا (خطأ)</td>
              <td>أول عنصرين في القائمة</td>
              <td>
                <strong>reduce</strong>
              </td>
            </tr>
            <tr>
              <td>نعم</td>
              <td>تُحدَّد يدوياً</td>
              <td>
                <strong>fold</strong>
              </td>
            </tr>
          </tbody>
        </table>

        <h3 className="section-title">
          6 any و every: التحقق من شرط على المجموعة
        </h3>
        <p>تُرجعان قيمة bool واحدة بعد فحص كل عناصر القائمة حسب شرط معيّن:</p>

        <table className="data-table">
          <thead>
            <tr>
              <th>الوصف</th>
              <th>الدالة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>true إذا تحقق الشرط في عنصر واحد على الأقل</td>
              <td>
                <strong>any</strong>
              </td>
            </tr>
            <tr>
              <td>true فقط إذا تحقق الشرط في كل العناصر</td>
              <td>
                <strong>every</strong>
              </td>
            </tr>
          </tbody>
        </table>

        <CodeBlock
          code={`void main() {\n  List<int> stockQuantities = [5, 0, 12, 3];\n\n  bool hasOutOfStock = stockQuantities.any((qty) => qty == 0);\n  bool allAvailable = stockQuantities.every((qty) => qty > 0);\n\n  print(hasOutOfStock); // true\n  print(allAvailable);  // false\n}`}
        />

        <Callout type="note">
          any وevery يتوقفان عن الفحص فور الحصول على نتيجة أكيدة
          (short-circuit)؛ مثلاً any تتوقف فور إيجاد أول عنصر يحقق الشرط، دون
          فحص الباقي.
        </Callout>

        <h3 className="section-title">7 مثال شامل</h3>
        <CodeBlock
          code={`void main() {\n  List<Map<String, dynamic>> products = [\n    {'name': 'Sac', 'price': 200, 'inStock': true},\n    {'name': 'Montre', 'price': 450, 'inStock': false},\n    {'name': 'Casquette', 'price': 90, 'inStock': true},\n  ];\n\n  // where: المنتجات المتوفرة فقط\n  var available = products.where((p) => p['inStock'] == true).toList();\n\n  // map: استخراج الأسماء فقط\n  var names = available.map((p) => p['name']).toList();\n  print(names); // [Sac, Casquette]\n\n  // fold: حساب مجموع أسعار المنتجات المتوفرة\n  int total = available.fold(0, (sum, p) => sum + (p['price'] as int));\n  print(total); // 290\n\n  // any / every\n  bool hasExpensive = products.any((p) => p['price'] > 400);\n  bool allInStock = products.every((p) => p['inStock'] == true);\n  print(hasExpensive); // true\n  print(allInStock);   // false\n}`}
        />

        <Callout type="exercise">
          <strong>تمرين صغير:</strong> لديك List&lt;int&gt; ages = [15, 22, 17,
          30]. استعمل where لاستخراج الأعمار الأكبر أو تساوي 18، ثم every للتحقق
          إذا كانت كل الأعمار في القائمة الأصلية أكبر من 10.
        </Callout>

        <h3 className="section-title">8 تمارين تطبيقية (10 Exercises)</h3>
        <p>
          هذه سلسلة من 10 تمارين مستوحاة من مواقف حقيقية في تطوير تطبيقات
          Flutter، تعتمد على طرق التكرار المتقدمة: map، where، reduce، fold،
          any، وevery.
        </p>

        <div className="exercises-grid">
          {lesson11Exercises.map((ex, index) => (
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
          <strong>خلاصة:</strong> map تُحوِّل كل عنصر، where تُصفِّي العناصر حسب
          شرط، reduce وfold تُدمِجان القائمة في قيمة واحدة (fold أكثر أماناً مع
          القوائم الفارغة)، وany/every تتحققان من شرط عام على كل المجموعة. هذه
          الطرق تجعل الكود أقصر وأوضح مقارنة بكتابة حلقات for يدوياً في كل مرة.
        </Callout>
      </div>

      <LessonNav currentId={11} />
    </>
  );
}
