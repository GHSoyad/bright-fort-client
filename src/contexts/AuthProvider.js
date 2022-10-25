import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const UserContext = createContext();

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const [userInfo, setUserInfo] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const emailRegistration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const logOutUser = () => {
        return signOut(auth);
    }


    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            setUserInfo(user)
            // ...
        } else {
            // User is signed out
            // ...
            setUserInfo({})
        }
    });



    const authInfo = { userInfo, emailRegistration, googleSignIn, errorMessage, setErrorMessage, logOutUser }

    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;