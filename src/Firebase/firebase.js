import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9FoXVWpNTW7ruo3quy-jicSt23ZaxJtw",
  authDomain: "netflix-clone-208a5.firebaseapp.com",
  projectId: "netflix-clone-208a5",
  storageBucket: "netflix-clone-208a5.appspot.com",
  messagingSenderId: "370274905213",
  appId: "1:370274905213:web:f0aef16b2993dccee51514",
  measurementId: "G-H99ST6X2ER",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
