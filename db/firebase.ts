// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvxonWLTrmlBlHTq8jvRJYOq0Xmtr7H2w",
  authDomain: "task-manager-2299d.firebaseapp.com",
  projectId: "task-manager-2299d",
  storageBucket: "task-manager-2299d.appspot.com",
  messagingSenderId: "531247001592",
  appId: "1:531247001592:web:23eefae7c41bee271a700d",
  measurementId: "G-ED87E9G3J0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = initializeAuth(app);
const db = getFirestore(app);



export {
    db,
    analytics,
    auth
}