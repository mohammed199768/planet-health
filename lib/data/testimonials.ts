export interface Testimonial {
  id: string;
  name: string;
  text: string;
  image: string;
  rating?: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'محمد تيسير',
    text: 'خدمة ممتازة وسريعة. الفريق محترف جدًا والنتائج وصلت في نفس اليوم.',
    image: '/assets/images/testimonials/person-1.jpeg',
    rating: 5,
  },
  {
    id: '2',
    name: 'احمد خالد',
    text: 'راحة كبيرة إني أقدر أعمل التحاليل من البيت. ما عاد في داعي للزحمة والانتظار.',
    image: '/assets/images/testimonials/person-2.jpeg',
    rating: 5,
  },
  {
    id: '3',
    name: 'عمر ظاظا',
    text: 'الأسعار معقولة والخدمة ممتازة. أنصح فيهم بشدة.',
    image: '/assets/images/testimonials/person-3.jpeg',
    rating: 5,
  },
];

export function getTestimonialById(id: string): Testimonial | undefined {
  return testimonials.find((t) => t.id === id);
}
