// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkrafwTirf4tDBD7AnaiDGwSo2ToaaKH0",
  authDomain: "clubhub-36763.firebaseapp.com",
  projectId: "clubhub-36763",
  storageBucket: "clubhub-36763.appspot.com",
  messagingSenderId: "513577731707",
  appId: "1:513577731707:web:9939c76e3aa56daa0304de",
  measurementId: "G-D3M3GYJWWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };