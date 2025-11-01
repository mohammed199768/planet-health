'use client';

import { useState } from 'react';
import { packages, searchPackages } from '@/lib/data/packages';
import type { Package } from '@/lib/data/packages';
import PackageCard from '@/components/PackageCard';
import PackageModal from '@/components/PackageModal';

export default function PackagesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPackages, setFilteredPackages] = useState(packages);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setFilteredPackages(searchPackages(query));
  };

  const handleDetailsClick = (pkg: Package) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleBookClick = (pkg: Package) => {
    window.location.href = `/?package=${encodeURIComponent(pkg.title)}#book-panel`;
  };

  const handleModalBook = (packageTitle: string) => {
    window.location.href = `/?package=${encodeURIComponent(packageTitle)}#book-panel`;
  };

  return (
    <>
      <main className="section packages py-18" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
            <h1 className="text-4xl font-extrabold text-[var(--primary-dark)]">جميع الباقات</h1>
            <label className="search bg-white rounded-full border border-[#e3eee6] px-3.5 py-2 flex gap-2.5 items-center min-w-[260px]">
              <span className="text-[#5f7b71]">🔍</span>
              <input
                type="text"
                placeholder="ابحث عن باقة…"
                className="border-none outline-none bg-transparent w-full text-sm"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5.5">
            {filteredPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                package={pkg}
                onDetailsClick={handleDetailsClick}
                onBookClick={handleBookClick}
              />
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-[#5f7b71]">لم يتم العثور على باقات مطابقة.</p>
            </div>
          )}
        </div>
      </main>

      <PackageModal
        package={selectedPackage}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onBook={handleModalBook}
      />
    </>
  );
}
