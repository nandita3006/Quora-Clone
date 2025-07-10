import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA5MysmDLiv__AAWEaCwobim3eK5D8LfUU",
  authDomain: "quora-clone-f0892.firebaseapp.com",
  projectId: "quora-clone-f0892",
  storageBucket: "quora-clone-f0892.firebasestorage.app",
  messagingSenderId: "122808164360",
  appId: "1:122808164360:web:3089a77562752ab97531bd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app);