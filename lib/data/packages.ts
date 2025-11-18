export interface Package {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  video?: string;
  price?: string;
  icon?: string;
}

export const packages: Package[] = [
  {
    id: 'osteoporosis',
    title: 'باقة هشاشة العظام',
    description: 'فحص شامل لصحة العظام والكشف عن هشاشة العظام',
    icon: '🦴',
    features: [
      'CBC',
      'PTH',
      'ESR',
      'Phosphorus',
      'Vitamin D',
      'CRP',
      'RF',
      'ASOT',
      'Uric acid',
      'Calcium',
    ],
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'heart-pressure',
    title: 'باقة مرضى القلب والضغط',
    description: 'متابعة شاملة لمرضى القلب وضغط الدم',
    icon: '❤️',
    features: [
      'CBC',
      'وظائف الكلى (Urea, Creatinine)',
      'املاح الدم(Na, K, Cl)',
      'Uric acid',
      'Lipid profile',
      'إنزيمات القلب (CK-MB, Troponin)',
    ],
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'diabetes-followup',
    title: 'باقة متابعة السكري',
    description: 'مراقبة شاملة لمستويات السكر والصحة العامة',
    icon: '🍬',
    features: [
      'CBC',
      'FBS',
      'Lipid profile',
      'HbA1C',
      'وظائف الكلى (Urea, Creatinine)',
      'وظائف الكبد (AST, ALT)',
    ],
    image: 'https://plus.unsplash.com/premium_photo-1680221453924-fcc37377f18e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'fitness-diet',
    title: 'باقة الرشاقة والدايت',
    description: 'فحص متكامل لدعم برنامج الدايت والرشاقة',
    icon: '⚖️',
    features: [
      'مقاومة الإنسولين (HOMA Score)',
      'CBC',
      'FBS',
      'Vitamin D',
      'Lipid profile',
      'TSH',
      'Ferritin',
      'Zinc',
    ],
    image: 'https://images.pexels.com/photos/3912516/pexels-photo-3912516.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'pcos-menstrual',
    title: 'باقة تكيس المبايض واضطرابات الدورة',
    description: 'فحص شامل للهرمونات الأنثوية واضطرابات الدورة',
    icon: '🌸',
    features: [
      'FBS',
      'Insulin',
      'TSH',
      'FSH',
      'LH',
      'DHEAS',
      'Testosterone',
      'Prolactin',
      'E2',
    ],
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'pregnancy-followup',
    title: 'باقة متابعة الحمل',
    description: 'متابعة صحية للحامل وجنينها',
    icon: '🤰',
    features: [
      'CBC',
      'FBS',
      'TSH',
      'Ferritin',
      'Blood group',
      'Folate',
    ],
    image: 'https://images.unsplash.com/photo-1538678867871-8a43e7487746?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'full-checkup',
    title: 'باقة فحص شامل (Checkup)',
    description: 'فحص شامل ومتكامل لجميع وظائف الجسم',
    icon: '🧍‍♂️',
    features: [
      'CBC',
      'FBS',
      'Lipid profile (LDL, HDL, Triglyceride, Cholesterol)',
      'TSH',
      'Ferritin',
      'Calcium',
      'Vitamin D',
      'Vitamin B12',
      'وظائف الكلى (Urea, Creatinine)',
      'وظائف الكبد (ALT, AST)',
      'CRP',
      'RF',
    ],
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'mens-health',
    title: 'باقة صحة الرجال',
    description: 'فحص شامل لصحة الرجل والفيتامينات الأساسية',
    icon: '💪',
    features: [
      'CBC',
      'Ferritin',
      'Vitamin B12',
      'Iron',
      'TSH',
      'Zinc',
      'Vitamin D',
    ],
    image: 'https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'vitamins-minerals',
    title: 'باقة الفيتامينات والمعادن',
    description: 'فحص شامل للفيتامينات والمعادن الأساسية',
    icon: '🌿',
    features: [
      'Iron',
      'Magnesium',
      'Zinc',
      'Ferritin',
      'Vitamin D',
      'Vitamin B12',
    ],
    image: 'https://images.pexels.com/photos/3873146/pexels-photo-3873146.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export function getPackageById(id: string): Package | undefined {
  return packages.find((pkg) => pkg.id === id);
}

export function searchPackages(query: string): Package[] {
  const q = query.trim().toLowerCase();
  if (!q) return packages;

  return packages.filter(
    (pkg) =>
      pkg.title.toLowerCase().includes(q) ||
      pkg.description.toLowerCase().includes(q) ||
      pkg.features.some((f) => f.toLowerCase().includes(q))
  );
}
