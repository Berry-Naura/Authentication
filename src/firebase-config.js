// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_bi_eyAQuCCJ7lGkdOxYQu5XHCjxE-wQ",
  authDomain: "weather-app-firebase-33c14.firebaseapp.com",
  projectId: "weather-app-firebase-33c14",
  storageBucket: "weather-app-firebase-33c14.appspot.com",
  messagingSenderId: "894379288562",
  appId: "1:894379288562:web:d17887989b20e15a3aad6b",
  measurementId: "G-BKN8EPFHS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
