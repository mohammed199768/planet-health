'use client';

import Image from 'next/image';
import type { Package } from '@/lib/data/packages';
import { useI18n } from '@/components/LanguageProvider';

interface PackageCardProps {
  package: Package;
  onDetailsClick: (pkg: Package) => void;
  onBookClick: (pkg: Package) => void;
}

export default function PackageCard({ package: pkg, onDetailsClick, onBookClick }: PackageCardProps) {
  const { t } = useI18n();

  return (
    <div className="card">
      <div className="relative">
        <Image
          src={pkg.image}
          alt={pkg.title}
          width={400}
          height={300}
          className="w-full aspect-[4/3] object-cover"
        />
        <div className="absolute top-2.5 right-2.5 z-[2] bg-[rgba(255,255,255,0.92)] text-[var(--primary-dark)] border border-[rgba(0,0,0,0.06)] rounded-lg px-2 py-1 font-extrabold text-xs shadow-md">
          {t('packages.card.badge')}
        </div>
        {pkg.icon && (
          <div className="absolute top-2.5 left-2.5 z-[2] text-3xl drop-shadow-lg">
            {pkg.icon}
          </div>
        )}
      </div>
      <div className="body flex flex-col gap-2 p-4 flex-1">
        <div className="title text-xl font-extrabold leading-tight min-h-[2.6em] overflow-hidden text-[var(--primary-dark)]">
          {pkg.title}
        </div>
        <p className="text-[#466257] m-0 min-h-[3.4em] overflow-hidden text-sm">
          {pkg.description}
        </p>
        <div className="mt-2 flex items-center gap-1.5 text-xs text-[var(--accent)] font-bold">
          <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full" />
          {pkg.features.length} {t('packages.card.testsUnit')}
        </div>
        <div className="actions mt-auto grid grid-cols-2 gap-2.5 pt-3">
          <button
            className="btn h-11"
            type="button"
            onClick={() => onBookClick(pkg)}
            style={{
              background: 'var(--accent)',
              boxShadow: '0 4px 12px rgba(115,160,67,.3)',
            }}
          >
            {t('packages.card.bookNow')}
          </button>
          <button
            className="btn outline h-11"
            type="button"
            onClick={() => onDetailsClick(pkg)}
          >
            {t('packages.card.details')}
          </button>
        </div>
      </div>
    </div>
  );
}
