import React, { createContext, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

export const UserContext = createContext();

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const [userInfo, setUserInfo] = useState({});

    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider);
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
        }
    });



    const authInfo = { userInfo, googleSignIn }

    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;