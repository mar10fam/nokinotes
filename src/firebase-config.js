// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNRuvyr27__U2czKJc0mhd0-qHeIwZDIM",
  authDomain: "nokinotes-40c21.firebaseapp.com",
  projectId: "nokinotes-40c21",
  storageBucket: "nokinotes-40c21.appspot.com",
  messagingSenderId: "156016716260",
  appId: "1:156016716260:web:b07092398930efb2917ff1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();