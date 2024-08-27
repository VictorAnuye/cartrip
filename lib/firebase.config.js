
import { initializeApp,getApp,getApps} from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { initialize } from "next/dist/server/lib/render-server";


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "cartrip-e2334.firebaseapp.com",
  projectId: "cartrip-e2334",
  storageBucket: "cartrip-e2334.appspot.com",
  messagingSenderId: "558387004379",
  appId: "1:558387004379:web:20d37f25349ce482c01dfe"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db =getFirestore(app)

export {db}