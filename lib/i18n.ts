// lib/i18n.ts
export type Lang = 'ar' | 'en';

export const translations: Record<Lang, Record<string, string>> = {
  ar: {
    // Navbar
    'nav.brand': 'Curevie',
    'nav.home': 'الرئيسية',
    'nav.packages': 'الباقات',
    'nav.blog': 'المدونة',
    'nav.about': 'من نحن',
    'nav.contact': 'تواصل',
    'nav.bookNow': 'احجز الآن',

    // Hero
    'hero.badge': 'Curevie  المختبر لعندك',
    'hero.title.line1': 'خدمات طبية',
    'hero.title.highlight': ' وفحوصات مخبرية ',
    'hero.title.line2': 'من منزلك',
    'hero.description':
      'فريق طبي مختص يصل لعندك في منزلك بمواعيد مرنه.اجهزة معقمة ونتائج موثوقة ومضمونة . نتيجتكم على الواتساب  اريحلكم . ويمكن حجز طبيب منزلي لجميع الاعمار والحلات.',
    'hero.btn.blood': 'احجز فحوصاتك من منزلك',
    'hero.btn.doctor': 'احجز طبيب منزلي',
    'hero.btn.packages': 'تعرّف على الباقات',
    'hero.bullet.1': '✅ مختبرات معتمدة',
    'hero.bullet.2': '🕒 حجز بأقل من دقيقة',
    'hero.bullet.3': '📍 عمّان — وضواحيها',

    // BookPanel (المختبر)
    'book.badge': 'حجز المختبر',
    'book.title': 'مختبرك من بيتك ',
    'book.subtitle': 'موعد سريع • أدوات معقمة',
    'book.name': 'الاسم الكامل *',
    'book.phone': 'رقم الهاتف (077/078/079) *',
    'book.location': 'اختر المنطقة…',
    'book.locationOther': 'أخرى',
    'book.package': 'اختر البكج (اختياري)',
    'book.package.unknown': 'غير محدد',

    'book.alert.sending': 'يتم الإرسال…',
    'book.error.name': 'الاسم مطلوب (3 أحرف على الأقل).',
    'book.error.phone': 'رقم الهاتف يجب أن يبدأ بـ 077/078/079 وأن يكون 10 أرقام.',
    'book.error.submit': 'حدث خطأ أثناء الإرسال.',
    'book.success': '✅ تم الإرسال بنجاح! سنتواصل معك قريبًا.',

    'book.btn.open': 'احجز الآن',
    'book.btn.close': 'إغلاق',
    'book.btn.submit': 'احجز الآن',
    'book.btn.sending': 'جارٍ الإرسال…',

    'book.wa.title': 'طلب حجز مختبر:',
    'book.wa.name': 'الاسم',
    'book.wa.phone': 'الهاتف',
    'book.wa.area': 'المنطقة',
    'book.wa.package': 'البكج',

    // DoctorBookPanel (حجز طبيب)
    'doctor.badge': 'حجز طبيب',
    'doctor.title': 'طبيب لعندك',
    'doctor.subtitle': 'كشف منزلي • رعاية طبية في بيتك',

    'doctor.btn.open': 'احجز طبيب',
    'doctor.btn.close': 'إغلاق',
    'doctor.btn.submit': 'تأكيد حجز الطبيب',
    'doctor.btn.sending': 'جارٍ الإرسال…',

    'doctor.form.name': 'الاسم الكامل *',
    'doctor.form.phone': 'رقم الهاتف (077/078/079) *',
    'doctor.form.location': 'اختر المنطقة…',
    'doctor.form.locationOther': 'أخرى',
    'doctor.form.typePlaceholder': 'الاجراء الطبي ',
    'doctor.form.type.general': 'طبيب عام',
    'doctor.form.type.internal': 'طبيب باطني',
    'doctor.form.type.pediatric': 'طبيب أطفال',
    'doctor.form.type.cardio': 'طبيب قلب',
    'doctor.form.type.orthopedic': 'طبيب عظام',
    'doctor.form.type.derma': 'طبيب جلدية',

    'doctor.alert.sending': 'يتم الإرسال…',
    'doctor.error.name': 'الاسم مطلوب (3 أحرف على الأقل).',
    'doctor.error.phone': 'رقم الهاتف يجب أن يبدأ بـ 077/078/079 وأن يكون 10 أرقام.',
    'doctor.error.location': 'المنطقة/العنوان مطلوبة.',
    'doctor.error.submit': 'حدث خطأ أثناء الإرسال.',
    'doctor.success': '✅ تم إرسال طلب حجز الطبيب بنجاح! سنتواصل معك قريبًا.',

    'doctor.booking.packageName': 'حجز طبيب منزلي',
    'doctor.booking.notesPrefix': 'نوع الطبيب المطلوب:',
    'doctor.booking.notesFallback': 'حجز طبيب منزلي',

    'doctor.wa.title': 'طلب حجز طبيب منزلي:',
    'doctor.wa.name': 'الاسم',
    'doctor.wa.phone': 'الهاتف',
    'doctor.wa.address': 'العنوان',
    'doctor.wa.type': 'نوع الطبيب',

    // Footer
    'footer.description': 'مبادرة اردنية رائدة لتقديم الخدمات الطبية والمخبرية الى باب منزلك .نعمل مع افضل المختبرات المعتمدة لضمان افضل النتائج ',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contact': 'تواصل معنا',
    'footer.contactLink': 'تواصل معنا',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.tagline': 'خدمات طبية و مخبرية منزلية معتمدة في الاردن',

    // Blog modal
    'common.close': 'إغلاق',
    'blog.share.title': 'شارك هذا المقال',
    'blog.share.copyLink': 'نسخ الرابط',
    'blog.share.copied': 'تم نسخ رابط المقال!',
    'blog.author.defaultBio': 'كاتب ومتخصص في المجال الطبي',

    // Packages
    'packages.featured.title': ' الاكثر مبيعا ',
    'packages.featured.viewAll': 'مشاهدة كل الباقات',
    'packages.card.badge': 'باقة طبية',
    'packages.card.testsUnit': 'فحص مشمول',
    'packages.card.bookNow': 'احجز الآن',
    'packages.card.details': 'التفاصيل',
    'packages.modal.testsTitle': 'الفحوصات المشمولة',
    'packages.modal.ctaText': 'احجز الآن واحصل على نتائج دقيقة وسريعة من منزلك. فريقنا المحترف جاهز لخدمتك.',
    'packages.modal.btnBook': 'احجز هذه الباقة الآن',

    // Testimonials
    'testimonials.title': 'آراء عملائنا',

    // About
    'about.hero.title': 'من نحن',
    'about.hero.subtitle': 'مبادرة اردنية رائدة لتقديم الخدمات الطبية والمخبرية الى باب منزلك',
    'about.hero.tagline': 'دقة,اتقان, ثقة, خصوصية',
    'about.stats.visitors': 'الزوار',
    'about.stats.clients': 'العملاء',
    'about.stats.tests': 'الفحوصات',
    'about.why.title': 'لماذا Curevie؟',
    'about.why.subtitle': 'نجمع بين الاحترافية الطبية وسهولة الوصول لنقدم لك تجربة فريدة',
    'about.features.accuracy.title': 'دقة عالية',
    'about.features.accuracy.desc': 'نعمل مع افضل الاطباء و المختبرات الطبية  لضمان نتائج دقيقة وموثوقة',
    'about.features.privacy.title': 'خصوصية تامة',
    'about.features.privacy.desc': 'التحفظ على المعلومات الشخصية و الطبية بسرية عالية',
    'about.features.homeService.title': 'خدمة منزلية',
    'about.features.homeService.desc': 'وصول فريق مختص في وقتكم المناسب ',
    'about.features.fastResults.title': 'نتائج سريعة',
    'about.features.fastResults.desc': 'نتائج دقيقة في وقت قياسي عبر واتساب أو البريد',
    'about.mission.title': 'رسالتنا',
    'about.mission.text':
      'أن نجعل الفحص الطبي أمرًا بسيطًا ومتاحًا للجميع، مع تجربة ودّية تبدأ من رسالة واتساب وتنتهي بنتائج موثوقة بين يديك. نؤمن بأن الصحة حق للجميع ونسعى لتوفير خدمات طبية عالية الجودة في  منزلك.',
    'about.partners.title': 'شراكائنا',
    'about.partners.text':
      'نعمل بالتعاون مع أفضل الاطباء و المختبرات المرخّصة والمعتمدة في الأردن لضمان أعلى معايير الجودة والدقة. شراكاتنا الاستراتيجية تضمن لك الحصول على نتائج موثوقة وخدمة احترافية في كل مرة.',
    'about.values.title': 'قيمنا ومبادئنا',
    'about.values.1': 'الدقّة قبل السرعة',
    'about.values.2': 'احترام خصوصية المريض',
    'about.values.3': 'تبسيط المعلومة الطبية',
    'about.values.4': 'المتابعة بعد الفحص ',
    'about.values.5': 'التطوير المستمر',
    'about.values.6': 'الشفافية في التعامل',
    'about.contact.title': 'تواصل معنا',

    // Blog page
    'blog.page.title': 'المدونة الطبية',
    'blog.page.subtitle': 'مقالات ونصائح طبية موثوقة لحياة صحية أفضل',
    'blog.card.readMore': 'اقرأ المقال كاملاً',
    'blog.empty.title': 'قريباً',
    'blog.empty.text': 'نعمل على إضافة مقالات طبية مفيدة لك',

    // Contact page
    'contact.hero.title': 'تواصل معنا',
    'contact.hero.subtitle': 'نحن هنا للإجابة على استفساراتك ومساعدتك',
    'contact.methods.phone.title': 'الهاتف',
    'contact.methods.phone.value': '0779667168',
    'contact.methods.email.title': 'البريد الإلكتروني',
    'contact.methods.email.value': 'contact@curevie.net',
    'contact.methods.location.title': 'الموقع',
    'contact.methods.location.value': 'الأردن - عمّان',
    'contact.form.title': 'راسلنا',
    'contact.form.description':
      'أخبرنا بما تريد: حجز، استفسار، شكوى، اقتراح، أو تعاون. سنرد عليك في أقرب وقت.',
    'contact.form.name': 'الاسم الكامل *',
    'contact.form.namePlaceholder': 'أدخل اسمك الكامل',
    'contact.form.email': 'البريد الإلكتروني (اختياري)',
    'contact.form.emailPlaceholder': 'example@email.com',
    'contact.form.phone': 'رقم الهاتف *',
    'contact.form.phonePlaceholder': '077/078/079 (10 أرقام)',
    'contact.form.subject': 'الموضوع *',
    'contact.form.subjectPlaceholder': 'حجز باقة / استفسار / شكوى / اقتراح',
    'contact.form.message': 'رسالتك *',
    'contact.form.messagePlaceholder': 'اكتب رسالتك هنا...',
    'contact.form.privacy': '🔒 نحترم خصوصيتك ولن نشارك بياناتك مع أي طرف ثالث',
    'contact.form.sending': 'جارٍ الإرسال...',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.alert.sending': 'يتم الإرسال…',
    'contact.alert.success': '✅ تم الإرسال بنجاح! سنتواصل معك قريبًا.',
    'contact.alert.error': 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.',
    'contact.error.name': 'الاسم مطلوب (3 أحرف على الأقل).',
    'contact.error.phone': 'رقم الهاتف يجب أن يبدأ بـ 077/078/079 وأن يكون 10 أرقام.',
    'contact.hours.title': 'ساعات العمل',
    'contact.hours.weekdays': 'السبت - الخميس',
    'contact.hours.weekdaysTime': '8 صباحاً - 10 مساءً',
    'contact.hours.friday': 'الجمعة',
    'contact.hours.fridayTime': '9 صباحاً - 9 مساءً',
    'contact.hours.note': '💡 المواعيد الخاصة متاحة بالتنسيق المسبق',
    'contact.follow.title': 'تابعنا على',
    'contact.follow.subtitle': 'للحصول على آخر التحديثات والعروض',
    'contact.quick.title': 'تواصل سريع؟',
    'contact.quick.subtitle': 'راسلنا مباشرة على واتساب للرد الفوري',
    'contact.quick.btn': 'فتح واتساب',

    'packages.titleAll': 'جميع الباقات',
    'packages.search.placeholder': 'ابحث عن باقة…',
    'packages.search.noResults': 'لم يتم العثور على باقات مطابقة.',
  },

  en: {
    // Navbar
    'nav.brand': 'Curevie',
    'nav.home': 'Home',
    'nav.packages': 'Packages',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Book Now',

    // Hero
    'hero.badge': 'Curevie  Home Lab Service',
    'hero.title.line1': 'Medical tests',
    'hero.title.highlight': 'and laboratory services',
    'hero.title.line2': 'from your home',
    'hero.description':
      'A specialised medical team reaches your home in Amman at flexible times, using sterilised equipment and delivering reliable results. Your results arrive on WhatsApp for your convenience. You may also book a home doctor visit for all ages and conditions.',
    'hero.btn.blood': 'Book your home tests',
    'hero.btn.doctor': 'Book a home doctor',
    'hero.btn.packages': 'View packages',
    'hero.bullet.1': '✅ Accredited laboratories',
    'hero.bullet.2': '🕒 Book in under a minute',
    'hero.bullet.3': '📍 Amman and surrounding areas',

    // BookPanel (Lab)
    'book.badge': 'Lab Booking',
    'book.title': 'Your Home Laboratory',
    'book.subtitle': 'Quick appointments • Sterile equipment',
    'book.name': 'Full name *',
    'book.phone': 'Phone number (077/078/079) *',
    'book.location': 'Select area…',
    'book.locationOther': 'Other',
    'book.package': 'Choose a package (optional)',
    'book.package.unknown': 'Not specified',

    'book.alert.sending': 'Sending…',
    'book.error.name': 'A valid name is required (minimum 3 characters).',
    'book.error.phone':
      'Phone number must begin with 077/078/079 and contain 10 digits.',
    'book.error.submit': 'An error occurred while sending.',
    'book.success': '✅ Your request has been sent successfully! We will contact you shortly.',

    'book.btn.open': 'Book now',
    'book.btn.close': 'Close',
    'book.btn.submit': 'Book now',
    'book.btn.sending': 'Sending…',

    'book.wa.title': 'Lab booking request:',
    'book.wa.name': 'Name',
    'book.wa.phone': 'Phone',
    'book.wa.area': 'Area',
    'book.wa.package': 'Package',

    // DoctorBookPanel (Doctor)
    'doctor.badge': 'Doctor Booking',
    'doctor.title': 'Doctor to Your Home',
    'doctor.subtitle': 'Home visit • Medical care at your doorstep',

    'doctor.btn.open': 'Book a doctor',
    'doctor.btn.close': 'Close',
    'doctor.btn.submit': 'Confirm doctor booking',
    'doctor.btn.sending': 'Sending…',

    'doctor.form.name': 'Full name *',
    'doctor.form.phone': 'Phone number (077/078/079) *',
    'doctor.form.location': 'Select area…',
    'doctor.form.locationOther': 'Other',
    'doctor.form.typePlaceholder': 'Medical procedure',
    'doctor.form.type.general': 'General practitioner',
    'doctor.form.type.internal': 'Internal medicine',
    'doctor.form.type.pediatric': 'Paediatrician',
    'doctor.form.type.cardio': 'Cardiologist',
    'doctor.form.type.orthopedic': 'Orthopaedic doctor',
    'doctor.form.type.derma': 'Dermatologist',

    'doctor.alert.sending': 'Sending…',
    'doctor.error.name': 'A valid name is required (minimum 3 characters).',
    'doctor.error.phone':
      'Phone number must begin with 077/078/079 and contain 10 digits.',
    'doctor.error.location': 'Area or address is required.',
    'doctor.error.submit': 'An error occurred while sending.',
    'doctor.success': '✅ The doctor booking request has been sent successfully! We will contact you shortly.',

    'doctor.booking.packageName': 'Home doctor booking',
    'doctor.booking.notesPrefix': 'Requested speciality:',
    'doctor.booking.notesFallback': 'Home doctor visit',

    'doctor.wa.title': 'Home doctor booking request:',
    'doctor.wa.name': 'Name',
    'doctor.wa.phone': 'Phone',
    'doctor.wa.address': 'Address',
    'doctor.wa.type': 'Doctor type',

    // Footer
    'footer.description':
      'A leading Jordanian initiative providing home medical and laboratory services with high accuracy and complete privacy. We work with accredited laboratories to ensure the highest quality of results.',
    'footer.quickLinks': 'Quick links',
    'footer.contact': 'Contact us',
    'footer.contactLink': 'Contact us',
    'footer.rights': 'All rights reserved.',
    'footer.tagline': 'Accredited home medical laboratory services in Jordan',

    // Blog modal
    'common.close': 'Close',
    'blog.share.title': 'Share this article',
    'blog.share.copyLink': 'Copy link',
    'blog.share.copied': 'Article link copied!',
    'blog.author.defaultBio': 'Writer and medical specialist',

    // Packages
    'packages.featured.title': 'Top-selling packages',
    'packages.featured.viewAll': 'View all packages',
    'packages.card.badge': 'Medical package',
    'packages.card.testsUnit': 'tests included',
    'packages.card.bookNow': 'Book now',
    'packages.card.details': 'Details',
    'packages.modal.testsTitle': 'Included tests',
    'packages.modal.ctaText':
      'Book now to receive fast, accurate results from the comfort of your home. Our professional team is ready to serve you.',
    'packages.modal.btnBook': 'Book this package',

    // Testimonials
    'testimonials.title': 'Client testimonials',

    // About
    'about.hero.title': 'About us',
    'about.hero.subtitle':
      'A pioneering Jordanian initiative offering medical and laboratory services right to your doorstep',
    'about.hero.tagline': 'Accuracy, excellence, trust, confidentiality',
    'about.stats.visitors': 'Visitors',
    'about.stats.clients': 'Clients',
    'about.stats.tests': 'Tests',
    'about.why.title': 'Why Curevie?',
    'about.why.subtitle':
      'We combine medical expertise with accessibility to offer a seamless experience',
    'about.features.accuracy.title': 'High accuracy',
    'about.features.accuracy.desc':
      'We work with leading accredited laboratories to ensure precise and trustworthy results',
    'about.features.privacy.title': 'Complete privacy',
    'about.features.privacy.desc':
      'Your personal and medical information is handled with strict confidentiality',
    'about.features.homeService.title': 'Home service',
    'about.features.homeService.desc':
      'A trained team visits your home at the time that suits you best',
    'about.features.fastResults.title': 'Fast results',
    'about.features.fastResults.desc':
      'Accurate results delivered promptly via WhatsApp or email',
    'about.mission.title': 'Our mission',
    'about.mission.text':
      'To make medical testing simple and accessible for everyone, with a friendly process that begins with a WhatsApp message and ends with reliable results in your hands. We believe health is a right for all, and we are committed to providing high-quality services in the comfort of your home.',
    'about.partners.title': 'Our partners',
    'about.partners.text':
      'We work with the finest licensed and accredited laboratories across Jordan to ensure the highest levels of quality and accuracy. Our partnerships ensure consistent, professional service every time.',
    'about.values.title': 'Our values and principles',
    'about.values.1': 'Accuracy over speed',
    'about.values.2': 'Respect for patient privacy',
    'about.values.3': 'Simplifying medical information',
    'about.values.4': 'Follow-up after testing',
    'about.values.5': 'Continuous improvement',
    'about.values.6': 'Transparency in communication',
    'about.contact.title': 'Contact us',

    // Blog page
    'blog.page.title': 'Medical blog',
    'blog.page.subtitle': 'Trusted medical articles and guidance for a healthier life',
    'blog.card.readMore': 'Read full article',
    'blog.empty.title': 'Coming soon',
    'blog.empty.text': 'We are preparing valuable medical content for you',

    // Contact page
    'contact.hero.title': 'Contact us',
    'contact.hero.subtitle': 'We are here to support you and answer your enquiries',
    'contact.methods.phone.title': 'Phone',
    'contact.methods.phone.value': '0779667168',
    'contact.methods.email.title': 'Email',
    'contact.methods.email.value': 'contact@curevie.net',
    'contact.methods.location.title': 'Location',
    'contact.methods.location.value': 'Jordan — Amman',

    'contact.form.title': 'Send us a message',
    'contact.form.description':
      'Tell us what you need: booking, enquiry, complaint, suggestion, or collaboration. We will respond as soon as possible.',
    'contact.form.name': 'Full name *',
    'contact.form.namePlaceholder': 'Enter your full name',
    'contact.form.email': 'Email (optional)',
    'contact.form.emailPlaceholder': 'example@email.com',
    'contact.form.phone': 'Phone number *',
    'contact.form.phonePlaceholder': '077/078/079 (10 digits)',
    'contact.form.subject': 'Subject *',
    'contact.form.subjectPlaceholder':
      'Package booking / enquiry / complaint / suggestion',
    'contact.form.message': 'Your message *',
    'contact.form.messagePlaceholder': 'Write your message…',
    'contact.form.privacy':
      '🔒 We respect your privacy and never share your information with any third party',

    'contact.form.sending': 'Sending…',
    'contact.form.submit': 'Send message',

    'contact.alert.sending': 'Sending…',
    'contact.alert.success': '✅ Message sent successfully! We will contact you shortly.',
    'contact.alert.error': 'An error occurred while sending. Please try again.',

    'contact.error.name': 'A valid name is required (minimum 3 characters).',
    'contact.error.phone':
      'Phone number must begin with 077/078/079 and contain 10 digits.',

    'contact.hours.title': 'Working hours',
    'contact.hours.weekdays': 'Saturday – Thursday',
    'contact.hours.weekdaysTime': '8:00 AM – 10:00 PM',
    'contact.hours.friday': 'Friday',
    'contact.hours.fridayTime': '9:00 AM – 9:00 PM',
    'contact.hours.note':
      '💡 Special appointments are available upon prior arrangement',

    'contact.follow.title': 'Follow us',
    'contact.follow.subtitle': 'Stay updated with the latest news and offers',

    'contact.quick.title': 'Need quick assistance?',
    'contact.quick.subtitle': 'Message us directly on WhatsApp for an instant response',
    'contact.quick.btn': 'Open WhatsApp',

    'packages.titleAll': 'All packages',
    'packages.search.placeholder': 'Search for a package…',
    'packages.search.noResults': 'No matching packages found.',
  }
};
