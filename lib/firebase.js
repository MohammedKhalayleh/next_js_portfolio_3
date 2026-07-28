import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let app;
let firestore;
let analytics;

function getFirebaseApp() {
  if (!app) {
    app = initializeApp(firebaseConfig);
  }
  return app;
}

export function getFirestoreInstance() {
  if (!firestore) {
    const fbApp = getFirebaseApp();
    firestore = getFirestore(fbApp);
  }
  return firestore;
}

export function getAnalyticsInstance() {
  if (!analytics && typeof window !== 'undefined') {
    if (process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true') {
      const fbApp = getFirebaseApp();
      analytics = getAnalytics(fbApp);
    }
  }
  return analytics;
}

export function logEvent(eventName, eventParams = {}) {
  const analytics = getAnalyticsInstance();
  if (analytics) {
    // Only log high-level events, never sensitive data
    window.gtag?.('event', eventName, eventParams);
  }
}
