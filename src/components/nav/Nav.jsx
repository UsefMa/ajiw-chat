import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

import LogOut from "../LogOut";
import SignIn from "../SignIn";
import "./NavStyle.css";

const Nav = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <p>
            <span className="logo-span">ajiw</span> Chat
          </p>
        </div>
        <div className="nav-btns">{user ? <LogOut /> : <SignIn />}</div>
    
       
        
        
      </div>
      
    </>
  );
};

export default Nav;
