import { createContext,useContext } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
import {getDatabase,set,ref} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyC57GGo3hhXjWZOgopE0ScFL22lr3cgX7c",
    authDomain: "login-form-41e80.firebaseapp.com",
    databaseURL: "https://login-form-41e80-default-rtdb.firebaseio.com",
    projectId: "login-form-41e80",
    storageBucket: "login-form-41e80.appspot.com",
    messagingSenderId: "945444739417",
    appId: "1:945444739417:web:9f5a293d8f51d5ed265448",
    measurementId: "G-N4EYPCJXKX",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const FirebaseContext = createContext(null);
const database =getDatabase(firebaseApp);

export const useFirebase =() =>useContext (FirebaseContext);

export const FirebaseProvider = (props) => {
    const signupUserWithEmailAndPassword =(email,password)=>{
        return createUserWithEmailAndPassword (firebaseAuth,email,password)
    }
    const putData =(key,data)=>set(ref(database,key),data);

    return (
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword,putData}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}