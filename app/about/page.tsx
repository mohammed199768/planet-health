'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

function animateCounter(element: HTMLElement, target: number, duration: number) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = Math.round(target).toString();
      clearInterval(timer);
    } else {
      element.textContent = Math.round(current).toString();
    }
  }, 16);
}

export default function AboutPage() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      const stats = { visitors: 5420, clients: 1230, tests: 8750 };

      Object.entries(stats).forEach(([key, value]) => {
        const el = document.querySelector(`[data-counter="${key}"]`) as HTMLElement;
        if (el) animateCounter(el, value, 1200);
      });

      setHasAnimated(true);
    }
  }, [hasAnimated]);

  const features = [
    {
      icon: '🎯',
      title: 'دقة عالية',
      desc: 'نعمل مع أفضل المختبرات المعتمدة لضمان نتائج دقيقة وموثوقة'
    },
    {
      icon: '🔒',
      title: 'خصوصية تامة',
      desc: 'نحترم خصوصيتك ونحافظ على سرية معلوماتك الطبية'
    },
    {
      icon: '🏠',
      title: 'خدمة منزلية',
      desc: 'فريق مختص يصل إلى منزلك في الوقت المناسب لك'
    },
    {
      icon: '⚡',
      title: 'نتائج سريعة',
      desc: 'نتائج دقيقة في وقت قياسي عبر واتساب أو البريد'
    }
  ];

  const values = [
    'الدقّة قبل السرعة',
    'احترام خصوصية المريض',
    'تبسيط المعلومة الطبية',
    'خدمة ما بعد الفحص',
    'التطوير المستمر',
    'الشفافية في التعامل'
  ];

  return (
    <>
      <header
        className="about-hero relative text-white overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a4d2e 0%, #2d6a4f 50%, #40916c 100%)',
          isolation: 'isolate',
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(255,255,255,0.15) 2px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        <div
          className="absolute top-10 right-10 w-72 h-72 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #73A043, transparent)',
            animation: 'float 8s ease-in-out infinite',
          }}
        />

        <div
          className="absolute bottom-10 left-10 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #52b788, transparent)',
            animation: 'float 10s ease-in-out infinite',
            animationDelay: '-2s',
          }}
        />

        <div className="container relative z-10 py-24 text-center">
          <div
            className="inline-flex items-center justify-center w-28 h-28 bg-white/10 backdrop-blur-lg rounded-3xl p-4 shadow-2xl mb-6 border border-white/20"
            style={{ animation: 'fadeInUp 0.8s ease-out' }}
          >
            <Image
              src="/assets/images/logo.png"
              alt="شعار عالم الصحة"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>

          <h1
            className="text-5xl md:text-6xl font-black mb-4"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.1s backwards' }}
          >
            من نحن
          </h1>

          <p
            className="text-xl md:text-2xl opacity-95 mb-10 max-w-3xl mx-auto leading-relaxed"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.2s backwards' }}
          >
            مبادرة أردنية رائدة لتقديم خدمات المختبر الطبي إلى باب بيتك
            <br />
            <span className="text-lg opacity-80">بدقة، خصوصية، وثقة</span>
          </p>

          <div
            className="flex justify-center flex-wrap gap-6 mt-12"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.3s backwards' }}
          >
            {[
              { label: 'الزوار', value: 'visitors', target: 5420 },
              { label: 'العملاء', value: 'clients', target: 1230 },
              { label: 'الفحوصات', value: 'tests', target: 8750 }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="stat-card text-center min-w-[160px] rounded-2xl p-6 px-8 backdrop-blur-xl transition-all hover:scale-105 hover:shadow-2xl"
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                }}
              >
                <div className="text-sm opacity-90 mb-2">{stat.label}</div>
                <div
                  className="num text-4xl font-black text-white"
                  data-counter={stat.value}
                >
                  0
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-30px) translateX(20px); }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </header>

      <main className="about section py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[var(--primary-dark)] mb-4">لماذا عالم الصحة؟</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نجمع بين الاحترافية الطبية وسهولة الوصول لنقدم لك تجربة فريدة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="feature-card group relative overflow-hidden rounded-2xl p-8 text-center transition-all hover:shadow-2xl hover:-translate-y-2"
                style={{
                  background: 'white',
                  border: '1px solid rgba(0,0,0,0.05)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'linear-gradient(135deg, rgba(115,160,67,0.05), rgba(44,118,74,0.05))',
                  }}
                />
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-[var(--primary-dark)] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
            <div
              className="mission-card rounded-3xl p-10 backdrop-blur-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(115,160,67,0.1), rgba(44,118,74,0.05))',
                border: '1px solid rgba(115,160,67,0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent), var(--primary))',
                    boxShadow: '0 8px 20px rgba(115,160,67,0.3)',
                  }}
                >
                  🎯
                </div>
                <h2 className="text-3xl font-black text-[var(--primary-dark)]">رسالتنا</h2>
              </div>
              <p className="text-lg text-[#355243] leading-relaxed">
                أن نجعل الفحص الطبي أمرًا بسيطًا ومتاحًا للجميع، مع تجربة ودّية تبدأ من رسالة واتساب
                وتنتهي بنتائج موثوقة بين يديك. نؤمن بأن الصحة حق للجميع ونسعى لتوفير خدمات طبية
                عالية الجودة في راحة منزلك.
              </p>
            </div>

            <div
              className="partnership-card rounded-3xl p-10 backdrop-blur-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(44,118,74,0.1), rgba(31,81,55,0.05))',
                border: '1px solid rgba(44,118,74,0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                  style={{
                    background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
                    boxShadow: '0 8px 20px rgba(44,118,74,0.3)',
                  }}
                >
                  🤝
                </div>
                <h2 className="text-3xl font-black text-[var(--primary-dark)]">شراكاتنا</h2>
              </div>
              <p className="text-lg text-[#355243] leading-relaxed">
                نعمل بالتعاون مع أفضل المختبرات المرخّصة والمعتمدة في الأردن لضمان أعلى معايير
                الجودة والدقة. شراكاتنا الاستراتيجية تضمن لك الحصول على نتائج موثوقة وخدمة
                احترافية في كل مرة.
              </p>
            </div>
          </div>

          <div
            className="values-section rounded-3xl p-12 text-center"
            style={{
              background: 'white',
              border: '1px solid rgba(0,0,0,0.05)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
            }}
          >
            <h2 className="text-3xl font-black text-[var(--primary-dark)] mb-8">قيمنا ومبادئنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="value-item rounded-xl p-5 transition-all hover:scale-105 hover:shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgba(115,160,67,0.08), rgba(44,118,74,0.05))',
                    border: '1px solid rgba(115,160,67,0.15)',
                  }}
                >
                  <div className="flex items-center gap-3 justify-center">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: 'var(--accent)' }}
                    />
                    <span className="text-[var(--primary-dark)] font-bold">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-[var(--primary-dark)] mb-6">تواصل معنا</h3>
            <div className="flex justify-center gap-4">
              {[
                { href: 'https://wa.me/962779667168', icon: 'fa-whatsapp', bg: 'linear-gradient(135deg, #25D366, #20b858)', label: 'واتساب' },
                { href: 'https://www.instagram.com/homoblood', icon: 'fa-instagram', bg: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)', label: 'إنستغرام' },
                { href: 'https://www.facebook.com', icon: 'fa-facebook-f', bg: 'linear-gradient(135deg, #1877F2, #0d5bc6)', label: 'فيسبوك' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 grid place-items-center rounded-xl text-white text-xl transition-all hover:translate-y-[-6px] hover:scale-110 no-underline"
                  style={{
                    background: social.bg,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                  }}
                  aria-label={social.label}
                >
                  <i className={`fab ${social.icon}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
