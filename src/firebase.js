import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

// src.firebase.js

const firebaseConfig = {

  apiKey: "AIzaSyAlTxIHQnQbavBsfZDXixduub0Bow3jCiE",

  authDomain: "userregistration-c082e.firebaseapp.com",

  projectId: "userregistration-c082e",

  storageBucket: "userregistration-c082e.appspot.com",

  messagingSenderId: "1079487099773",

  appId: "1:1079487099773:web:4fb08ab4b8fe8d9a6a9214"

};

// Initialize Firebase and firebase auth

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth }