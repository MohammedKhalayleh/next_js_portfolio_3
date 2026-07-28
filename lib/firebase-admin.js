import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

let adminApp;
let adminFirestore;

function getAdminApp() {
  if (!adminApp) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_SDK_KEY || '{}');

    if (!serviceAccount.project_id) {
      console.warn('Firebase Admin SDK not configured');
      return null;
    }

    adminApp = initializeApp({
      credential: cert(serviceAccount),
    });
  }
  return adminApp;
}

export function getAdminFirestore() {
  if (!adminFirestore) {
    const app = getAdminApp();
    if (app) {
      adminFirestore = getFirestore(app);
    }
  }
  return adminFirestore;
}

export async function saveContactMessage(name, email, message) {
  const db = getAdminFirestore();
  if (!db) {
    throw new Error('Firebase not configured');
  }

  try {
    await db.collection('contactMessages').add({
      name,
      email,
      message,
      timestamp: new Date(),
      userAgent: process.env.USER_AGENT || 'unknown',
    });
    return { success: true };
  } catch (error) {
    console.error('Error saving contact message:', error);
    throw error;
  }
}

