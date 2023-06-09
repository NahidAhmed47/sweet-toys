import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const signUp = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign in with google
    const logInWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    // Update user info
    const updateUser = (name, photoUrl)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photoUrl
        });
    }
    // user monitoring 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, user =>{
            setLoading(true);
            if(user){
                setUser(user);
            }
            else{
                setUser(null);
            }
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    // user logout
    const logOut = ()=>{
        return signOut(auth)
    }
    const userInfo = {
        user,
        loading,
        signUp,
        logIn,
        updateUser,
        logInWithGoogle,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;