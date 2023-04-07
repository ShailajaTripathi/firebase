import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyC57GGo3hhXjWZOgopE0ScFL22lr3cgX7c",
  authDomain: "login-form-41e80.firebaseapp.com",
  projectId: "login-form-41e80",
  storageBucket: "login-form-41e80.appspot.com",
  messagingSenderId: "945444739417",
  appId: "1:945444739417:web:9f5a293d8f51d5ed265448",
  measurementId: "G-N4EYPCJXKX",
  databaseURL:"https://login-form-41e80-default-rtdb.firebaseio.com/"
};


export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);