// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBLWv1oj109OU4eWprbJ0bvNbp3GMQyLU",
  authDomain: "careear-hub-9a972.firebaseapp.com",
  projectId: "careear-hub-9a972",
  storageBucket: "careear-hub-9a972.appspot.com",
  messagingSenderId: "773331594408",
  appId: "1:773331594408:web:76d4072b4e0a4b3dd4269d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
