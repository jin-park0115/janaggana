import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "janaggana-5ead3.firebaseapp.com",
  projectId: "janaggana-5ead3",
  storageBucket: "janaggana-5ead3.firebasestorage.app",
  messagingSenderId: "945104314538",
  appId: "1:945104314538:web:1b526741ccdc39aaad70d3",
  measurementId: "G-7Z59J9LPC2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
