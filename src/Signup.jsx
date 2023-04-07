
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from './firebase';

const auth = getAuth(app);

export const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then((value) => alert("Account Created Successfully"))
    }
    return (
        <div className="signup-page">
            <h1>Signup</h1>
            <label>Email : </label>
            <input
                onChange={(e) => setEmail(e.target.value)}
                type="email" value={email} required placeholder="Enter Email" />
            <br/>
            <label>Password : </label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" value={password} required placeholder="Enter password" />
            <br/>
            <button onClick={createUser}>Signup</button>
        </div>
    )
}