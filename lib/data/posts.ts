export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
  author?: string;
  readTime?: string;
}

export const posts: Post[] = [
  {
    id: 'diabetes-early-detection',
    slug: 'diabetes-early-detection',
    title: 'أهمية الكشف المبكر عن السكري',
    excerpt: 'الكشف المبكر عن مرض السكري يساعد في تجنب المضاعفات الخطيرة.',
    readTime: '5 دقائق',
    content: `مرض السكري يعتبر من أكثر الأمراض المزمنة انتشارًا في العالم، ويصيب ملايين الأشخاص سنويًا. الكشف المبكر عن هذا المرض يمكن أن ينقذ حياة المريض ويحسّن نوعية حياته بشكل كبير.

مرض السكري يحدث عندما يفقد الجسم قدرته على تنظيم مستوى الجلوكوز في الدم، مما يؤدي إلى ارتفاع مستويات السكر في الدم.

فوائد الكشف المبكر:
- السيطرة الفعالة على مستويات السكر في الدم
- تجنب مضاعفات القلب والأوعية الدموية
- الحفاظ على صحة الكلى ومنع الفشل الكلوي
- حماية العيون من اعتلال الشبكية
- الوقاية من التهاب الأعصاب السكري

ننصح بشدة بإجراء فحص دوري للسكري، خاصة إذا كنت من الفئات الأكثر عرضة: أصحاب التاريخ العائلي، من يعانون من السمنة، أو من تجاوزوا سن الأربعين.`,
    category: 'صحة عامة',
    date: '15 يناير 2024',
    image: 'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'د. أحمد الخطيب',
  },
  {
    id: 'vitamin-d-importance',
    slug: 'vitamin-d-importance',
    title: 'فيتامين د: أهميته وكيفية الحصول عليه',
    excerpt: 'فيتامين د ضروري لصحة العظام والمناعة، تعرف على مصادره وأهميته.',
    readTime: '4 دقائق',
    content: `
      فيتامين د من الفيتامينات الأساسية التي يحتاجها الجسم.

      فوائد فيتامين د:
      - تقوية العظام والأسنان
      - تعزيز المناعة
      - تحسين المزاج
      - الوقاية من الأمراض المزمنة

      مصادره: الشمس، الأسماك الدهنية، البيض، والحليب المدعم.
    `,
    category: 'تغذية',
    date: '10 يناير 2024',
    image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'أخصائية التغذية سارة محمود',
  },
  {
    id: 'thyroid-health',
    slug: 'thyroid-health',
    title: 'علامات تحذيرية لمشاكل الغدة الدرقية',
    excerpt: 'تعرف على الأعراض التي قد تشير إلى خلل في وظائف الغدة الدرقية.',
    readTime: '6 دقائق',
    content: `
      الغدة الدرقية تلعب دورًا حيويًا في تنظيم عمليات الجسم.

      علامات خلل الغدة الدرقية:
      - تغيرات في الوزن غير المبررة
      - الإرهاق المستمر
      - تغيرات في نبضات القلب
      - مشاكل في النوم
      - تساقط الشعر

      إذا لاحظت هذه الأعراض، ننصح بإجراء فحص الغدة الدرقية.
    `,
    category: 'صحة عامة',
    date: '5 يناير 2024',
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'د. ليلى عمر',
  },
  {
    id: 'blood-test-preparation',
    slug: 'blood-test-preparation',
    title: 'كيف تستعد لتحليل الدم؟',
    excerpt: 'نصائح مهمة للحصول على نتائج دقيقة من تحليل الدم.',
    readTime: '3 دقائق',
    content: `
      التحضير الصحيح لتحليل الدم يضمن دقة النتائج.

      نصائح قبل التحليل:
      - الصيام 8-12 ساعة إذا كان مطلوبًا
      - شرب الماء فقط
      - تجنب التمارين الشاقة
      - إبلاغ الطبيب بالأدوية التي تتناولها
      - الحصول على نوم كافٍ

      فريقنا سيرشدك لجميع التفاصيل عند الحجز.
    `,
    category: 'نصائح',
    date: '28 ديسمبر 2023',
    image: 'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'iron-deficiency',
    slug: 'iron-deficiency',
    title: 'نقص الحديد: الأعراض والعلاج',
    excerpt: 'نقص الحديد من أكثر المشاكل الصحية شيوعًا، خاصة عند النساء.',
    readTime: '5 دقائق',
    content: `
      نقص الحديد يؤدي إلى فقر الدم وأعراض مزعجة.

      أعراض نقص الحديد:
      - الإرهاق والضعف
      - شحوب البشرة
      - ضيق التنفس
      - الدوخة
      - برودة الأطراف

      العلاج يشمل: مكملات الحديد، تناول الأطعمة الغنية بالحديد مثل اللحوم والخضراوات الورقية.
    `,
    category: 'صحة عامة',
    date: '20 ديسمبر 2023',
    image: 'https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'د. أحمد الخطيب',
  },
  {
    id: 'home-lab-benefits',
    slug: 'home-lab-benefits',
    title: 'لماذا الفحص المنزلي هو الخيار الأفضل؟',
    excerpt: 'اكتشف مزايا إجراء الفحوصات الطبية في منزلك براحة وخصوصية.',
    readTime: '4 دقائق',
    content: `
      الفحص المنزلي يوفر راحة وسرعة لا مثيل لها.

      مزايا الفحص المنزلي:
      - الراحة والخصوصية التامة
      - توفير الوقت والجهد
      - مناسب لكبار السن وذوي الاحتياجات الخاصة
      - نفس دقة المختبر التقليدي
      - مواعيد مرنة

      مع عالم الصحة، الفحص صار أسهل من أي وقت مضى!
    `,
    category: 'خدماتنا',
    date: '15 ديسمبر 2023',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export function getPostById(id: string): Post | undefined {
  return posts.find((post) => post.id === id);
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter((post) => post.category === category);
}

export function searchPosts(query: string): Post[] {
  const q = query.trim().toLowerCase();
  if (!q) return posts;

  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.content.toLowerCase().includes(q) ||
      post.category.toLowerCase().includes(q)
  );
}

export function getCategories(): string[] {
  const categories = posts.map((post) => post.category);
  return Array.from(new Set(categories));
}
