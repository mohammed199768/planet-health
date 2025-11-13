'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import { createBooking, type BookingData } from '@/lib/firebase/bookings';

export default function DoctorBookPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    doctorType: '',
  });
  const [alert, setAlert] = useState({ show: false, message: '', type: 'info' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setAlert({ show: true, message: 'يتم الإرسال…', type: 'info' });

    const { name, phone, location, doctorType } = formData;

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

    if (!location.trim()) {
      setAlert({
        show: true,
        message: 'المنطقة/العنوان مطلوبة.',
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
        packageName: 'حجز طبيب منزلي',
        date: new Date().toISOString().split('T')[0],
        time: new Date().toLocaleTimeString('ar-JO'),
        notes: doctorType ? `نوع الطبيب المطلوب: ${doctorType}` : 'حجز طبيب منزلي',
      };

      const result = await createBooking(bookingData);

      if (result.success) {
        setAlert({
          show: true,
          message: '✅ تم إرسال طلب حجز الطبيب بنجاح! سنتواصل معك قريبًا.',
          type: 'success',
        });

        const msg = `طلب حجز طبيب منزلي:
الاسم: ${name}
الهاتف: ${phone}
العنوان: ${location || '-'}
نوع الطبيب: ${doctorType || '-'}
`;

        window.open(
          `https://wa.me/962779667168?text=${encodeURIComponent(msg)}`,
          '_blank'
        );

        setFormData({ name: '', phone: '', location: '', doctorType: '' });
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
      id="doctor-book-panel"
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
<div className="bp-badge inline-flex items-center bg-[var(--muted)] border border-[rgba(0,0,0,0.06)] rounded-full px-4 py-2 font-extrabold text-[var(--primary-dark)] shadow-md whitespace-nowrap gap-1.5">
  <Image
    src="/assets/images/logo.png"
    alt="شعار"
    width={28}
    height={28}
    className="block shrink-0"
  />
  <span className="pl-3 pr-1 text-[14px] md:text-[15px] lg:text-[16px]">
    حجز طبيب
  </span>
</div>

        <div className="bp-copy flex flex-col gap-0.5 min-w-0 hidden sm:flex">
          <strong className="font-black text-[#17392d]">طبيب لعندك</strong>
          <span className="text-[#486358] text-[13px]">
            كشف منزلي • رعاية طبية في بيتك
          </span>
        </div>

        <button
  className="btn whitespace-nowrap px-5 py-2 text-sm md:text-base min-w-[140px] flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          style={{
            background: isOpen ? 'var(--primary-dark)' : 'var(--accent)',
            boxShadow: '0 4px 16px rgba(115,160,67,.35)',
          }}
        >
          {isOpen ? 'إغلاق' : 'احجز طبيب'}
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
          <input
            className="input"
            name="location"
            placeholder="العنوان / المنطقة بالتفصيل *"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            required
          />

          <select
            className="input"
            name="doctorType"
            value={formData.doctorType}
            onChange={(e) => setFormData({ ...formData, doctorType: e.target.value })}
          >
            <option value="">نوع الطبيب (اختياري)</option>
            <option value="طبيب عام">طبيب عام</option>
            <option value="طبيب باطني">طبيب باطني</option>
            <option value="طبيب أطفال">طبيب أطفال</option>
            <option value="طبيب قلب">طبيب قلب</option>
            <option value="طبيب عظام">طبيب عظام</option>
            <option value="طبيب جلدية">طبيب جلدية</option>
          </select>
        </div>

        {alert.show && (
          <div
            className={`alert mt-4 ${
              alert.type === 'success' ? 'success' : ''
            }`}
          >
            {alert.message}
          </div>
        )}

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="btn transition-all duration-200 hover:scale-105 cursor-pointer min-w-[220px]"
            disabled={isSubmitting}
            style={{
              background: isSubmitting ? '#94a3b8' : 'var(--accent)',
              boxShadow: '0 8px 24px rgba(115,160,67,.4)',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
            }}
          >
            {isSubmitting ? 'جارٍ الإرسال…' : 'تأكيد حجز الطبيب'}
          </button>
        </div>
      </form>
    </div>
  );
}
