import React from 'react'
import "../components/nav/NavStyle.css";
import { auth } from '../firebase';


const LogOut = () => {

    const signOut = () => {
        signOut(auth)
    }

  return (
    
    <button onClick={ () => auth.signOut() } className="log-out">Sign Out</button>
  )
}

export default LogOut