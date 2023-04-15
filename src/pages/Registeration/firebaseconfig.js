import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBKa77DsOtNM8rFHzrZnYNg5OsHAZy-yvg",
  authDomain: "dash-app-b6497.firebaseapp.com",
  databaseURL: "https://dash-app-b6497-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dash-app-b6497",
  storageBucket: "dash-app-b6497.appspot.com",
  messagingSenderId: "479401387259",
  appId: "1:479401387259:web:a032bd87c3d7d122cc7c5e",
  measurementId: "G-SHKWWMP6SH"
  };

  const carlos = initializeApp(firebaseConfig);
 export const auth = getAuth(carlos);