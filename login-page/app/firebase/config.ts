// Import the functions you need from the SDKs you need
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase only if it hasn't been initialized already
// let app: FirebaseApp;
// let auth: Auth;

// try {
//   if (!getApps().length) {
//     app = initializeApp(firebaseConfig);
//   } else {
//     app = getApps()[0];
//   }
//   auth = getAuth(app);
// } catch (error) {
//   console.error("Error initializing Firebase:", error);
//   throw error;
// }

// export { app, auth };
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);