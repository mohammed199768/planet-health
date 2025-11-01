'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import type { Package } from '@/lib/data/packages';

interface PackageModalProps {
  package: Package | null;
  isOpen: boolean;
  onClose: () => void;
  onBook: (packageTitle: string) => void;
}

export default function PackageModal({ package: pkg, isOpen, onClose, onBook }: PackageModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen || !pkg) return null;

  const handleBook = () => {
    onClose();
    onBook(pkg.title);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
          aria-label="إغلاق"
        >
          <span className="text-2xl text-[var(--primary-dark)]">×</span>
        </button>

        <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <Image
              src={pkg.image}
              alt={pkg.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-2">
                {pkg.icon && (
                  <span className="text-4xl md:text-5xl">{pkg.icon}</span>
                )}
                <h2 className="text-2xl md:text-4xl font-extrabold text-white">
                  {pkg.title}
                </h2>
              </div>
              <p className="text-white/90 text-base md:text-lg">
                {pkg.description}
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-extrabold text-[var(--primary-dark)] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[var(--accent)] rounded-full"></span>
                الفحوصات المشمولة
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-[var(--muted)] rounded-xl hover:bg-[#e3f0e7] transition-colors"
                  >
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-[var(--accent)] text-white rounded-full text-xs font-bold mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-[var(--primary-dark)] font-semibold text-sm md:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[var(--primary-dark)] to-[var(--accent)] rounded-2xl p-6 text-white">
              <p className="text-sm md:text-base mb-4 leading-relaxed">
                احجز الآن واحصل على نتائج دقيقة وسريعة من منزلك. فريقنا المحترف جاهز لخدمتك.
              </p>
              <button
                onClick={handleBook}
                className="w-full bg-white text-[var(--primary-dark)] font-extrabold text-base md:text-lg py-4 rounded-xl hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                احجز هذه الباقة الآن
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f3;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--accent);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--primary-dark);
        }
      `}</style>
    </div>
  );
}
