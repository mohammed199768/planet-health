'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useI18n } from '@/components/LanguageProvider';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { lang, t, toggleLang } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/', labelKey: 'nav.home' },
    { href: '/packages', labelKey: 'nav.packages' },
    { href: '/blog', labelKey: 'nav.blog' },
    { href: '/about', labelKey: 'nav.about' },
    { href: '/contact', labelKey: 'nav.contact' },
  ];

  const brandTagline =
    lang === 'ar'
      ? 'المختبر والعيادة لعندك'
      : 'Home lab & clinic';

  return (
    <>
      <nav
        className={`navbar fixed top-0 left-0 w-full z-[999] transition-all duration-400 ${
          isScrolled ? 'bg-[rgba(44,118,74,0.6)]' : 'bg-[rgba(44,118,74,0.25)]'
        }`}
        style={{
          backdropFilter: 'blur(18px) saturate(160%)',
          WebkitBackdropFilter: 'blur(18px) saturate(160%)',
          borderBottom: '1px solid rgba(255,255,255,0.15)',
          boxShadow: isScrolled
            ? '0 6px 30px rgba(0,0,0,0.12)'
            : '0 4px 20px rgba(0,0,0,0.08)',
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* الشعار + اسم البراند */}
            <Link
              href="/"
              className="brand flex items-center gap-3 font-extrabold no-underline hover:no-underline"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12">
                <Image
                  src="/assets/images/logo.png"
                  alt="Curevie logo"
                  fill
                  sizes="48px"
                  className="rounded-full shadow-lg object-contain"
                  priority
                />
              </div>
<div className="hidden sm:flex flex-col leading-tight select-none">
  {/* اسم البراند: ناعم وراقي */}
  <span
    className="
      text-[1.32rem]
      font-bold
      tracking-[0.02em]
      text-[#3A6F7A]/85
      drop-shadow-[0_0.5px_1px_rgba(255,255,255,0.55)]
      antialiased
    "
  >
    {t('nav.brand')}
  </span>

  {/* تاغلاين فاين جداً */}
  <span
    className="
      text-[11px]
      font-medium
      tracking-[0.15em]
      text-[#1a1f2b]/60
      drop-shadow-[0_0.5px_1px_rgba(255,255,255,0.38)]
      antialiased
    "
  >
    {brandTagline}
  </span>
</div>


              {/* في الشاشات الصغيرة نعرض فقط الاسم بدون التاغلاين */}
              <span className="sm:hidden text-white text-lg drop-shadow-md">
                {t('nav.brand')}
              </span>
            </Link>

            {/* روابط الديسكتوب + زر اللغة */}
            <div className="hidden lg:flex gap-4.5 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 py-2 rounded-lg font-semibold transition-colors no-underline ${
                    pathname === link.href
                      ? 'bg-[var(--muted)]'
                      : 'hover:bg-[var(--muted)]'
                  }`}
                  style={{ color: '#213' }}
                >
                  {t(link.labelKey)}
                </Link>
              ))}

              {/* زر تبديل اللغة */}
              <button
                type="button"
                onClick={toggleLang}
                className="btn outline h-9 text-xs px-3"
              >
                {lang === 'ar' ? 'EN' : 'عربي'}
              </button>
            </div>

            {/* زر منيو الموبايل */}
            <button
              className="menu-toggle lg:hidden w-[46px] h-10 border-none bg-transparent cursor-pointer rounded-xl relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="قائمة التنقل"
              aria-expanded={isMenuOpen}
            >
              <span
                className={`bar block h-0.5 w-6 mx-auto my-1.5 bg-white rounded-sm transition-transform duration-250 shadow-sm ${
                  isMenuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`bar block h-0.5 w-6 mx-auto my-1.5 bg-white rounded-sm transition-opacity duration-250 shadow-sm ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`bar block h-0.5 w-6 mx-auto my-1.5 bg-white rounded-sm transition-transform duration-250 shadow-sm ${
                  isMenuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* منيو الموبايل */}
      <div
        className={`mobile-menu fixed inset-x-0 top-16 z-[998] transition-all duration-350 overflow-hidden ${
          isMenuOpen ? 'h-[calc(100vh-64px)]' : 'h-0'
        }`}
        style={{
          background: 'transparent',
        }}
      >
        <div
          className={`absolute inset-0 transition-opacity duration-350 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backdropFilter: 'blur(18px) saturate(180%)',
            WebkitBackdropFilter: 'blur(18px) saturate(180%)',
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(242,242,242,0.92) 45%, rgba(235,235,235,0.9) 100%)',
            boxShadow:
              'inset 0 0 40px rgba(255,255,255,0.35), inset 0 0 120px rgba(255,255,255,0.25)',
            borderBottom: '1px solid rgba(0,0,0,0.08)',
          }}
        />

        <div className="mobile-inner relative z-10 grid gap-3 p-4 pb-5.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-3 px-3.5 rounded-xl font-bold no-underline transition-all ${
                pathname === link.href
                  ? 'bg-[rgba(0,0,0,0.08)] border-[rgba(0,0,0,0.18)]'
                  : 'bg-[rgba(0,0,0,0.04)] border-[rgba(0,0,0,0.10)] hover:bg-[rgba(0,0,0,0.08)]'
              }`}
              style={{
                color: '#0F172A',
                border: '1px solid',
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {t(link.labelKey)}
            </Link>
          ))}

          {/* زر اللغة في الموبايل */}
          <button
            type="button"
            onClick={() => {
              toggleLang();
            }}
            className="block py-3 px-3.5 rounded-xl font-bold no-underline transition-all bg-[rgba(0,0,0,0.04)] border-[rgba(0,0,0,0.10)] hover:bg-[rgba(0,0,0,0.08)] text-center"
            style={{ color: '#0F172A', border: '1px solid' }}
          >
            {lang === 'ar' ? 'English' : 'العربية'}
          </button>

          <Link
            href="/contact"
            className="btn mt-2 text-center no-underline"
            style={{
              background: 'var(--accent)',
              boxShadow: '0 10px 28px rgba(115,160,67,.35)',
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.bookNow')}
          </Link>
        </div>
      </div>
    </>
  );
}
