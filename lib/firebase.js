import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYk6f9iZ8flIXdEmd8QvXhQI-8ysgy2EM",
  authDomain: "nextjs-firebase-chat-e265b.firebaseapp.com",
  projectId: "nextjs-firebase-chat-e265b",
  storageBucket: "nextjs-firebase-chat-e265b.appspot.com",
  messagingSenderId: "750963096666",
  appId: "1:750963096666:web:5d5f7845e9ab46c1982c63",
  measurementId: "G-NP36S31LPN",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };
