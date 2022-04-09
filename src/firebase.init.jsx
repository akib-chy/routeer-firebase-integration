// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvot1ARMmHcEjfDk_G_XWWRZSGR9imrc4",
  authDomain: "router-firebase-integrat-c35dc.firebaseapp.com",
  projectId: "router-firebase-integrat-c35dc",
  storageBucket: "router-firebase-integrat-c35dc.appspot.com",
  messagingSenderId: "1019937965496",
  appId: "1:1019937965496:web:7bf142e11e9d858153bb4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app