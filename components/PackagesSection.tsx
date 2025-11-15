'use client';

import { useState } from 'react';
import Link from 'next/link';
import { packages } from '@/lib/data/packages';
import type { Package } from '@/lib/data/packages';
import PackageCard from './PackageCard';
import PackageModal from './PackageModal';

export default function PackagesSection() {
  const featured = packages.slice(0, 3);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDetailsClick = (pkg: Package) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleBookClick = (pkg: Package) => {
    const bookPanel = document.getElementById('book-panel');
    if (bookPanel) {
      bookPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });

      setTimeout(() => {
        const bookButton = bookPanel.querySelector('button[type="button"]') as HTMLButtonElement;
        if (bookButton && bookButton.textContent?.includes('احجز الآن')) {
          bookButton.click();

          setTimeout(() => {
            const packageSelect = document.querySelector('select[name="package"]') as HTMLSelectElement;
            if (packageSelect) {
              packageSelect.value = pkg.title;
              packageSelect.dispatchEvent(new Event('change', { bubbles: true }));
            }
          }, 300);
        }
      }, 100);
    }
  };

  const handleModalBook = (packageTitle: string) => {
    const bookPanel = document.getElementById('book-panel');
    if (bookPanel) {
      bookPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });

      setTimeout(() => {
        const bookButton = bookPanel.querySelector('button[type="button"]') as HTMLButtonElement;
        if (bookButton && bookButton.textContent?.includes('احجز الآن')) {
          bookButton.click();

          setTimeout(() => {
            const packageSelect = document.querySelector('select[name="package"]') as HTMLSelectElement;
            if (packageSelect) {
              packageSelect.value = packageTitle;
              packageSelect.dispatchEvent(new Event('change', { bubbles: true }));
            }
          }, 300);
        }
      }, 100);
    }
  };

  return (
    <>
      <section
        className="section py-20"
        style={{ background: 'var(--muted)' }}
      >
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-[var(--primary-dark)]">مختارات من الباقات</h2>
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
              مشاهدة كل الباقات
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
