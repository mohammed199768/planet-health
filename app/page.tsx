import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PackagesSection from '@/components/PackagesSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export const metadata: Metadata = {
  title: 'عالم الصحة — المختبر لعندك',
  description: 'مبادرة أردنية لتقديم خدمات المختبر إلى باب بيتك — بدقة، خصوصية، وثقة.',
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <PackagesSection />
      <TestimonialsSection />
    </main>
  );
}
