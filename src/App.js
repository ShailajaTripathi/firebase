// import './App.css';
// // import { Database, getDatabase, ref, set } from 'firebase/database';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { app } from './firebase';
// import { SignupPage } from './Signup';
// import { SigninPage } from './Signin';
// // const db = getDatabase(app);
// const auth = getAuth(app);

// function App() {
//   const signupUser = () => {
//     createUserWithEmailAndPassword(auth, "shailaja24305@gmail.com", "shailaja123")
//       .then((value) => console.log("value", value))
//   }

//   return (
//     <div className="App">

//       {/* <h1> Sign up Page </h1>
//       <button onClick={signupUser}>
//         Create User
//       </button> */}
//       <SignupPage />
//       <SigninPage />

//     </div>
//   );
// }
// export default App;


import './App.css';
import { useState } from 'react';
import {useFirebase} from "./context/Firebase"
function App() {

  const firebase = useFirebase();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  return (
    <div className='App'>
      <h1>Firebase</h1>
      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Enter Email" />
      <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password" />
      <button onClick={() =>firebase.signupUserWithEmailAndPassword(email,password)}>Signup</button>
    </div>
  )
}

export default App