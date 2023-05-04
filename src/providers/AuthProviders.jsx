import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut= ()=>{
        return signOut(auth);
    }

    useEffect( ()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);

        });
        
        return () =>{
            return unsubscribe;
        }
    },[])
 

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo} >

                {children}

            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProviders;