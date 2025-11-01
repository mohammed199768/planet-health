# دليل تطبيق Migration على Supabase

## الطريقة الأولى: عبر MCP Tools (الموصى بها)

إذا كانت MCP tools متاحة:

```typescript
// استخدم mcp__supabase__apply_migration
// مع محتوى ملف: supabase/migrations/20240101000000_create_bookings_table.sql
```

## الطريقة الثانية: عبر SQL Editor يدويًا

1. اذهب إلى [supabase.com](https://supabase.com)
2. افتح مشروعك
3. اذهب إلى **SQL Editor** من القائمة اليسرى
4. انقر **New Query**
5. انسخ والصق المحتوى التالي:

```sql
/*
  # إنشاء جدول الحجوزات (Bookings)
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (length(name) >= 3),
  phone text NOT NULL CHECK (phone ~ '^07[789][0-9]{7}$'),
  location text NOT NULL,
  package text,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create booking"
  ON bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update bookings"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS bookings_created_at_idx ON bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS bookings_status_idx ON bookings(status);
CREATE INDEX IF NOT EXISTS bookings_phone_idx ON bookings(phone);
```

6. انقر **Run** أو اضغط `Ctrl+Enter`

## التحقق من نجاح Migration

1. اذهب إلى **Table Editor**
2. يجب أن ترى جدول `bookings` مع الأعمدة التالية:
   - `id` (uuid)
   - `name` (text)
   - `phone` (text)
   - `location` (text)
   - `package` (text, nullable)
   - `status` (text)
   - `created_at` (timestamptz)

3. تحقق من RLS:
   - اذهب إلى **Authentication > Policies**
   - يجب أن ترى 3 policies على جدول `bookings`

## الحصول على مفاتيح API

بعد إنشاء الجدول:

1. اذهب إلى **Project Settings** (⚙️ أسفل اليسار)
2. انقر **API**
3. انسخ:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

4. أضفها في `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## اختبار الاتصال

```bash
npm run dev
```

1. افتح الموقع
2. اضغط "احجز الآن"
3. املأ النموذج
4. اضغط إرسال
5. تحقق من **Table Editor** في Supabase - يجب أن ترى الحجز الجديد

## استكشاف الأخطاء

### "relation bookings does not exist"
- تأكد من تطبيق migration كاملًا

### "new row violates row-level security policy"
- تحقق من أن RLS policies موجودة
- تحقق من الأمر `ALTER TABLE bookings ENABLE ROW LEVEL SECURITY`

### "Failed to fetch"
- تحقق من `.env.local`
- تأكد من أن المفاتيح صحيحة
- أعد تشغيل `npm run dev` بعد تغيير `.env.local`
