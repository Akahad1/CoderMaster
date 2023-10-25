import React, { createContext, useEffect, useState } from 'react';
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import app from '../firebase.config';

 
export const AuthContext =createContext()
const auth = getAuth(app)
const provider= new GoogleAuthProvider()

const AuthProvider = ({children}) => {
const [user,setUser]=useState('')

// create Eamil password
const createEamilPassword=(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)

}
  // LogIN

  const login=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)

  }

  const loginwithgoogle =()=>{
    return signInWithPopup(auth, provider)

  }

  const logOut=()=>{
    return signOut(auth)
  }
  // update data

  const updataData=(profile)=>{
    return updateProfile(auth.currentUser,profile)
  }

  // abserver

  useEffect(()=>{
    const unSubcriber=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
      // setLoading(false)
      console.log(currentUser)
    })
    return ()=> unSubcriber
  },[])

    const authInfo={
        user,
        createEamilPassword,
        login,
        loginwithgoogle,
        logOut,
        updataData,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;