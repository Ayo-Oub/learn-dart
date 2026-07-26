import CodeBlock from "../components/CodeBlock";
import LessonNav from "../components/LessonNav";
import Callout from "../components/Callout";
import ExerciseCard from "../components/ExerciseCard";
import { lessonsData } from "../data/lessonsData";
import { lesson8Exercises } from "../data/lesson8Exercises";

export default function Lesson8() {
  const lesson = lessonsData.find((l) => l.id === 8);

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
          <li>ما هي القوائم (List)؟</li>
          <li>إنشاء قائمة والوصول إلى عناصرها</li>
          <li>
            دوال الإضافة والحذف
            <ul>
              <li>2.1 الإضافة: add, addAll, insert</li>
              <li>2.2 الحذف: remove, removeAt, removeLast, clear</li>
            </ul>
          </li>
          <li>عامل الـ Spread (...) مع القوائم</li>
          <li>مثال شامل</li>
          <li>تمارين تطبيقية (10 Exercises)</li>
        </ol>

        <hr className="divider" />

        <h3 className="section-title">1 ما هي القوائم (List)؟</h3>
        <p>
          القائمة (List) هي مجموعة مرتبة من العناصر (ordered collection)، حيث
          يحتفظ كل عنصر بموضعه (index) بدءاً من 0. يمكن أن تحتوي القائمة على أي
          نوع من البيانات: أرقام، نصوص، بل حتى قوائم أخرى.
        </p>

        <div className="diagram-box">
          <div className="diagram-item">
            <span>index 0</span>
            <div className="diagram-shape">'Sac'</div>
          </div>
          <div className="diagram-item">
            <span>index 1</span>
            <div className="diagram-shape type-shape">'Montre'</div>
          </div>
          <div className="diagram-item">
            <span>index 2</span>
            <div className="diagram-shape value-shape">'Casquette'</div>
          </div>
        </div>

        <Callout type="note">
          <strong>بتعبير مبسط:</strong> تخيل القائمة كصف من الصناديق المرقّمة
          بجانب بعضها، كل صندوق يحمل رقمه الخاص (index) ويحتوي على قيمة معيّنة،
          ويمكنك الوصول لأي صندوق مباشرة برقمه.
        </Callout>

        <h3 className="section-title">2 إنشاء قائمة والوصول إلى عناصرها</h3>
        <p>
          يمكنك إنشاء قائمة بوضع العناصر بين قوسين مربعين [ ]، والوصول إلى أي
          عنصر باستعمال موضعه (index) بين قوسين مربعين أيضاً:
        </p>

        <div className="syntax-box">
          <span className="syntax-part">List</span>
          <span>&lt;</span>
          <span className="syntax-part value-part">String</span>
          <span>&gt;</span>
          <span className="syntax-part">items</span>
          <span>=</span>
          <span className="syntax-part value-part">['Sac', 'Montre']</span>
        </div>

        <div className="syntax-labels">
          <span>النوع العام</span>
          <span>نوع العناصر</span>
          <span>اسم القائمة</span>
          <span>العناصر</span>
        </div>

        <CodeBlock
          code={`void main() {\n  List<String> items = ['Sac', 'Montre', 'Casquette'];\n\n  print(items[0]);         // Sac\n  print(items.length);     // 3\n  print(items[items.length - 1]); // Casquette (آخر عنصر)\n}`}
        />

        <Callout type="warning">
          <strong>ملاحظة مهمة:</strong> محاولة الوصول إلى index غير موجود (مثل
          items[10] في قائمة من 3 عناصر) تُسبب خطأ RangeError أثناء التشغيل.
        </Callout>

        <h3 className="section-title">3 دوال الإضافة والحذف</h3>

        <h4 className="subsection-title">2.1 الإضافة: add, addAll, insert</h4>
        <table className="data-table">
          <thead>
            <tr>
              <th>الوصف</th>
              <th>الدالة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>تضيف عنصراً واحداً في نهاية القائمة</td>
              <td>
                <strong>add(item)</strong>
              </td>
            </tr>
            <tr>
              <td>تضيف عدة عناصر (من قائمة أخرى) في النهاية</td>
              <td>
                <strong>addAll(list)</strong>
              </td>
            </tr>
            <tr>
              <td>تضيف عنصراً في موضع (index) محدد</td>
              <td>
                <strong>insert(index, item)</strong>
              </td>
            </tr>
          </tbody>
        </table>

        <CodeBlock
          code={`void main() {\n  List<String> cart = ['Sac'];\n\n  cart.add('Montre');\n  print(cart); // [Sac, Montre]\n\n  cart.addAll(['Casquette', 'Ceinture']);\n  print(cart); // [Sac, Montre, Casquette, Ceinture]\n\n  cart.insert(1, 'Chaussures');\n  print(cart); // [Sac, Chaussures, Montre, Casquette, Ceinture]\n}`}
        />

        <h4 className="subsection-title">
          2.2 الحذف: remove, removeAt, removeLast, clear
        </h4>
        <table className="data-table">
          <thead>
            <tr>
              <th>الوصف</th>
              <th>الدالة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>تحذف أول عنصر مطابق للقيمة المُعطاة</td>
              <td>
                <strong>remove(value)</strong>
              </td>
            </tr>
            <tr>
              <td>تحذف العنصر الموجود في موضع (index) محدد</td>
              <td>
                <strong>removeAt(index)</strong>
              </td>
            </tr>
            <tr>
              <td>تحذف آخر عنصر في القائمة</td>
              <td>
                <strong>removeLast()</strong>
              </td>
            </tr>
            <tr>
              <td>تُفرِغ القائمة بالكامل</td>
              <td>
                <strong>clear()</strong>
              </td>
            </tr>
          </tbody>
        </table>

        <CodeBlock
          code={`void main() {\n  List<String> cart = ['Sac', 'Montre', 'Casquette', 'Ceinture'];\n\n  cart.remove('Montre');\n  print(cart); // [Sac, Casquette, Ceinture]\n\n  cart.removeAt(0);\n  print(cart); // [Casquette, Ceinture]\n\n  cart.removeLast();\n  print(cart); // [Casquette]\n\n  cart.clear();\n  print(cart); // []\n}`}
        />

        <Callout type="note">
          كل هذه الدوال تُعدِّل القائمة الأصلية مباشرة (in place)؛ لهذا يجب أن
          تكون القائمة مُصرَّحاً عنها بـ var أو final وليس const حتى تقبل
          التعديل.
        </Callout>

        <h3 className="section-title">4 عامل الـ Spread (...) مع القوائم</h3>
        <p>
          يسمح لك عامل النقاط الثلاث (...) بـ"نشر" (spread) عناصر قائمة داخل
          قائمة أخرى دون الحاجة لحلقة for-in أو addAll يدوياً:
        </p>

        <div className="inference-diagram">
          <div className="inf-item">
            <div className="inf-code">[...listA, ...listB]</div>
            <div className="inf-arrow">↓</div>
            <div className="inf-type int-type">دمج القائمتين</div>
          </div>
        </div>

        <CodeBlock
          code={`void main() {\n  List<String> newArrivals = ['Sac', 'Montre'];\n  List<String> onSale = ['Casquette', 'Ceinture'];\n\n  List<String> allProducts = [...newArrivals, ...onSale, 'Chaussures'];\n  print(allProducts); // [Sac, Montre, Casquette, Ceinture, Chaussures]\n}`}
        />

        <p>
          يمكن أيضاً استعمال النسخة الآمنة <code>...?</code> عندما تكون القائمة
          قابلة لأن تكون null:
        </p>

        <CodeBlock
          code={`void main() {\n  List<String>? extraItems; // null\n\n  List<String> finalList = ['Sac', ...?extraItems];\n  print(finalList); // [Sac] -- تم تجاهل extraItems لأنها null\n}`}
        />

        <Callout type="warning">
          <strong>ملاحظة مهمة:</strong> عامل ... يُنشئ قائمة{" "}
          <strong>جديدة</strong> تحتوي على نسخ من العناصر، وهذا يختلف عن addAll
          التي تُعدِّل القائمة الأصلية مباشرة.
        </Callout>

        <h3 className="section-title">5 مثال شامل</h3>
        <CodeBlock
          code={`void main() {\n  List<String> cart = ['Sac', 'Montre'];\n\n  // إضافة منتجات\n  cart.add('Casquette');\n  cart.insert(0, 'Chaussures');\n  print(cart); // [Chaussures, Sac, Montre, Casquette]\n\n  // حذف منتج\n  cart.remove('Montre');\n  print(cart); // [Chaussures, Sac, Casquette]\n\n  // دمج مع منتجات مقترحة باستعمال spread\n  List<String> suggested = ['Ceinture', 'Portefeuille'];\n  List<String> finalCart = [...cart, ...suggested];\n  print(finalCart); // [Chaussures, Sac, Casquette, Ceinture, Portefeuille]\n\n  print('Total items: \${finalCart.length}');\n}`}
        />

        <Callout type="exercise">
          <strong>تمرين صغير:</strong> ابدأ بقائمة فارغة List&lt;String&gt;
          favorites = [], ثم استعمل add لإضافة 3 منتجات، وremoveAt لحذف الثاني
          منها.
        </Callout>

        <h3 className="section-title">6 تمارين تطبيقية (10 Exercises)</h3>
        <p>
          هذه سلسلة من 10 تمارين مستوحاة من مواقف حقيقية في تطوير تطبيقات
          Flutter، تعتمد على القوائم: الإنشاء، الوصول للعناصر، دوال الإضافة
          والحذف، وعامل الـ spread.
        </p>

        <div className="exercises-grid">
          {lesson8Exercises.map((ex, index) => (
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
          <strong>خلاصة:</strong> القائمة (List) هي مجموعة مرتبة من العناصر يمكن
          الوصول إليها عبر index. دوال add/addAll/insert تُضيف عناصر،
          وremove/removeAt/removeLast/clear تحذفها، بينما عامل ... يسمح بدمج عدة
          قوائم بسهولة لإنشاء قائمة جديدة. هذه الأدوات أساسية في أي تطبيق
          Flutter يتعامل مع بيانات (سلة شراء، قوائم مهام، نتائج بحث...).
        </Callout>
      </div>

      <LessonNav currentId={8} />
    </>
  );
}
