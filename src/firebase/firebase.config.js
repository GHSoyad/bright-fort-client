// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDM5ZA10TkiJJsN64m1MPrTNbVJCnUWxCg",
    authDomain: "bright-fort.firebaseapp.com",
    projectId: "bright-fort",
    storageBucket: "bright-fort.appspot.com",
    messagingSenderId: "288029510960",
    appId: "1:288029510960:web:bf89aef0a1508cd1b38cf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;