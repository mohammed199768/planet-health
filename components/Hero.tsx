'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import BookPanel from './BookPanel';
import DoctorBookPanel from './DoctorBookPanel';

export default function Hero() {
  // دالة تهيئة البارتيكلز بعد تحميل السكربت
  const initParticles = useCallback(() => {
    if (typeof window === 'undefined') return;

    const w = window as any;

    if (!w.particlesJS) {
      console.error('particlesJS غير موجود على window');
      return;
    }

    w.particlesJS('hero-particles', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: '#ffffff',
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000',
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 3,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab',
          },
          onclick: {
            enable: true,
            mode: 'push',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }, []);

 return (
  <>
    <Script
      id="particles-js-cdn"
      src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
      strategy="afterInteractive"
      onLoad={() => {
        console.log('particles.js loaded ✅');
        initParticles();
      }}
    />

    <header
      className="relative overflow-hidden text-white"
      style={{
        background:
          'linear-gradient(135deg, #1a3d2e 0%, #255339 40%, #3a5e44 100%)',
      }}
    >
      {/* خلفية البارتيكلز - نخليها z-0 بدل -z-10 */}
      <div
        id="hero-particles"
        className="absolute inset-0 z-0"
        aria-hidden="true"
      />

      {/* طبقة التدرج فوق البارتكلز - z-10 */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 10% 0%, rgba(115,160,67,0.45), transparent 55%), radial-gradient(circle at 80% 100%, rgba(44,118,74,0.55), transparent 55%)',
          mixBlendMode: 'soft-light',
        }}
      />

      {/* المحتوى فوق الكل - z-20 */}
      <div className="container relative z-20 py-20 md:py-24 lg:py-28">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-14">
          {/* النص / الرسالة الرئيسية */}
          <div
            className="w-full lg:w-1/2 space-y-5 md:space-y-6"
            style={{ animation: 'fadeInUp 0.8s ease-out' }}
          >
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-white/10 border border-white/30 backdrop-blur-md shadow-md">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span className="text-xs md:text-sm font-semibold">
                عالم الصحة — المختبر لعندك
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-snug md:leading-tight text-white drop-shadow-sm">
              فحوصات مخبرية
              <br className="hidden md:block" />
              <span className="text-[var(--accent)]"> وسحب دم منزلي </span>
              لعائلتك
            </h1>

            <p className="text-sm md:text-base lg:text-lg text-[#e4f5ea] max-w-xl leading-relaxed">
              فريق مختبر منزلي يصل لعندك في عمّان بمواعيد مرنة، أدوات معقمة،
              ونتائج موثوقة على واتساب. الآن أيضاً:
              <span className="font-bold"> حجز طبيب منزلي </span>
              لكبار السن والحالات الخاصة.
            </p>

            <div
              className="flex flex-wrap justify-start gap-4 mt-3"
              style={{ animation: 'fadeInUp 0.8s ease-out 0.15s backwards' }}
            >
              <Link href="#book-panel" className="btn hero-btn">
                احجز سحب دم منزلي
              </Link>
              <Link
                href="#doctor-book-panel"
                className="btn outline hero-btn"
              >
                احجز طبيب منزلي
              </Link>
              <Link
                href="/packages"
                className="btn outline hero-btn !h-11 !px-4 text-sm md:text-base"
              >
                تعرّف على الباقات
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-[#d4ecde] mt-4">
              <span>✅ مختبرات معتمدة</span>
              <span className="w-1 h-1 rounded-full bg-white/60" />
              <span>🕒 حجز خلال أقل من دقيقة</span>
              <span className="w-1 h-1 rounded-full bg-white/60" />
              <span>📍 عمّان — وضواحيها</span>
            </div>
          </div>

          <div
            className="w-full lg:w-1/2 space-y-4 md:space-y-5"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.25s backwards' }}
          >
            <div className="rounded-3xl bg-white/10 border border-white/25 backdrop-blur-xl shadow-2xl p-3 md:p-4">
              <BookPanel />
            </div>

            <div className="rounded-3xl bg-white/10 border border-white/25 backdrop-blur-xl shadow-2xl p-3 md:p-4">
              <DoctorBookPanel />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        :global(.hero-btn) {
          transition: all 0.25s ease;
        }

        :global(.hero-btn:hover) {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 12px 26px rgba(0, 0, 0, 0.28);
          text-decoration: none;
        }

        #hero-particles canvas {
          width: 100% !important;
          height: 100% !important;
          display: block;
        }
      `}</style>
    </header>
  </>
);
}