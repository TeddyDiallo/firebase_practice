// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBDS8SFEhx__pyPbd6uBaiERT0NnJQzugo",
    authDomain: "testproject-1cbf3.firebaseapp.com",
    projectId: "testproject-1cbf3",
    storageBucket: "testproject-1cbf3.appspot.com",
    messagingSenderId: "492625837168",
    appId: "1:492625837168:web:9aea290bb181da669748b5"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };