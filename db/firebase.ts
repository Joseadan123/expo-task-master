import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDvxonWLTrmlBlHTq8jvRJYOq0Xmtr7H2w",
  authDomain: "task-manager-2299d.firebaseapp.com",
  projectId: "task-manager-2299d",
  storageBucket: "task-manager-2299d.appspot.com",
  messagingSenderId: "531247001592",
  appId: "1:531247001592:web:23eefae7c41bee271a700d",
  measurementId: "G-ED87E9G3J0"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app,{
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getFirestore(app);

export {
    db,
    auth
}