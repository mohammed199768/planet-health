// lib/firebase/analytics.ts
'use client';

import { db } from './config'; // عدّل المسار حسب ملف firebase عندك
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function getSessionId() {
  if (typeof window === 'undefined') return null;
  const KEY = 'ph_session_id';
  let id = window.localStorage.getItem(KEY);
  if (!id) {
    id = crypto.randomUUID();
    window.localStorage.setItem(KEY, id);
  }
  return id;
}

function getUtmParams() {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source'),
    utm_medium: params.get('utm_medium'),
    utm_campaign: params.get('utm_campaign'),
    utm_term: params.get('utm_term'),
    utm_content: params.get('utm_content'),
  };
}

export async function trackEvent(
  eventType: string,
  data: Record<string, any> = {}
) {
  try {
    const isBrowser = typeof window !== 'undefined';

    const referrer = isBrowser ? document.referrer || null : null;
    const userAgent = isBrowser ? navigator.userAgent : null;
    const path = isBrowser ? window.location.pathname : null;
    const fullUrl = isBrowser ? window.location.href : null;
    const sessionId = getSessionId();
    const utm = isBrowser ? getUtmParams() : {};

    await addDoc(collection(db, 'events'), {
      eventType,
  path,
  fullUrl,
  referrer,
  userAgent,
  sessionId,
  ...utm,
  ...data,
  createdAt: serverTimestamp(),
    });
  } catch (err) {
    // لا تخرب الموقع لو فشل اللوق
    console.error('trackEvent error:', err);
  }
}
