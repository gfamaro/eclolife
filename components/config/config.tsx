// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIWzL08bOMavM1uH1ki5wpmf5FepdFA9Q",
  authDomain: "eclolife-436c5.firebaseapp.com",
  projectId: "eclolife-436c5",
  storageBucket: "eclolife-436c5.appspot.com",
  messagingSenderId: "517369504092",
  appId: "1:517369504092:web:d9c6020ae7b023f6d9e199",
  measurementId: "G-FNHW6S145D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app)
