

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3XZp1Ibz_J7BTRbI1UePpucj8P02DUSI",
  authDomain: "tienda-online-d49a8.firebaseapp.com",
  projectId: "tienda-online-d49a8",
  storageBucket: "tienda-online-d49a8.appspot.com",
  messagingSenderId: "82017473701",
  appId: "1:82017473701:web:6ed5b8363d36cc2b74e94c",
  measurementId: "G-2PWF5X275T"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);
export default appFirebase;