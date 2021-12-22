// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8a41saV-frZ5YG_7qaPRHmzxz_1bA3eM",
  authDomain: "twitter-clone-da3bd.firebaseapp.com",
  projectId: "twitter-clone-da3bd",
  storageBucket: "twitter-clone-da3bd.appspot.com",
  messagingSenderId: "470893766095",
  appId: "1:470893766095:web:e029102d6c8b96f57edeba",
  measurementId: "G-C3V3DG7RM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;