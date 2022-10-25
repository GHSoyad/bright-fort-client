import React, { createContext } from 'react';

export const UserContext = createContext();

const AuthProvider = ({ children }) => {
    const user = { dp: "akrosh" };
    const authInfo = { user }

    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;