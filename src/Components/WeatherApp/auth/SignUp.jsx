import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase-config";
import './loginsignup.css'

import { Link } from "react-router-dom";


import email_icon from '../../Assets2/email.png'
import password_icon from '../../Assets2/password.png'


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then ((userCredential) => {
                console.log(userCredential);
            }).catch((error) => {
            console.log(error)
        })
    }

  return (
    <div className='container2'>
        <form onSubmit={signUp}>
            <h1>Create Account</h1>
            <div className="input">
                <img src={email_icon} alt=" "/>
                <input type="email" placeholder="Enter Your Email" value={email} 
                        onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className="input">
                <img src={password_icon} alt=" "/>
                <input type="password" placeholder="Enter Your Password" value={password}
                        onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <Link to='/AuthDetails'><button type="submit">Signup</button></Link>
        </form>
    </div>
  )
}

export default SignUp;
