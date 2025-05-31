// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-qVM50L5s1BI-_71ijidKcClPmQobNC0",
  authDomain: "freelancer-marketplace-86771.firebaseapp.com",
  projectId: "freelancer-marketplace-86771",
  storageBucket: "freelancer-marketplace-86771.firebasestorage.app",
  messagingSenderId: "503655960275",
  appId: "1:503655960275:web:6d4746f414890e8b788e26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);