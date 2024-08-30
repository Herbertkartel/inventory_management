// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmFeBJ1-UItGqfFvyvRZVqmKi0iz0eBVM",
  authDomain: "inventory-management-e75bd.firebaseapp.com",
  projectId: "inventory-management-e75bd",
  storageBucket: "inventory-management-e75bd.appspot.com",
  messagingSenderId: "324979897706",
  appId: "1:324979897706:web:1c6ee93bf9d9d87f7ba113",
  measurementId: "G-3X1B2XLV2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}
