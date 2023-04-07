import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from './firebase';

const auth = getAuth(app);

export const SigninPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signinUser = () => {
        signInWithEmailAndPassword(auth, email, password).then((value) => alert("Signin successfully"))
    }
    return (
        <div className="signin-page">
            <h1>Signin user</h1>
            <label>Email : </label>
            <input
                onChange={(e) => setEmail(e.target.value)}
                type="email" value={email} required placeholder="Enter Email" />
            <br/>
            <label>Password : </label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" value={password} required placeholder="Enter password" />
            <br/>
            <button onClick={signinUser}>Signin user</button>
        </div>
    )
}