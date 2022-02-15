import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9CrU6DgnvbitW2jWH8enYnSlfpP3KJJo",
  authDomain: "journal-app-ccf63.firebaseapp.com",
  projectId: "journal-app-ccf63",
  storageBucket: "journal-app-ccf63.appspot.com",
  messagingSenderId: "710849409948",
  appId: "1:710849409948:web:5b12dfee91839b57e28e59",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
