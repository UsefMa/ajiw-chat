// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAualB7CdLxJOKCDgM10FIZK-O8nUXBCsI",
  authDomain: "ajiw-chat-ef249.firebaseapp.com",
  projectId: "ajiw-chat-ef249",
  storageBucket: "ajiw-chat-ef249.appspot.com",
  messagingSenderId: "487416356346",
  appId: "1:487416356346:web:c1793660977734f0505843",
  measurementId: "G-KH24YDN3CV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)




