import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuzROAj_i-zbZ29a-5weOOtdK64RnjGZg",
  authDomain: "taskboard-74da1.firebaseapp.com",
  projectId: "taskboard-74da1",
  storageBucket: "taskboard-74da1.firebasestorage.app",
  messagingSenderId: "771468838192",
  appId: "1:771468838192:web:0cc12eb5432cb2006cf4f5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);