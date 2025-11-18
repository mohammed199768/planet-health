import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnalyticsTracker from './AnalyticsTracker';
import { LanguageProvider } from '@/components/LanguageProvider';

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'عالم الصحة — المختبر لعندك',
  description:
    'مبادرة أردنية لتقديم خدمات المختبر إلى باب بيتك — بدقة، خصوصية، وثقة.',
  keywords: ['مختبر منزلي', 'فحوصات طبية', 'الأردن', 'عمان', 'سحب دم منزلي'],

  icons: {
    icon: '/assets/images/logo.png',
    apple: '/assets/images/logo.png',
  },

  openGraph: {
    title: 'عالم الصحة — المختبر لعندك',
    description: 'مبادرة أردنية لتقديم خدمات المختبر إلى باب بيتك',
    url: 'https://planet-health-jo.com', // إن توفر
    siteName: 'عالم الصحة',
    type: 'website',
    locale: 'ar_AR',
    images: [
      {
        url: '/assets/images/logo.png',
        width: 512,
        height: 512,
        alt: 'شعار عالم الصحة',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://www.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={cairo.variable}>
        {/* تسجيل الزيارات */}
        <AnalyticsTracker />

       <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
