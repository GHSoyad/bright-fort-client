import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const UserContext = createContext();

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    const emailRegistration = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const emailSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const profileUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const googleSignIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const githubSignIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUserInfo(currentUser)
            setLoading(false)
        });

        return () => {
            unsubscribe()
        }
    }, [auth])

    const authInfo = {
        userInfo,
        setUserInfo,
        emailRegistration,
        profileUpdate,
        emailSignIn,
        googleSignIn,
        githubSignIn,
        logOutUser,
        loading,
        setLoading
    }

    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;