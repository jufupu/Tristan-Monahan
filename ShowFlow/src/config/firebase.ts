import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANnMr2eXdtWekAbYVWa7FM9nT92mgES7U",
  authDomain: "showflow-83d81.firebaseapp.com",
  projectId: "showflow-83d81",
  storageBucket: "showflow-83d81.firebasestorage.app",
  messagingSenderId: "766766818175",
  appId: "1:766766818175:web:42b19b1634986db541f04a",
  measurementId: "G-S1D3TMRWZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Auth
export const auth = getAuth(app); 