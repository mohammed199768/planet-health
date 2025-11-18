'use client';

import { useState } from 'react';
import Link from 'next/link';
import { packages } from '@/lib/data/packages';
import type { Package } from '@/lib/data/packages';
import PackageCard from './PackageCard';
import PackageModal from './PackageModal';
import { useI18n } from '@/components/LanguageProvider';

export default function PackagesSection() {
  const { t } = useI18n();
  const featured = packages.slice(0, 3);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openBookPanelWithPackage = (title: string) => {
    const bookPanel = document.getElementById('book-panel');
    if (!bookPanel) return;

    bookPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });

    setTimeout(() => {
      const bookButton = bookPanel.querySelector(
        'button[type="button"]'
      ) as HTMLButtonElement | null;

      if (bookButton && bookButton.textContent?.includes(t('book.btn.open'))) {
        bookButton.click();

        setTimeout(() => {
          const packageSelect = document.querySelector(
            'select[name="package"]'
          ) as HTMLSelectElement | null;

          if (packageSelect) {
            packageSelect.value = title;
            packageSelect.dispatchEvent(new Event('change', { bubbles: true }));
          }
        }, 300);
      }
    }, 100);
  };

  const handleDetailsClick = (pkg: Package) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleBookClick = (pkg: Package) => {
    openBookPanelWithPackage(pkg.title);
  };

  const handleModalBook = (packageTitle: string) => {
    openBookPanelWithPackage(packageTitle);
  };

  return (
    <>
      <section
        className="section py-20"
        style={{ background: 'var(--muted)' }}
      >
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-[var(--primary-dark)]">
              {t('packages.featured.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 gap-x-5">
            {featured.map((pkg) => (
              <PackageCard
                key={pkg.id}
                package={pkg}
                onDetailsClick={handleDetailsClick}
                onBookClick={handleBookClick}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/packages" className="btn">
              {t('packages.featured.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      <PackageModal
        package={selectedPackage}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onBook={handleModalBook}
      />
    </>
  );
}
