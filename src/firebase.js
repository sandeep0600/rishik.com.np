// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';
// import { getDatabase } from 'firebase/database'

import React from "react";
// import { getDatabase } from "@firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyCPLKrZ4M5l9kt8IXfg0aQxJhZLdRsQirY",
  authDomain: "blog-384bc.firebaseapp.com",
  projectId: "blog-384bc",
  storageBucket: "blog-384bc.appspot.com",
  messagingSenderId: "1014019328223",
  appId: "1:1014019328223:web:174b1f9f2520afdca2c16a",
  measurementId: "G-PMNR3DV35T"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
const analytics = getAnalytics(App);
const auth = getAuth();
// const Database = getDatabase(App);
// const database = firebase.database().ref;
export default App;

export function signin(email,password){
//    return createUserWithEmailAndPassword(auth,email,password);
return signInWithEmailAndPassword(auth,email,password);
}

