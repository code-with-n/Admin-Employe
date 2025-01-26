import { createContext, useEffect, useState } from "react";
// import { getLocalStorage, setLocalStorage } from "../utlis/localStorage";
import { getLocalStorage,setLocalStorage } from "../utlis/localStorage";

export const AuthContext = createContext();
console.log("nitesh")

const AuthProvider = ({ children }) => {
  setLocalStorage()
    const [authData ,setAuthdata ] = useState();
    
    useEffect(()=>{
        const {employe,admin} = getLocalStorage();
        setAuthdata({employe,admin})
    },[])

    const LogOut = ()=>{
        
    }

  return (
    <>
      <AuthContext.Provider value={{authData,LogOut}}>
        {children}
        </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
