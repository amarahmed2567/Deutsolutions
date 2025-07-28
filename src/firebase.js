// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6KjyvXhAogZqL7XK9cIbCVAzpNlfcde4",
  authDomain: "deutsolutions-bc9a0.firebaseapp.com",
  projectId: "deutsolutions-bc9a0",
  storageBucket: "deutsolutions-bc9a0.appspot.com",
  messagingSenderId: "979815264049",
  appId: "1:979815264049:web:5ce75067fa5f39cee20a10",
  measurementId: "G-BGQG6W15BN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
