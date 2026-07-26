import CodeBlock from "../components/CodeBlock";
import LessonNav from "../components/LessonNav";
import Callout from "../components/Callout";
import ExerciseCard from "../components/ExerciseCard";
import { lessonsData } from "../data/lessonsData";
import { lesson10Exercises } from "../data/lesson10Exercises";

export default function Lesson10() {
  const lesson = lessonsData.find((l) => l.id === 10);

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
          <li>ما هي الخريطة (Map)؟</li>
          <li>إنشاء Map والوصول إلى قيمه</li>
          <li>الإضافة والتحديث والحذف</li>
          <li>keys, values, entries</li>
          <li>المرور على Map: for-in وforEach</li>
          <li>مثال شامل</li>
          <li>تمارين تطبيقية (10 Exercises)</li>
        </ol>

        <hr className="divider" />

        <h3 className="section-title">1 ما هي الخريطة (Map)؟</h3>
        <p>
          الـ Map هي مجموعة من الأزواج مفتاح/قيمة (key/value pairs)، حيث كل
          مفتاح (key) فريد ومرتبط بقيمة (value) واحدة. بخلاف List التي تصل
          لعناصرها بموضع رقمي (index)، فإن Map تصل لقيمها باستعمال المفتاح
          مباشرة.
        </p>

        <div className="diagram-box">
          <div className="diagram-item">
            <span>المفتاح</span>
            <div className="diagram-shape">'name'</div>
          </div>
          <div className="diagram-equals">:</div>
          <div className="diagram-item">
            <span>القيمة</span>
            <div className="diagram-shape type-shape">'Amine'</div>
          </div>
        </div>

        <Callout type="note">
          <strong>بتعبير مبسط:</strong> تخيل Map كقاموس حقيقي: تبحث عن كلمة
          (المفتاح) لتجد معناها (القيمة) مباشرة، دون الحاجة لمعرفة موضعها في
          الصفحة.
        </Callout>

        <h3 className="section-title">2 إنشاء Map والوصول إلى قيمه</h3>
        <div className="syntax-box">
          <span className="syntax-part">Map</span>
          <span>&lt;</span>
          <span className="syntax-part value-part">String, dynamic</span>
          <span>&gt;</span>
          <span className="syntax-part">user</span>
          <span>=</span>
          <span className="syntax-part value-part">{`{'name': 'Sara', 'age': 22}`}</span>
        </div>

        <div className="syntax-labels">
          <span>النوع العام</span>
          <span>نوع المفتاح والقيمة</span>
          <span>اسم الخريطة</span>
          <span>الأزواج</span>
        </div>

        <CodeBlock
          code={`void main() {\n  Map<String, dynamic> user = {\n    'name': 'Sara',\n    'age': 22,\n    'isStudent': true,\n  };\n\n  print(user['name']); // Sara\n  print(user['age']);  // 22\n  print(user['email']); // null -- المفتاح غير موجود\n}`}
        />

        <Callout type="warning">
          <strong>ملاحظة مهمة:</strong> الوصول إلى مفتاح غير موجود لا يُسبب خطأ،
          بل يُرجع null مباشرة؛ لهذا من الجيد التحقق باستعمال containsKey قبل
          الاعتماد على القيمة.
        </Callout>

        <h3 className="section-title">3 الإضافة والتحديث والحذف</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>الوصف</th>
              <th>العملية</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                تضيف مفتاحاً جديداً، أو تُحدِّث قيمته إذا كان موجوداً مسبقاً
              </td>
              <td>
                <strong>map[key] = value</strong>
              </td>
            </tr>
            <tr>
              <td>تحذف الزوج المرتبط بمفتاح معيّن</td>
              <td>
                <strong>remove(key)</strong>
              </td>
            </tr>
            <tr>
              <td>تُفرِغ الخريطة بالكامل</td>
              <td>
                <strong>clear()</strong>
              </td>
            </tr>
            <tr>
              <td>تتحقق إذا كان مفتاح معيّن موجوداً</td>
              <td>
                <strong>containsKey(key)</strong>
              </td>
            </tr>
          </tbody>
        </table>

        <CodeBlock
          code={`void main() {\n  Map<String, dynamic> user = {'name': 'Sara', 'age': 22};\n\n  user['email'] = 'sara@mail.com'; // إضافة\n  print(user); // {name: Sara, age: 22, email: sara@mail.com}\n\n  user['age'] = 23; // تحديث\n  print(user['age']); // 23\n\n  user.remove('email'); // حذف\n  print(user); // {name: Sara, age: 23}\n\n  print(user.containsKey('name')); // true\n}`}
        />

        <h3 className="section-title">4 keys, values, entries</h3>
        <p>توفر Map ثلاث خصائص أساسية للوصول إلى محتواها بشكل منفصل:</p>

        <table className="data-table">
          <thead>
            <tr>
              <th>الوصف</th>
              <th>الخاصية</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>تُرجع كل المفاتيح فقط</td>
              <td>
                <strong>keys</strong>
              </td>
            </tr>
            <tr>
              <td>تُرجع كل القيم فقط</td>
              <td>
                <strong>values</strong>
              </td>
            </tr>
            <tr>
              <td>تُرجع كل الأزواج (مفتاح + قيمة) معاً</td>
              <td>
                <strong>entries</strong>
              </td>
            </tr>
          </tbody>
        </table>

        <CodeBlock
          code={`void main() {\n  Map<String, int> stock = {'Sac': 5, 'Montre': 0, 'Casquette': 12};\n\n  print(stock.keys);   // (Sac, Montre, Casquette)\n  print(stock.values); // (5, 0, 12)\n}`}
        />

        <h3 className="section-title">5 المرور على Map: for-in وforEach</h3>
        <p>
          يمكن المرور على كل الأزواج باستعمال entries مع for-in، أو باستعمال
          دالة forEach مباشرة:
        </p>

        <CodeBlock
          code={`void main() {\n  Map<String, int> stock = {'Sac': 5, 'Montre': 0, 'Casquette': 12};\n\n  for (var entry in stock.entries) {\n    print('\${entry.key}: \${entry.value}');\n  }\n\n  // نفس النتيجة باستعمال forEach\n  stock.forEach((key, value) {\n    print('$key: $value');\n  });\n}`}
        />

        <Callout type="note">
          entry.key وentry.value يسمحان بالوصول للمفتاح والقيمة داخل حلقة
          for-in، بينما forEach تُمرِّرهما مباشرة كمعاملين للدالة المجهولة.
        </Callout>

        <h3 className="section-title">6 مثال شامل</h3>
        <CodeBlock
          code={`void main() {\n  Map<String, int> cartQuantities = {\n    'Sac': 2,\n    'Montre': 1,\n  };\n\n  // إضافة منتج جديد\n  cartQuantities['Casquette'] = 3;\n\n  // تحديث كمية منتج موجود\n  cartQuantities['Sac'] = cartQuantities['Sac']! + 1;\n\n  // حذف منتج\n  cartQuantities.remove('Montre');\n\n  // حساب العدد الإجمالي للقطع\n  int totalItems = 0;\n  cartQuantities.forEach((product, qty) {\n    totalItems += qty;\n  });\n\n  print(cartQuantities); // {Sac: 3, Casquette: 3}\n  print('Total items: $totalItems'); // Total items: 6\n}`}
        />

        <Callout type="exercise">
          <strong>تمرين صغير:</strong> أنشئ Map&lt;String, bool&gt; settings
          تحتوي على 3 إعدادات (مثل 'darkMode': false)، ثم استعمل forEach لطباعة
          كل إعداد وحالته.
        </Callout>

        <h3 className="section-title">7 تمارين تطبيقية (10 Exercises)</h3>
        <p>
          هذه سلسلة من 10 تمارين مستوحاة من مواقف حقيقية في تطوير تطبيقات
          Flutter، تعتمد على Map: الإنشاء، الوصول، الإضافة، التحديث، الحذف،
          والمرور على العناصر.
        </p>

        <div className="exercises-grid">
          {lesson10Exercises.map((ex, index) => (
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
          <strong>خلاصة:</strong> Map تخزن بيانات على شكل أزواج مفتاح/قيمة،
          وتسمح بالوصول المباشر للقيمة عبر مفتاحها بدل البحث عن موضع رقمي.
          map[key] = value تضيف أو تُحدِّث، remove تحذف، وkeys/values/entries
          تمنحك طرقاً مختلفة لاستكشاف محتواها. تُستعمل Map كثيراً في Flutter
          لتمثيل بيانات مستخدم، إعدادات، أو استجابات API.
        </Callout>
      </div>

      <LessonNav currentId={10} />
    </>
  );
}
