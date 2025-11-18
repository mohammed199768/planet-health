'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import type { Post } from '@/lib/data/posts';
import { useI18n } from '@/components/LanguageProvider';

interface BlogPostModalProps {
  post: Post | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function BlogPostModal({ post, isOpen, onClose }: BlogPostModalProps) {
  const { t, lang } = useI18n();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
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

  if (!isOpen || !post) return null;

  const shareUrl =
    typeof window !== 'undefined'
      ? window.location.origin + '/blog/' + post.slug
      : '';
  const shareText = encodeURIComponent(post.title);

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    shareUrl
  )}`;
  const instagramShare = `https://www.instagram.com/`;

  const formattedDate = new Date(post.date).toLocaleDateString(
    lang === 'ar' ? 'ar-SA' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  const handleCopyLink = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert(t('blog.share.copied')); // 🔑
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[95vh] bg-white rounded-3xl shadow-2xl overflow-hidden animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 left-6 z-20 w-12 h-12 flex items-center justify-center bg-white/95 hover:bg-white rounded-full shadow-xl transition-all hover:scale-110 hover:rotate-90"
          aria-label={t('common.close')} // 🔑
        >
          <span className="text-3xl text-[var(--primary-dark)] font-light">×</span>
        </button>

        <div className="overflow-y-auto max-h-[95vh] custom-scrollbar">
          <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute top-6 right-6 flex gap-2">
              <span className="px-4 py-2 bg-[var(--accent)] text-white text-sm font-bold rounded-full shadow-lg">
                {post.category}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm md:text-base">
                {post.author && (
                  <div className="flex items-center gap-2">
                    <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      ✍️
                    </span>
                    <span className="font-semibold">{post.author}</span>
                  </div>
                )}
                <span className="w-1 h-1 bg-white/60 rounded-full" />
                <div className="flex items-center gap-2">
                  <span>📅</span>
                  <span>{formattedDate}</span>
                </div>
                {post.readTime && (
                  <>
                    <span className="w-1 h-1 bg-white/60 rounded-full" />
                    <div className="flex items-center gap-2">
                      <span>⏱️</span>
                      <span>{post.readTime}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="px-6 md:px-12 py-8 md:py-12">
            <div className="max-w-3xl mx-auto">
              <div className="mb-8 p-6 bg-gradient-to-br from-[var(--muted)] to-white rounded-2xl border-r-4 border-[var(--accent)]">
                <p className="text-lg md:text-xl text-[var(--primary-dark)] font-semibold leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <article className="prose prose-lg max-w-none">
                <div className="text-[var(--primary-dark)] leading-relaxed space-y-6">
                  {post.content.split('\n').map((paragraph, idx) => {
                    if (paragraph.trim() === '') return null;

                    if (paragraph.trim().startsWith('-')) {
                      return (
                        <div key={idx} className="flex items-start gap-3 py-2">
                          <span className="flex-shrink-0 w-2 h-2 bg-[var(--accent)] rounded-full mt-2" />
                          <p className="text-base md:text-lg m-0">
                            {paragraph.trim().substring(1).trim()}
                          </p>
                        </div>
                      );
                    }

                    return (
                      <p key={idx} className="text-base md:text-lg leading-relaxed">
                        {paragraph.trim()}
                      </p>
                    );
                  })}
                </div>
              </article>

              <div className="mt-12 pt-8 border-t-2 border-[var(--muted)]">
                <h3 className="text-xl md:text-2xl font-extrabold text-[var(--primary-dark)] mb-6">
                  {t('blog.share.title')}{/* 🔑 */}
                </h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={facebookShare}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-[#1877f2] text-white rounded-xl hover:shadow-xl transition-all hover:scale-105 font-semibold"
                  >
                    {/* الاسم يضل English */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>

                  <a
                    href={instagramShare}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-xl hover:shadow-xl transition-all hover:scale-105 font-semibold"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="flex items-center gap-3 px-6 py-3 bg-[var(--primary-dark)] text-white rounded-xl hover:shadow-xl transition-all hover:scale-105 font-semibold"
                  >
                    <span>🔗</span>
                    <span>{t('blog.share.copyLink')}</span>
                  </button>
                </div>
              </div>

              {post.author && (
                <div className="mt-8 p-6 bg-gradient-to-br from-[var(--muted)] to-white rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[var(--accent)] to-[var(--primary-dark)] rounded-full flex items-center justify-center text-2xl text-white shadow-lg">
                      ✍️
                    </div>
                    <div>
                      <h4 className="text-lg font-extrabold text-[var(--primary-dark)] mb-1">
                        {post.author}
                      </h4>
                      <p className="text-sm text-[#5f7b71]">
                        {t('blog.author.defaultBio')}
                      </p>
                    </div>
                  </div>
                </div>
              )}
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
            transform: translateY(40px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f8faf9;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, var(--accent), var(--primary-dark));
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--primary-dark);
        }
      `}</style>
    </div>
  );
}
