// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNA_EoZ89tYDxXykXayDO3qGpdm_qrOpo",
  authDomain: "linkedln-clone-b6932.firebaseapp.com",
  projectId: "linkedln-clone-b6932",
  storageBucket: "linkedln-clone-b6932.appspot.com",
  messagingSenderId: "347590040446",
  appId: "1:347590040446:web:6cfa28062d5d1761d6712f",
  measurementId: "G-D2FHXBM1W2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth , app};