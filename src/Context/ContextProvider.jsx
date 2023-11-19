/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const myContext = createContext(null)

const ContextProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email, password)
    }
//   Sign in user

    const signIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
   }

   const logOut = ()=>{
    return signOut(auth);
   }


   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
        console.log("observer is set", currentUser);
        setUser(currentUser)
    })

    return () =>{
        unSubscribe()
    }
   },[])

    const contextInfo = {
        user,
        createUser,
        signIn,
        logOut
        
    }

    return (
        <myContext.Provider value={contextInfo}>
            {children}
        </myContext.Provider>
    );
};

export default ContextProvider;