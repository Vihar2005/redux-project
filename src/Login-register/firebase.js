import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
// import { useEffect } from "react";


const firebaseConfig = {
  apiKey: "YOUR-APIKEY",
  authDomain: "YOUR-AUTHDOMAIN",
  projectId: "YOUR-PROJECTID",
  storageBucket: "YOUR-STORAGEBUCKET",
  messagingSenderId: "YOUR-MESSAGINGSENDERID",
  appId: "YOUR-APPID"
};

function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;