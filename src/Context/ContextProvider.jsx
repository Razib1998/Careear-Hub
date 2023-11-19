/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const myContext = createContext(null)

const ContextProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email, password)
    }

    const contextInfo = {
        user,
        createUser
        
    }

    return (
        <myContext.Provider value={contextInfo}>
            {children}
        </myContext.Provider>
    );
};

export default ContextProvider;