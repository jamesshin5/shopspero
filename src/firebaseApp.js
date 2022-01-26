import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp(firebaseConfig);
export const ourFireStore = getFirestore();