
/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
//firebase
const auth = getAuth(app);
//google provider
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    //
    const [user, setUser] = useState(null);
    //google login
    const GoogleLogin = ()=>{
        return signInWithPopup(auth, provider);
        
    }
    //created user
    const CreatedUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //
    const SignIn=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    //logOut
    const logOut=()=>{
        return signOut(auth);
    }

    //logout useEffect
    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, logUser=>{
            console.log('logged in user inside auth obbser', logUser);
            setUser(logUser);
        })
        return ()=>{unSubscribe();}
    },[])


    //authInfo share data
    const authInfo = {
        user,
        GoogleLogin,
        CreatedUser,
        logOut,
        SignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;