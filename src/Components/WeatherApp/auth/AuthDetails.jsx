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
    <div className="container 2">{authUser ? <><p>{`Signed In as ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></> : 
    <div><p>Signed Out</p>
    <Link to='/Blog'><button>View Blog</button></Link>
    <Link to='/WeatherApp'><button>Search Weather</button></Link></div>}</div>
    )
}

export default AuthDetails