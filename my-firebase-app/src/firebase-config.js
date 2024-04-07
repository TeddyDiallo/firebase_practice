import firebase from 'firebase/app';
import 'firebase/firestore'; // If you're using Firestore

const firebaseConfig = {
    apiKey: "AIzaSyBDS8SFEhx__pyPbd6uBaiERT0NnJQzugo",
    authDomain: "testproject-1cbf3.firebaseapp.com",
    projectId: "testproject-1cbf3",
    storageBucket: "testproject-1cbf3.appspot.com",
    messagingSenderId: "492625837168",
    appId: "1:492625837168:web:9aea290bb181da669748b5"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;
