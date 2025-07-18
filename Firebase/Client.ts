// Import the functions you need from the SDKs you need
import { initializeApp  , getApp , getApps} from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtF4pX5_mvse2L7BkRwAlPIjFtA7FVRtM",
  authDomain: "prepwise-683af.firebaseapp.com",
  projectId: "prepwise-683af",
  storageBucket: "prepwise-683af.firebasestorage.app",
  messagingSenderId: "940539656715",
  appId: "1:940539656715:web:315a25beb76593b452a50e",
  measurementId: "G-H4CTVYY4HF"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);