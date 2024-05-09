import React, { useState } from "react";
import { auth } from "../../../firebase-config";
import './loginsignup.css'

import { Link } from "react-router-dom";


import email_icon from '../../Assets2/email.png'
import password_icon from '../../Assets2/password.png'
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then ((userCredential) => {
                console.log(userCredential);
            }).catch((error) => {
            console.log(error)
        })
    }

  return (
    <div className='container2'>
        <form onSubmit={signIn}>
            <h1>LogIn to Account</h1>
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
            <div className="button">
                <Link to='/WeatherApp'><button type="submit">LogIn</button></Link>
                <Link to='/SignUp'><button>SignIn</button></Link>
            </div>
        </form>
    </div>
  )
}

export default LoginSignup