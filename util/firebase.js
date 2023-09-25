// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-nCWmfJ-c0WG_VNTw4oyBBR86VvWh2Ug",
  authDomain: "cinecoders.firebaseapp.com",
  projectId: "cinecoders",
  storageBucket: "cinecoders.appspot.com",
  messagingSenderId: "667270841997",
  appId: "1:667270841997:web:9f1deeec05e75ddf8104c4",
  measurementId: "G-GLHH43VQS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);