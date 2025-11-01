'use client';

import Link from 'next/link';
import BookPanel from './BookPanel';

export default function Hero() {
  return (
    <header
      className="hero relative text-white py-35 pb-30 overflow-hidden"
      style={{
        background:
          'radial-gradient(1200px 600px at 80% 20%, rgba(255,255,255,.12), transparent 60%), linear-gradient(135deg, #255339, #3a5e44)',
        isolation: 'isolate',
      }}
    >
      <div
        className="hero-decor absolute inset-0 z-[1] pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="blob absolute filter blur-[22px] rounded-full opacity-42"
          style={{
            width: '360px',
            height: '360px',
            left: '-6%',
            top: '-8%',
            background: 'color-mix(in srgb, #73A043 80%, #fff 20%)',
            animation: 'floatY 12s ease-in-out infinite, pulse 8s ease-in-out infinite',
            mixBlendMode: 'screen',
          }}
        />
        <div
          className="blob absolute filter blur-[22px] rounded-full opacity-42"
          style={{
            width: '420px',
            height: '420px',
            right: '-8%',
            top: '10%',
            background: 'color-mix(in srgb, #2C764A 85%, #5bd38a 15%)',
            animation: 'floatY 10s ease-in-out infinite, pulse 6s ease-in-out infinite',
            animationDelay: '-2s',
            mixBlendMode: 'screen',
          }}
        />
        <div
          className="blob absolute filter blur-[22px] rounded-full opacity-42"
          style={{
            width: '280px',
            height: '280px',
            left: '20%',
            bottom: '-10%',
            background: 'color-mix(in srgb, #1F5137 80%, #a6f0c1 20%)',
            animation: 'floatY 11s ease-in-out infinite, pulse 7s ease-in-out infinite',
            animationDelay: '-1s',
            mixBlendMode: 'screen',
          }}
        />

        <svg
          className="dot-grid absolute inset-0 opacity-25"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          style={{ animation: 'fadeInDots 2s ease-out' }}
        >
          <defs>
            <pattern
              id="pDots"
              x="0"
              y="0"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(255,255,255,0.18)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pDots)" />
        </svg>

        <svg
          className="hero-wave absolute left-0 right-0 bottom-[-1px] h-40 w-[110%]"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          style={{ animation: 'waveMove 3s ease-in-out infinite' }}
        >
          <path
            d="M0,80 C240,160 480,0 720,80 C960,160 1200,60 1440,120 L1440,180 L0,180 Z"
            fill="rgba(255,255,255,0.75)"
          />
        </svg>
      </div>

      <div className="container relative z-[2]" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
        <BookPanel />

        <div className="flex gap-4.5 mt-4.5" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s backwards' }}>
          <Link href="/packages" className="btn outline hero-btn">
            تعرّف على الباقات
          </Link>
          <Link href="/contact" className="btn outline hero-btn">
            تواصل معنا
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatY {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-30px) translateX(20px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.42;
            transform: scale(1);
          }
          50% {
            opacity: 0.55;
            transform: scale(1.05);
          }
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

        @keyframes fadeInDots {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.25;
          }
        }

        @keyframes waveMove {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-20px);
          }
        }

        :global(.hero-btn) {
          transition: all 0.3s ease;
        }

        :global(.hero-btn:hover) {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </header>
  );
}
