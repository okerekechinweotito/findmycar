import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FindMyCar_Firebase_Key,
  authDomain: "findmycar-nigeria.firebaseapp.com",
  projectId: "findmycar-nigeria",
  storageBucket: "findmycar-nigeria.appspot.com",
  messagingSenderId: "711274143657",
  appId: "1:711274143657:web:b34b9dcac60c097193eeb8",
  databaseURL: "https://findmycar-nigeria-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
export const storage = getStorage(app);
