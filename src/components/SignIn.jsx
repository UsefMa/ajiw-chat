import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React from "react";
import "../components/nav/NavStyle.css";
import { auth } from "../firebase";

const SignIn = () => {

const signInwithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}
  return (
    <>
      <button onClick={signInwithGoogle} className="nav-sign-in">Sign In With Google</button>
    </>
  );
};

export default SignIn;
