// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3Mp7HOb8vfjVKI8AXowec3qnFcYX-3oE",
  authDomain: "dishdiscovery-ddf8f.firebaseapp.com",
  projectId: "dishdiscovery-ddf8f",
  storageBucket: "dishdiscovery-ddf8f.appspot.com",
  messagingSenderId: "1064657169204",
  appId: "1:1064657169204:web:61cbabac716632ddd7d361",
  measurementId: "G-9Y253K7VWG"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIREBASE_FIRESTORE = getFirestore(FIREBASE_APP)
const analytics = getAnalytics(FIREBASE_APP);