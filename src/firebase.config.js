import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD4PGT4ncfdX6FsnoQSJs8UOfkUm3qId6s",
  authDomain: "fir-2adcf.firebaseapp.com",
  projectId: "fir-2adcf",
  storageBucket: "fir-2adcf.appspot.com",
  messagingSenderId: "976698866248",
  appId: "1:976698866248:web:37732281ec85bd6595b67d",
  measurementId: "G-Y2NVBX5PLC",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
