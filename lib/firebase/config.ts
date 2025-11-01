import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

function validateConfig() {
  const requiredKeys = [
    'apiKey',
    'authDomain',
    'projectId',
    'storageBucket',
    'messagingSenderId',
    'appId'
  ] as const;

  for (const key of requiredKeys) {
    if (!firebaseConfig[key]) {
      throw new Error(
        `Firebase config error: Missing ${key}. ` +
        `Please check your environment variables. ` +
        `Make sure NEXT_PUBLIC_FIREBASE_${key.toUpperCase()} is set.`
      );
    }
  }
}

if (typeof window !== 'undefined') {
  validateConfig();
}

export const firebaseApp: FirebaseApp =
  typeof window !== 'undefined' && getApps().length > 0
    ? getApp()
    : typeof window !== 'undefined'
    ? initializeApp(firebaseConfig)
    : {} as FirebaseApp;

export const db: Firestore =
  typeof window !== 'undefined' ? getFirestore(firebaseApp) : {} as Firestore;

export const auth: Auth =
  typeof window !== 'undefined' ? getAuth(firebaseApp) : {} as Auth;

export { firebaseApp as app };
