// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApWaQLXHILz3zNuxwm1FIffOW-hJ0d9Cw",
  authDomain: "whispering-willow-inn.firebaseapp.com",
  projectId: "whispering-willow-inn",
  storageBucket: "whispering-willow-inn.appspot.com",
  messagingSenderId: "68856252711",
  appId: "1:68856252711:web:aaa3ee7897ca2210bdc102"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;