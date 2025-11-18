'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useI18n } from '@/components/LanguageProvider';

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer
      className="footer relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a3d2e 0%, #0d2619 50%, #081810 100%)',
        color: '#e0f2e7',
        fontSize: '15px',
        lineHeight: '1.8',
      }}
    >
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20px 20px, rgba(255,255,255,0.1) 2px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(115, 160, 67, 0.3), transparent)',
        }}
      />

      <div className="container relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-14 h-14">
                <Image
                  src="/assets/images/logo.png"
                  alt={t('nav.brand')}
                  fill
                  className="rounded-full shadow-lg object-contain"
                  priority
                />
              </div>

              <h3 className="text-white text-2xl font-extrabold m-0">
                {t('nav.brand')}
              </h3>
            </div>
            <p className="mb-5 text-[#c5e5d0] leading-relaxed max-w-md">
              {t('footer.description')}{/* 🔑 */}
            </p>
            <div className="flex gap-3 mt-5">
              {/* واتساب */}
              <a
                href="https://wa.me/962779667168"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 grid place-items-center rounded-xl text-white text-lg transition-all hover:translate-y-[-4px] hover:scale-110 no-underline"
                style={{
                  background: 'linear-gradient(135deg, #25D366, #20b858)',
                  boxShadow: '0 8px 20px rgba(37, 211, 102, 0.3)',
                }}
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp" />
              </a>
              {/* إنستغرام */}
              <a
                href="https://www.instagram.com/homoblood"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 grid place-items-center rounded-xl text-white text-lg transition-all hover:translate-y-[-4px] hover:scale-110 no-underline"
                style={{
                  background:
                    'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
                  boxShadow: '0 8px 20px rgba(131, 58, 180, 0.3)',
                }}
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </a>
              {/* فيسبوك */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 grid place-items-center rounded-xl text-white text-lg transition-all hover:translate-y-[-4px] hover:scale-110 no-underline"
                style={{
                  background: 'linear-gradient(135deg, #1877F2, #0d5bc6)',
                  boxShadow: '0 8px 20px rgba(24, 119, 242, 0.3)',
                }}
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg mb-4 font-extrabold flex items-center gap-2">
              <span className="w-1 h-6 bg-[var(--accent)] rounded-full" />
              {t('footer.quickLinks')}{/* 🔑 */}
            </h4>
            <ul className="list-none p-0 m-0 space-y-3">
              {[
                { href: '/', label: t('nav.home') },
                { href: '/packages', label: t('nav.packages') },
                { href: '/blog', label: t('nav.blog') },
                { href: '/about', label: t('nav.about') },
                { href: '/contact', label: t('footer.contactLink') },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-all hover:text-white hover:translate-x-[-4px] inline-flex items-center gap-2 no-underline group"
                  >
                    <span className="text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                      ←
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg mb-4 font-extrabold flex items-center gap-2">
              <span className="w-1 h-6 bg-[var(--accent)] rounded-full" />
              {t('footer.contact')}{/* 🔑 */}
            </h4>
            <ul className="list-none p-0 m-0 space-y-3">
              <li>
                <a
                  href="tel:+962779667168"
                  className="transition-all hover:text-white no-underline flex items-center gap-3 group"
                >
                  <span className="w-9 h-9 rounded-lg bg-[rgba(115,160,67,0.15)] flex items-center justify-center group-hover:bg-[var(--accent)] transition-all">
                    <i className="fas fa-phone text-[var(--accent)] group-hover:text-white transition-colors" />
                  </span>
                  <span>0779667168</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@homoblood.online"
                  className="transition-all hover:text-white no-underline flex items-center gap-3 group"
                >
                  <span className="w-9 h-9 rounded-lg bg-[rgba(115,160,67,0.15)] flex items-center justify-center group-hover:bg-[var(--accent)] transition-all">
                    <i className="fas fa-envelope text-[var(--accent)] group-hover:text-white transition-colors" />
                  </span>
                  <span className="break-all">contact@homoblood.online</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/homoblood"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:text-white no-underline flex items-center gap-3 group"
                >
                  <span className="w-9 h-9 rounded-lg bg-[rgba(115,160,67,0.15)] flex items-center justify-center group-hover:bg-[var(--accent)] transition-all">
                    <i className="fab fa-instagram text-[var(--accent)] group-hover:text-white transition-colors" />
                  </span>
                  <span>homoblood@</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t pt-6 text-center"
          style={{
            borderColor: 'rgba(115, 160, 67, 0.2)',
          }}
        >
          <p className="m-0 text-[#b5d8c0]">
            © {year} {t('nav.brand')}. {t('footer.rights')}
          </p>
          <p className="m-0 mt-2 text-sm text-[#8fb99a]">
            {t('footer.tagline')}
          </p>
        </div>
      </div>
    </footer>
  );
}
