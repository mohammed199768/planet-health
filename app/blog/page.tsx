'use client';

import { useState } from 'react';
import { posts } from '@/lib/data/posts';
import type { Post } from '@/lib/data/posts';
import Image from 'next/image';
import BlogPostModal from '@/components/BlogPostModal';
import { useI18n } from '@/components/LanguageProvider';

export default function BlogPage() {
  const { t, lang } = useI18n();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <main className="section py-20" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-[var(--primary-dark)] mb-3">
              {t('blog.page.title')}
            </h1>
            <p className="text-lg text-[#466257] max-w-2xl mx-auto">
              {t('blog.page.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5.5">
            {posts.map((post) => (
              <article
                key={post.id}
                className="card cursor-pointer transition-all hover:scale-[1.02]"
                onClick={() => handlePostClick(post)}
              >
                <div className="relative overflow-hidden group">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full aspect-[16/10] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 bg-[var(--accent)] text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg">
                    {post.category}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-sm text-[#5f7b71] mb-3">
                    <span>📅 {formatDate(post.date)}</span>
                    {post.readTime && (
                      <>
                        <span>•</span>
                        <span>⏱️ {post.readTime}</span>
                      </>
                    )}
                  </div>

                  <h2 className="text-xl font-extrabold text-[var(--primary-dark)] mb-3 leading-tight line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-[#466257] text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {post.author && (
                    <div className="flex items-center gap-2 text-xs text-[#5f7b71] mt-3 pt-3 border-t border-[#e7efe9]">
                      <span>✍️</span>
                      <span>{post.author}</span>
                    </div>
                  )}

                  <div className="mt-4 inline-flex items-center gap-2 text-[var(--accent)] font-bold text-sm hover:gap-3 transition-all duration-200">
                    {t('blog.card.readMore')}
                    <span>{lang === 'ar' ? '←' : '→'}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-4">
                <span className="text-4xl">📝</span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--primary-dark)] mb-2">
                {t('blog.empty.title')}
              </h3>
              <p className="text-[#5f7b71]">{t('blog.empty.text')}</p>
            </div>
          )}
        </div>
      </main>

      <BlogPostModal
        post={selectedPost}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
