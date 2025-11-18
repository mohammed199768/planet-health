'use client';

import { useState, FormEvent } from 'react';
import { useI18n } from '@/components/LanguageProvider';

type AlertType = 'info' | 'success' | 'error';

interface AlertState {
  show: boolean;
  message: string;
  type: AlertType;
}

export default function ContactPage() {
  const { t } = useI18n();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });

  const [alert, setAlert] = useState<AlertState>({
    show: false,
    message: '',
    type: 'info',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAlert({ show: true, message: t('contact.alert.sending'), type: 'info' });

    const { name, phone } = formData;

    if (name.trim().length < 3) {
      setAlert({
        show: true,
        message: t('contact.error.name'),
        type: 'error',
      });
      return;
    }

    if (!/^07[789]\d{7}$/.test(phone)) {
      setAlert({
        show: true,
        message: t('contact.error.phone'),
        type: 'error',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formspreeEndpoint =
        process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
        'https://formspree.io/f/xyzkvlbq';

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setAlert({
          show: true,
          message: t('contact.alert.success'),
          type: 'success',
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          phone: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error(error);
      setAlert({
        show: true,
        message: t('contact.alert.error'),
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: '📱',
      titleKey: 'contact.methods.phone.title',
      valueKey: 'contact.methods.phone.value',
      link: 'tel:+962779667168',
    },
    {
      icon: '📧',
      titleKey: 'contact.methods.email.title',
      valueKey: 'contact.methods.email.value',
      link: 'mailto:contact@homoblood.online',
    },
    {
      icon: '📍',
      titleKey: 'contact.methods.location.title',
      valueKey: 'contact.methods.location.value',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      icon: 'fa-whatsapp',
      label: 'WhatsApp',
      href: 'https://wa.me/962779667168',
      bg: 'linear-gradient(135deg, #25D366, #20b858)',
    },
    {
      icon: 'fa-instagram',
      label: 'Instagram',
      href: 'https://www.instagram.com/homoblood',
      bg: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
    },
    {
      icon: 'fa-facebook-f',
      label: 'Facebook',
      href: 'https://www.facebook.com',
      bg: 'linear-gradient(135deg, #1877F2, #0d5bc6)',
    },
  ];

  return (
    <>
      <header
        className="contact-hero relative text-white overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a4d2e 0%, #2d6a4f 50%, #40916c 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20px 20px, rgba(255,255,255,0.15) 2px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        <div
          className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #73A043, transparent)',
            animation: 'pulse 6s ease-in-out infinite',
          }}
        />

        <div className="container relative z-10 py-20 text-center">
          <h1
            className="text-5xl md:text-6xl font-black mb-6"
            style={{ animation: 'fadeInUp 0.8s ease-out' }}
          >
            {t('contact.hero.title')}
          </h1>
          <p
            className="text-xl md:text-2xl opacity-95 max-w-2xl mx-auto leading-relaxed"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.1s backwards' }}
          >
            {t('contact.hero.subtitle')}
          </p>
        </div>

        <style jsx>{`
          @keyframes pulse {
            0%,
            100% {
              opacity: 0.2;
              transform: scale(1);
            }
            50% {
              opacity: 0.3;
              transform: scale(1.1);
            }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </header>

      <main className="section py-20">
        <div className="container">
          {/* طرق التواصل المختصرة */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.link}
                className="group relative overflow-hidden rounded-2xl p-8 text-center transition-all hover:shadow-2xl hover:-translate-y-2 no-underline"
                style={{
                  background: 'white',
                  border: '1px solid rgba(0,0,0,0.05)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(115,160,67,0.05), rgba(44,118,74,0.05))',
                  }}
                />
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{method.icon}</div>
                  <h3 className="text-lg font-bold text-[var(--primary-dark)] mb-2">
                    {t(method.titleKey)}
                  </h3>
                  <p className="text-gray-600">{t(method.valueKey)}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* الفورم */}
            <div
              className="rounded-3xl p-10 backdrop-blur-xl"
              style={{
                background: 'white',
                border: '1px solid rgba(0,0,0,0.05)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                  style={{
                    background:
                      'linear-gradient(135deg, var(--accent), var(--primary))',
                    boxShadow: '0 8px 20px rgba(115,160,67,0.3)',
                  }}
                >
                  ✉️
                </div>
                <h2 className="text-3xl font-black text-[var(--primary-dark)]">
                  {t('contact.form.title')}
                </h2>
              </div>

              <p className="mb-6 text-gray-600 leading-relaxed">
                {t('contact.form.description')}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-[var(--primary-dark)] mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    className="input"
                    name="name"
                    placeholder={t('contact.form.namePlaceholder')}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[var(--primary-dark)] mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    className="input"
                    name="email"
                    type="email"
                    placeholder={t('contact.form.emailPlaceholder')}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[var(--primary-dark)] mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    className="input"
                    name="phone"
                    placeholder={t('contact.form.phonePlaceholder')}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[var(--primary-dark)] mb-2">
                    {t('contact.form.subject')}
                  </label>
                  <input
                    className="input"
                    name="subject"
                    placeholder={t('contact.form.subjectPlaceholder')}
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[var(--primary-dark)] mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    className="input min-h-[120px]"
                    name="message"
                    placeholder={t('contact.form.messagePlaceholder')}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <div
                  className="rounded-xl p-4 text-sm"
                  style={{
                    background: 'rgba(115,160,67,0.08)',
                    border: '1px solid rgba(115,160,67,0.2)',
                    color: 'var(--primary-dark)',
                  }}
                >
                  {t('contact.form.privacy')}
                </div>

                {alert.show && (
                  <div
                    className="rounded-xl p-4"
                    style={{
                      background:
                        alert.type === 'success'
                          ? 'rgba(34,197,94,0.1)'
                          : alert.type === 'error'
                          ? 'rgba(239,68,68,0.1)'
                          : 'rgba(59,130,246,0.1)',
                      border:
                        alert.type === 'success'
                          ? '1px solid rgba(34,197,94,0.3)'
                          : alert.type === 'error'
                          ? '1px solid rgba(239,68,68,0.3)'
                          : '1px solid rgba(59,130,246,0.3)',
                      color:
                        alert.type === 'success'
                          ? '#15803d'
                          : alert.type === 'error'
                          ? '#991b1b'
                          : '#1e40af',
                    }}
                  >
                    {alert.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn w-full text-lg py-4 transition-all hover:scale-105"
                  disabled={isSubmitting}
                  style={{
                    background: isSubmitting
                      ? '#94a3b8'
                      : 'linear-gradient(135deg, var(--accent), var(--primary))',
                  }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <i className="fas fa-spinner fa-spin" />
                      {t('contact.form.sending')}
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <i className="fas fa-paper-plane" />
                      {t('contact.form.submit')}
                    </span>
                  )}
                </button>
              </form>
            </div>

            {/* العمود الثاني: ساعات العمل + السوشال + واتساب سريع */}
            <div className="space-y-8">
              <div
                className="rounded-3xl p-10 backdrop-blur-xl"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(115,160,67,0.1), rgba(44,118,74,0.05))',
                  border: '1px solid rgba(115,160,67,0.2)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                    style={{
                      background:
                        'linear-gradient(135deg, var(--primary), var(--primary-dark))',
                      boxShadow: '0 8px 20px rgba(44,118,74,0.3)',
                    }}
                  >
                    ⏰
                  </div>
                  <h3 className="text-2xl font-black text-[var(--primary-dark)]">
                    {t('contact.hours.title')}
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/50">
                    <span className="font-bold text-[var(--primary-dark)]">
                      {t('contact.hours.weekdays')}
                    </span>
                    <span className="text-gray-600">
                      {t('contact.hours.weekdaysTime')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/50">
                    <span className="font-bold text-[var(--primary-dark)]">
                      {t('contact.hours.friday')}
                    </span>
                    <span className="text-gray-600">
                      {t('contact.hours.fridayTime')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    {t('contact.hours.note')}
                  </p>
                </div>
              </div>

              <div
                className="rounded-3xl p-10 backdrop-blur-xl text-center"
                style={{
                  background: 'white',
                  border: '1px solid rgba(0,0,0,0.05)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                }}
              >
                <h3 className="text-2xl font-black text-[var(--primary-dark)] mb-4">
                  {t('contact.follow.title')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t('contact.follow.subtitle')}
                </p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 grid place-items-center rounded-xl text-white text-xl transition-all hover:translate-y-[-6px] hover:scale-110 no-underline"
                      style={{
                        background: social.bg,
                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                      }}
                      aria-label={social.label}
                    >
                      <i className={`fab ${social.icon}`} />
                    </a>
                  ))}
                </div>
              </div>

              <div
                className="rounded-3xl p-8 backdrop-blur-xl text-center"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(44,118,74,0.1), rgba(31,81,55,0.05))',
                  border: '1px solid rgba(44,118,74,0.2)',
                }}
              >
                <div className="text-4xl mb-3">💬</div>
                <h4 className="text-xl font-bold text-[var(--primary-dark)] mb-2">
                  {t('contact.quick.title')}
                </h4>
                <p className="text-gray-600 mb-4 text-sm">
                  {t('contact.quick.subtitle')}
                </p>
                <a
                  href="https://wa.me/962779667168"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-full"
                  style={{
                    background: 'linear-gradient(135deg, #25D366, #20b858)',
                  }}
                >
                  <i className="fab fa-whatsapp ml-2" />
                  {t('contact.quick.btn')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
