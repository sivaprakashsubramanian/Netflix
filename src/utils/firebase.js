// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqVELvTT6u0mD4EZBiZLQqsTMjJgL1IKI",
  authDomain: "moviefy-3a5e4.firebaseapp.com",
  projectId: "moviefy-3a5e4",
  storageBucket: "moviefy-3a5e4.appspot.com",
  messagingSenderId: "903557595741",
  appId: "1:903557595741:web:f42a792c1eb7c97f0c83b4",
  measurementId: "G-7BXPRG2YY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();