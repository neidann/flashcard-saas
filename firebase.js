// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirebase } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHyeXzXF8w7hAT7MhCScwUd3CEl7cbYm0",
  authDomain: "flashcard-saas-8b485.firebaseapp.com",
  projectId: "flashcard-saas-8b485",
  storageBucket: "flashcard-saas-8b485.appspot.com",
  messagingSenderId: "260753440796",
  appId: "1:260753440796:web:c1900b5df2ec020a28dfd9",
  measurementId: "G-38KL9L214W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirebase(app)

export {db}