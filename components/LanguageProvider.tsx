'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { translations, type Lang } from '@/lib/i18n';

interface I18nContextValue {
  lang: Lang;
  t: (key: string) => string;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ar');

  // قراءة اللغة من localStorage
  useEffect(() => {
    const saved = typeof window !== 'undefined'
      ? (localStorage.getItem('lang') as Lang | null)
      : null;
    if (saved === 'ar' || saved === 'en') setLang(saved);
  }, []);

  // تحديث dir/lang على <html> + تخزينها
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', lang);
    }
  }, [lang]);

  const t = (key: string) => {
    const dict = translations[lang];
    return dict[key] ?? key;
  };

  const toggleLang = () => setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));

  return (
    <I18nContext.Provider value={{ lang, t, toggleLang, setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used inside LanguageProvider');
  }
  return ctx;
}
