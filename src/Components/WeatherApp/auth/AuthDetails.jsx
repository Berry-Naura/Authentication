import React, { useEffect, useState } from 'react'
import { auth } from '../../../firebase-config'
import { onAuthStateChanged, signOut} from 'firebase/auth';
import './loginsignup.css'

import { Link } from "react-router-dom";


const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user){
                setAuthUser(user)
            }else{
                setAuthUser(null);
            }
        })
        return () => {
            listen();
        }
    }, []);
    const userSignOut = () => {
        signOut(auth).then(() =>{
            console.log('Sign Out Succssful')
        }).catch(error => console.log(error))
    }
  return (
    <div id="authdetails"className="container2">
        {authUser ? <><p>{`Signed In as ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></> : <p>Signed Out</p>}
        <Link to='/WeatherApp'><button>View Weather</button></Link>
        <Link to='/Blog'><button>Chat In Blog</button></Link>
    </div>
    )
}

export default AuthDetails