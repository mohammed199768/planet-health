'use client';

import { useState, FormEvent, useEffect } from 'react';
import Image from 'next/image';
import { createBooking, type BookingData } from '@/lib/firebase/bookings';

const AMMAN_AREAS = {
  'غرب عمّان': [
    'عبدون',
    'دابوق',
    'خلدا',
    'تلاع العلي',
    'الرابية',
    'الصويفية',
    'أم أذينة',
    'أم السماق',
    'دير غبار',
    'مرج الحمام',
    'ناعور',
  ],
  'شمال عمّان': ['الجبيهة', 'صويلح', 'أبو نصير', 'ضاحية الرشيد', 'شفا بدران'],
  'وسط عمّان': ['وسط البلد', 'جبل عمّان', 'جبل اللويبدة', 'العبدلي'],
  'شرق عمّان': ['ماركا', 'النزهة', 'الأشرفية', 'القويسمة'],
  'جنوب عمّان': ['المقابلين', 'خريبة السوق', 'سحاب'],
};

export default function BookPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    package: '',
  });
  const [alert, setAlert] = useState({ show: false, message: '', type: 'info' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const packageParam = urlParams.get('package');

      if (packageParam) {
        setFormData(prev => ({ ...prev, package: packageParam }));
        setIsOpen(true);

        setTimeout(() => {
          const bookPanel = document.getElementById('book-panel');
          if (bookPanel) {
            bookPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      }
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setAlert({ show: true, message: 'يتم الإرسال…', type: 'info' });

    const { name, phone, location } = formData;

    if (name.trim().length < 3) {
      setAlert({
        show: true,
        message: 'الاسم مطلوب (3 أحرف على الأقل).',
        type: 'error',
      });
      return;
    }

    if (!/^07[789]\d{7}$/.test(phone)) {
      setAlert({
        show: true,
        message: 'رقم الهاتف يجب أن يبدأ بـ 077/078/079 وأن يكون 10 أرقام.',
        type: 'error',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const bookingData: BookingData = {
        name: name.trim(),
        phone: phone.trim(),
        address: location.trim(),
        packageName: formData.package.trim() || 'غير محدد',
        date: new Date().toISOString().split('T')[0],
        time: new Date().toLocaleTimeString('ar-JO'),
        notes: '',
      };

      const result = await createBooking(bookingData);

      if (result.success) {
        setAlert({
          show: true,
          message: '✅ تم الإرسال بنجاح! سنتواصل معك قريبًا.',
          type: 'success',
        });

        setFormData({ name: '', phone: '', location: '', package: '' });

        const msg = `طلب حجز:\nالاسم: ${name}\nالهاتف: ${phone}\nالمنطقة: ${location || '-'}\nالبكج: ${formData.package || '-'}`;
        window.open(
          `https://wa.me/962779667168?text=${encodeURIComponent(msg)}`,
          '_blank'
        );
      } else {
        throw new Error(result.error || 'حدث خطأ');
      }
    } catch (error) {
      console.error(error);
      setAlert({
        show: true,
        message: 'حدث خطأ أثناء الإرسال.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="book-panel"
      className="relative max-w-[820px] mx-auto px-4 grid gap-3.5 justify-center items-start py-4"
    >
      <div
        className="bp-inner w-full max-w-[680px] rounded-2xl px-5 py-4 flex gap-3.5 items-center justify-between shadow-lg backdrop-blur-md"
        style={{
          background: 'rgba(255,255,255,0.85)',
          border: '1px solid rgba(255,255,255,0.6)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
        }}
      >
        <div className="bp-badge inline-flex items-center gap-2 bg-[var(--muted)] border border-[rgba(0,0,0,0.06)] rounded-full px-3 py-2 font-extrabold text-[var(--primary-dark)] shadow-md">
          <Image
            src="/assets/images/logo.png"
            alt=""
            width={28}
            height={28}
            className="block"
          />
          <span>سحب منزلي</span>
        </div>

        <div className="bp-copy flex flex-col gap-0.5 min-w-0 hidden sm:flex">
          <strong className="font-black text-[#17392d]">مختبرك لعندك</strong>
          <span className="text-[#486358] text-[13px]">
            موعد سريع • أدوات معقمة
          </span>
        </div>

        <button
          className="btn transition-all duration-200 hover:scale-105 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          style={{
            background: isOpen ? 'var(--primary-dark)' : 'var(--accent)',
            boxShadow: '0 4px 16px rgba(115,160,67,.35)',
          }}
        >
          {isOpen ? 'إغلاق' : 'احجز الآن'}
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className={`book-form w-full max-w-[680px] rounded-2xl p-6 transition-all duration-400 backdrop-blur-md ${
          isOpen
            ? 'opacity-100 translate-y-0 scale-100 mt-4 h-auto overflow-visible'
            : 'opacity-0 translate-y-[-10px] scale-95 h-0 overflow-hidden mt-0'
        }`}
        style={{
          background: 'rgba(255,255,255,0.95)',
          border: '1px solid rgba(0,0,0,0.08)',
          boxShadow: isOpen ? '0 12px 40px rgba(0,0,0,0.1)' : 'none',
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input
            className="input"
            name="name"
            placeholder="الاسم الكامل *"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            className="input"
            name="phone"
            placeholder="رقم الهاتف (077/078/079) *"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <select
            className="input"
            name="location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            required
          >
            <option value="">اختر المنطقة…</option>
            {Object.entries(AMMAN_AREAS).map(([group, areas]) => (
              <optgroup key={group} label={group}>
                {areas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </optgroup>
            ))}
            <option value="أخرى">أخرى</option>
          </select>
          <select
            className="input"
            name="package"
            value={formData.package}
            onChange={(e) => setFormData({ ...formData, package: e.target.value })}
          >
            <option value="">اختر البكج (اختياري)</option>
<option>باقة هشاشة العظام</option>
<option>باقة مرضى القلب والضغط</option>
<option>باقة متابعة السكري</option>
<option>باقة الرشاقة والدايت</option>
<option>باقة اضطرابات الدورة (للنساء)</option>
<option>باقة متابعة الحمل</option>
<option>باقة الفحص الشامل (CheckUp)</option>
<option>باقة صحة الرجال</option>
<option>باقة الفيتامينات والمعادن</option>

          </select>
        </div>

        {alert.show && (
          <div
            className={`alert mt-4 ${alert.type === 'success' ? 'success' : ''}`}
          >
            {alert.message}
          </div>
        )}

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="btn transition-all duration-200 hover:scale-105 cursor-pointer min-w-[200px]"
            disabled={isSubmitting}
            style={{
              background: isSubmitting ? '#94a3b8' : 'var(--accent)',
              boxShadow: '0 8px 24px rgba(115,160,67,.4)',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
            }}
          >
            {isSubmitting ? 'جارٍ الإرسال…' : 'احجز الآن'}
          </button>
        </div>
      </form>
    </div>
  );
}
