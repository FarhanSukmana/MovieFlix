import React, { createContext, useContext, useEffect, useState } from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import {auth} from '../firebase'

const AuthContext=createContext()

export function AuthContextProvider({children}){

    const [user, setUser]=useState({})

    function login(email,password){
       return signInWithEmailAndPassword(auth, email, password);
    }
    function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function logout(){
        return signOut(auth)
    }
    useEffect(()=>{
        const log_status = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
        return()=>{
            log_status()
        }
    })

    return(
        <AuthContext.Provider value={{signup, login, logout, user}}>
            {children}
        </AuthContext.Provider>
    )
} 


export function UserAuth(){
    return useContext(AuthContext)
}