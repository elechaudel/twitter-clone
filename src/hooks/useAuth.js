import { createContext, useContext, useEffect, useState } from 'react';

import { auth, init, logIn as authLogIn, logOut as authLogOut } from '../lib/auth.js'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        init((user) => {
            setUser(user)
        });

        auth.on('login', setUser);

        return () => {
            auth.off('login', setUser);
        }
    }, []);

function logIn() {
    authLogIn((user) => {
        setUser(user)
    });
    console.log('Log in!');
}

function logOut() {
    authLogOut(() => {
        setUser(undefined)
    });
    console.log('Log out!');
}

const contextValue = {
    user,
    logIn,
    logOut
}

    return (
        <AuthContext.Provider value={contextValue}>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}