// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7VKtzGoAjH7WQO9FYOXS6S3faj9DHBsU",
  authDomain: "wedding-rsvp-edc2b.firebaseapp.com",
  projectId: "wedding-rsvp-edc2b",
  storageBucket: "wedding-rsvp-edc2b.appspot.com",
  messagingSenderId: "434701334678",
  appId: "1:434701334678:web:c0c202fd1686146d9c6ab7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export const colRef = collection(db, "rsvp-list");

