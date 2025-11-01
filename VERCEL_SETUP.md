# خطوات إعداد Vercel - دليل سريع

## 1. إضافة Environment Variables

### اذهب إلى:
```
Vercel Dashboard → مشروعك → Settings → Environment Variables
```

### أضف هذه المتغيرات واحداً تلو الآخر:

| اسم المتغير | القيمة |
|------------|--------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | `AIzaSyDxBddPLX3JYEvX0jzU9qE4Hku7zY_7Z-I` |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | `planet-health-jo.firebaseapp.com` |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | `planet-health-jo` |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | `planet-health-jo.appspot.com` |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | `892627508279` |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | `1:892627508279:web:e0a71a7fee252b94b073b2` |

### لكل متغير:
1. اضغط "Add New"
2. Name: اسم المتغير
3. Value: القيمة
4. Environment: اختر **All** (Production, Preview, Development)
5. اضغط "Save"

---

## 2. إعادة النشر (Redeploy)

بعد إضافة جميع المتغيرات:

### الطريقة الأولى - من Vercel Dashboard:
1. اذهب إلى Deployments
2. اختر آخر Deployment
3. اضغط على الثلاث نقاط (⋯)
4. اختر "Redeploy"
5. انتظر اكتمال البناء

### الطريقة الثانية - من Git:
```bash
git commit --allow-empty -m "chore: trigger Vercel redeploy"
git push origin main
```

---

## 3. التحقق من النجاح

بعد اكتمال البناء:

1. افتح رابط الموقع على Vercel
2. اضغط F12 لفتح Developer Console
3. اذهب إلى تبويب Console
4. تأكد من عدم وجود أخطاء Firebase
5. جرّب ميزة الحجز في الصفحة الرئيسية

### علامات النجاح ✅
- لا يظهر خطأ `auth/invalid-api-key`
- لا يظهر React Error #423
- نموذج الحجز يعمل بدون مشاكل

---

## 4. إعدادات Firebase Console

### أضف النطاقات المصرح بها:

1. اذهب إلى [Firebase Console](https://console.firebase.google.com)
2. اختر مشروع `planet-health-jo`
3. Authentication → Settings → Authorized domains
4. أضف:
   - `localhost`
   - رابط Vercel الخاص بك (مثل: `planet-health.vercel.app`)
   - أي domain مخصص لديك

---

## 5. استكشاف الأخطاء

### إذا ظهر خطأ بعد Redeploy:

#### 1. تحقق من Environment Variables:
- هل أضفت جميع المتغيرات؟
- هل القيم صحيحة بدون مسافات زائدة؟
- هل اخترت "All" للـ Environment؟

#### 2. تحقق من Vercel Logs:
```
Vercel Dashboard → Deployments → آخر deployment → View Function Logs
```

#### 3. تحقق من Firebase Console:
```
Firebase Console → Authentication → Settings → Authorized domains
```
تأكد من إضافة domain الـ Vercel

#### 4. امسح الكاش:
```
Vercel Dashboard → Settings → Clear Cache → Redeploy
```

---

## 6. كوماندات Git للرفع

```bash
# إضافة جميع التغييرات
git add .

# عمل commit
git commit -m "fix: Firebase configuration with correct APP_ID"

# رفع إلى GitHub
git push origin main

# Vercel سيبدأ البناء تلقائياً
```

---

## ملاحظات مهمة

⚠️ **لا ترفع ملف `.env` إلى GitHub أبداً**

✅ استخدم Environment Variables في Vercel Dashboard فقط

✅ ملف `.vercelignore` تم إنشاؤه لحمايتك من رفع `.env` بالخطأ

✅ القيم في الملف المحلي `.env` يجب أن تطابق القيم في Vercel تماماً
