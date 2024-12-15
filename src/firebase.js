// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALjUGNi1NBSbMKcDqfS_iZCsFoOmAlA3M",
  authDomain: "proyectoreact-57ff1.firebaseapp.com",
  projectId: "proyectoreact-57ff1",
  storageBucket: "proyectoreact-57ff1.firebasestorage.app",
  messagingSenderId: "936521307641",
  appId: "1:936521307641:web:c70c4b2fa6ec3f49fe1928"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)