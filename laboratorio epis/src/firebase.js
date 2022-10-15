import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtrH2UGkYnxs06KwMvz6uv4ix0M7At1lU",
  authDomain: "labepis.firebaseapp.com",
  projectId: "labepis",
  storageBucket: "labepis.appspot.com",
  messagingSenderId: "914729714412",
  appId: "1:914729714412:web:a77f29ef4060481960dbc9",
  measurementId: "G-BERCCCTPQT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app)