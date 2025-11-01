import Image from 'next/image';
import { testimonials } from '@/lib/data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="section py-20">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-[var(--primary-dark)]">
            آراء عملائنا
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5.5">
          {testimonials.map((t) => (
            <div key={t.id} className="card">
              <div className="body p-5.5 text-center">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[var(--muted)] shadow-md mx-auto"
                />
                <h4 className="mt-3 mb-1.5 text-[var(--primary-dark)] font-extrabold">
                  {t.name}
                </h4>
                <div className="flex items-center justify-center gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-[#475d52] text-[15px] leading-snug">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
