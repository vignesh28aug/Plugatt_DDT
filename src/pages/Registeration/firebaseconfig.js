import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAM5rwo80NXUWKgBTcBcja9dL13zyW4pNk",
  authDomain: "plugatt-ddt.firebaseapp.com",
  projectId: "plugatt-ddt",
  storageBucket: "plugatt-ddt.appspot.com",
  messagingSenderId: "950774741852",
  appId: "1:950774741852:web:c9a7a6297ec3a523df9f99",
  measurementId: "G-DW83X28BT8"
  };

  const carlos = initializeApp(firebaseConfig);
 export const auth = getAuth(carlos);