import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_APIKEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECTID,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
//   appId: process.env.NEXT_PUBLIC_APPID
// }

const firebaseConfig = {
  apiKey: "AIzaSyAf-cMSUBjs_jnLFnauCLIrWnRTZqII4K0",
  authDomain: "duft-4546a.firebaseapp.com",
  projectId: "duft-4546a",
  storageBucket: "duft-4546a.appspot.com",
  messagingSenderId: "681828745837",
  appId: "1:681828745837:web:d5a4d200126072bab7b564",
  measurementId: "G-6C8T2KJVSZ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage();
