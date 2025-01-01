// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Corrected import for Firestore
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "learn-c3f66.firebaseapp.com",
  projectId: "learn-c3f66",
  storageBucket: "learn-c3f66.firebasestorage.app",
  messagingSenderId: "263224513453",
  appId: "1:263224513453:web:b23caa3249ddc95a4b0724",
  measurementId: "G-03RKGJYEXT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app); 
export const storage = getStorage(app);
