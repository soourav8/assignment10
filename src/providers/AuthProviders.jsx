import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    
    

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut= ()=>{
        setLoading(true)
        return signOut(auth);
    }

    const loginGoogle = () =>{

        return signInWithPopup(auth, provider)
        
    }
    const loginGit = () =>{
        return signInWithPopup(auth, githubProvider)
    }

   
  
    

    useEffect( ()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)

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
        loginGoogle,
        loginGit,
        loading
        
        

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