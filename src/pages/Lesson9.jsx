import CodeBlock from "../components/CodeBlock";
import LessonNav from "../components/LessonNav";
import Callout from "../components/Callout";
import ExerciseCard from "../components/ExerciseCard";
import { lessonsData } from "../data/lessonsData";
import { lesson9Exercises } from "../data/lesson9Exercises";

export default function Lesson9() {
  const lesson = lessonsData.find((l) => l.id === 9);

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
          <li>ما هي المجموعة (Set)؟</li>
          <li>إنشاء Set والتعامل مع عناصره</li>
          <li>
            دوال الإضافة والحذف
            <ul>
              <li>2.1 الإضافة: add, addAll</li>
              <li>2.2 الحذف: remove, clear</li>
            </ul>
          </li>
          <li>Set مقابل List: متى تستعمل كل واحدة؟</li>
          <li>عمليات المجموعات: union, intersection, difference</li>
          <li>مثال شامل</li>
          <li>تمارين تطبيقية (10 Exercises)</li>
        </ol>

        <hr className="divider" />

        <h3 className="section-title">1 ما هي المجموعة (Set)؟</h3>
        <p>
          الـ Set هي مجموعة من العناصر الفريدة (unique)، بمعنى أنها لا يمكن أن
          تحتوي على نفس القيمة مرتين. بخلاف List، فإن Set لا تحافظ بالضرورة على
          ترتيب معيّن للعناصر، وتركّز أساساً على مبدأ "هل هذا العنصر موجود أم
          لا؟".
        </p>

        <div className="diagram-box">
          <div className="diagram-item">
            <span>القيم المُدخلة</span>
            <div className="diagram-shape">1, 2, 2, 3</div>
          </div>
          <div className="diagram-equals">→</div>
          <div className="diagram-item">
            <span>Set</span>
            <div className="diagram-shape type-shape">{`{1, 2, 3}`}</div>
          </div>
        </div>

        <Callout type="note">
          <strong>بتعبير مبسط:</strong> تخيل Set كصندوق لا يقبل تكرار نفس الغرض
          مرتين؛ إذا حاولت وضع نفس العنصر مرة أخرى، الصندوق ببساطة يتجاهل
          العملية دون أي خطأ.
        </Callout>

        <h3 className="section-title">2 إنشاء Set والتعامل مع عناصره</h3>
        <p>
          يمكنك إنشاء Set بوضع العناصر بين قوسين معقوفين {`{}`}، مع التصريح
          الصريح بالنوع Set لتفادي الخلط مع Map:
        </p>

        <div className="syntax-box">
          <span className="syntax-part">Set</span>
          <span>&lt;</span>
          <span className="syntax-part value-part">String</span>
          <span>&gt;</span>
          <span className="syntax-part">tags</span>
          <span>=</span>
          <span className="syntax-part value-part">{`{'new', 'sale'}`}</span>
        </div>

        <div className="syntax-labels">
          <span>النوع العام</span>
          <span>نوع العناصر</span>
          <span>اسم المجموعة</span>
          <span>العناصر</span>
        </div>

        <CodeBlock
          code={`void main() {\n  Set<String> tags = {'new', 'sale', 'popular'};\n\n  print(tags);              // {new, sale, popular}\n  print(tags.length);       // 3\n  print(tags.contains('sale')); // true\n}`}
        />

        <Callout type="warning">
          <strong>ملاحظة مهمة:</strong> الأقواس المعقوفة {`{}`} فارغة تُنشئ Map
          افتراضياً وليس Set؛ لإنشاء Set فارغة يجب التصريح الصريح بالنوع:{" "}
          {`Set<String> tags = {};`}
        </Callout>

        <h3 className="section-title">3 دوال الإضافة والحذف</h3>

        <h4 className="subsection-title">2.1 الإضافة: add, addAll</h4>
        <table className="data-table">
          <thead>
            <tr>
              <th>الوصف</th>
              <th>الدالة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>تضيف عنصراً واحداً؛ إذا كان موجوداً مسبقاً، لا يحدث شيء</td>
              <td>
                <strong>add(item)</strong>
              </td>
            </tr>
            <tr>
              <td>تضيف عدة عناصر دفعة واحدة، مع تجاهل المكرر تلقائياً</td>
              <td>
                <strong>addAll(set)</strong>
              </td>
            </tr>
          </tbody>
        </table>

        <CodeBlock
          code={`void main() {\n  Set<String> selectedCategories = {'Electronics'};\n\n  selectedCategories.add('Fashion');\n  print(selectedCategories); // {Electronics, Fashion}\n\n  selectedCategories.add('Electronics'); // مكرر\n  print(selectedCategories); // {Electronics, Fashion} -- لا تغيير\n\n  selectedCategories.addAll({'Sports', 'Fashion'});\n  print(selectedCategories); // {Electronics, Fashion, Sports}\n}`}
        />

        <h4 className="subsection-title">2.2 الحذف: remove, clear</h4>
        <table className="data-table">
          <thead>
            <tr>
              <th>الوصف</th>
              <th>الدالة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                تحذف عنصراً محدداً بالقيمة (وليس بالموضع، لأن Set لا تملك index)
              </td>
              <td>
                <strong>remove(value)</strong>
              </td>
            </tr>
            <tr>
              <td>تُفرِغ المجموعة بالكامل</td>
              <td>
                <strong>clear()</strong>
              </td>
            </tr>
          </tbody>
        </table>

        <CodeBlock
          code={`void main() {\n  Set<String> selectedCategories = {'Electronics', 'Fashion', 'Sports'};\n\n  selectedCategories.remove('Fashion');\n  print(selectedCategories); // {Electronics, Sports}\n\n  selectedCategories.clear();\n  print(selectedCategories); // {}\n}`}
        />

        <h3 className="section-title">
          4 Set مقابل List: متى تستعمل كل واحدة؟
        </h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Set</th>
              <th>List</th>
              <th>المعيار</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>لا يُسمح بالتكرار</td>
              <td>يُسمح بالتكرار</td>
              <td>
                <strong>القيم المكررة</strong>
              </td>
            </tr>
            <tr>
              <td>لا تملك index للوصول للعناصر</td>
              <td>لكل عنصر index يبدأ من 0</td>
              <td>
                <strong>الترتيب والوصول</strong>
              </td>
            </tr>
            <tr>
              <td>أسرع (contains تقريباً فورية)</td>
              <td>أبطأ نسبياً مع القوائم الكبيرة</td>
              <td>
                <strong>سرعة التحقق من الوجود</strong>
              </td>
            </tr>
          </tbody>
        </table>

        <Callout type="note">
          استعمل Set عندما يهمك فقط "هل هذا العنصر موجود أم لا؟" ولا يهمك ترتيبه
          ولا تكراره، مثل: الفئات المختارة (categories)، الوسوم (tags)، أو
          معرّفات المستخدمين الفريدة.
        </Callout>

        <h3 className="section-title">
          5 عمليات المجموعات: union, intersection, difference
        </h3>
        <p>
          تتيح Dart عمليات رياضية جاهزة للتعامل مع مجموعتين في آن واحد، وهي
          مفيدة جداً في سيناريوهات مثل الفلترة والمقارنة:
        </p>

        <div className="inference-diagram">
          <div className="inf-item">
            <div className="inf-code">a.union(b)</div>
            <div className="inf-arrow">↓</div>
            <div className="inf-type int-type">كل عناصر a وb معاً</div>
          </div>
          <div className="inf-item">
            <div className="inf-code">a.intersection(b)</div>
            <div className="inf-arrow">↓</div>
            <div className="inf-type double-type">العناصر المشتركة فقط</div>
          </div>
          <div className="inf-item">
            <div className="inf-code">a.difference(b)</div>
            <div className="inf-arrow">↓</div>
            <div className="inf-type string-type">عناصر a التي ليست في b</div>
          </div>
        </div>

        <CodeBlock
          code={`void main() {\n  Set<String> userA = {'Sport', 'Tech', 'Music'};\n  Set<String> userB = {'Tech', 'Cooking'};\n\n  print(userA.union(userB));        // {Sport, Tech, Music, Cooking}\n  print(userA.intersection(userB)); // {Tech}\n  print(userA.difference(userB));   // {Sport, Music}\n}`}
        />

        <Callout type="warning">
          <strong>ملاحظة مهمة:</strong> هذه الدوال (union, intersection,
          difference) تُرجع دائماً مجموعة <strong>جديدة</strong>، ولا تُعدِّل
          المجموعتين الأصليتين.
        </Callout>

        <h3 className="section-title">6 مثال شامل</h3>
        <CodeBlock
          code={`void main() {\n  Set<String> wishlist = {'Sac', 'Montre'};\n\n  // إضافة منتجات، مع تجاهل التكرار تلقائياً\n  wishlist.add('Casquette');\n  wishlist.add('Sac'); // مكرر، سيُتجاهل\n  print(wishlist); // {Sac, Montre, Casquette}\n\n  // مقارنة مع مفضلات صديق\n  Set<String> friendWishlist = {'Montre', 'Ceinture'};\n\n  print(wishlist.intersection(friendWishlist)); // {Montre} -- مشترك بينهما\n  print(wishlist.union(friendWishlist));        // كل المنتجات معاً بدون تكرار\n\n  // حذف منتج تم شراؤه\n  wishlist.remove('Montre');\n  print(wishlist); // {Sac, Casquette}\n}`}
        />

        <Callout type="exercise">
          <strong>تمرين صغير:</strong> أنشئ Set&lt;String&gt; readArticles وأضف
          إليها 4 عناوين، حاول إضافة عنوان مكرر ولاحظ أن المجموعة لا تتغير.
        </Callout>

        <h3 className="section-title">7 تمارين تطبيقية (10 Exercises)</h3>
        <p>
          هذه سلسلة من 10 تمارين مستوحاة من مواقف حقيقية في تطوير تطبيقات
          Flutter، تعتمد على المجموعات (Set): الإنشاء، الإضافة، الحذف، ومقارنة
          مجموعتين.
        </p>

        <div className="exercises-grid">
          {lesson9Exercises.map((ex, index) => (
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
          <strong>خلاصة:</strong> Set هي مجموعة عناصر فريدة لا تقبل التكرار،
          مثالية عندما يهمك فقط وجود العنصر من عدمه. دوال
          add/addAll/remove/clear تُدير محتواها، بينما union وintersection
          وdifference تسمح بمقارنة ودمج عدة مجموعات بسهولة. في تطبيقات Flutter،
          تُستعمل Set كثيراً للفئات المختارة، الوسوم، والعناصر الفريدة بشكل عام.
        </Callout>
      </div>

      <LessonNav currentId={9} />
    </>
  );
}
