import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBAMTUy0wibQDJTAyqJ1ii90wdTCMUzADc",
  authDomain: "finalhackathon-c7ce2.firebaseapp.com",
  projectId: "finalhackathon-c7ce2",
  storageBucket: "finalhackathon-c7ce2.appspot.com",
  messagingSenderId: "1006138923217",
  appId: "1:1006138923217:web:ccbc10920792eb04decdf0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();

export { app, auth, createUserWithEmailAndPassword, db, doc, setDoc, signInWithEmailAndPassword, storage, ref, uploadBytesResumable, getDownloadURL }