import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyASqnvJAElPILIEQhpM1L2Sl-KJWnCQQrk",
  authDomain: "reactdemoproject-75799.firebaseapp.com",
  databaseURL: "https://reactdemoproject-75799-default-rtdb.firebaseio.com",
  projectId: "reactdemoproject-75799",
  storageBucket: "reactdemoproject-75799.appspot.com",
  messagingSenderId: "521328680836",
  appId: "1:521328680836:web:1da7d3a3910be4046087d1",
  measurementId: "G-1W3P3S6DHR"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}