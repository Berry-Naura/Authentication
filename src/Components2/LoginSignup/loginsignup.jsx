import React from 'react'
import './loginsignup.css'

import email_icon from '../Assets2/email.png'
import user_icon from '../Assets2/person.png'
import password_icon from '../Assets2/password.png'

const loginsignup = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" />
            </div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" />
            </div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" />
            </div>
        </div>
    </div>
  )
}

export default loginsignup