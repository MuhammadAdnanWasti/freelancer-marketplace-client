import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase.init'
import { AuthContext } from './AuthContext'
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
   const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)
 const updatePro= (profile)=>{
  return updateProfile(auth.currentUser, profile)
 }

    const  createUser =(email,password)=>{
  setLoading(true)
    return createUserWithEmailAndPassword(auth,email, password )
 }
    const  logIn =(email,password)=>{
  setLoading(true)
    return signInWithEmailAndPassword(auth,email, password )
 }

 const googleSignIn =() => { 
  setLoading(true)
return signInWithPopup(auth, googleProvider)
 }
 const signOutUser =()=>{
   setLoading(true)
  return signOut(auth)
 }
 useEffect(() => {
   const unSubscribe=onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser)
      setLoading(false)
   })
 
   return () => {
     unSubscribe()
   }
 }, [])
 

  const userInfo={
     createUser,
googleSignIn,
logIn,
signOutUser,
user,
loading,
updatePro
    }
 return (
   <AuthContext value={userInfo}>
{children}
   </AuthContext>
  )
}

export default AuthProvider
