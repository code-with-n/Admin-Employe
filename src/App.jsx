// import {getDatabase,ref,set} from "firebase/database"

import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Auth/login";
import EmployeDash from "./components/Dashboard/employe/employeDashboard";
import Failed from "./components/tasklist/failedTask";
import Admin from "./components/Dashboard/admin/admin";
import { useContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "./utlis/localStorage";
import { AuthContext } from "./context/authProvider";
import { use } from "react";



function App() {
  // setLocalStorage();
  // localStorage.clear()
  const {authData} = useContext(AuthContext)
 const [user,setUser] = useState(null);
 const [loggedInUserData, setLoggedInUser] = useState(null);
 
    // useEffect for loading time set data
  useEffect(()=>{
    const logedInUser = localStorage.getItem("loggedInUser")
    if (logedInUser) {
      const userInfo = JSON.parse(logedInUser)
      setUser(userInfo.role);
      setLoggedInUser(userInfo.data)
    
    }
  
 },[])

    // auth  on click
 const setHandleUser = (email, pass) => {
 
  if (email === "admin@gmail.com" && pass === "123") {
    setUser("admin")

    localStorage.setItem("loggedInUser", JSON.stringify({role:'admin',data:authData.admin}))
  } else if (authData) {
    const employe = authData.employe.find((e) => email ===e.username && pass===e.password);   
    if (employe) {  
      localStorage.setItem("loggedInUser",JSON.stringify({role:'employe',data:employe}))
      setUser("employe")
    }else{
      alert("no find....")
    }
  }else {
    alert("no find")
    alert('try userName: nitesh@gmail.com ,vishal@gmail.com ,akash@gmail.com , shubham@gmail.com, aryan@gmail.com')
    alert("password: pass123")
  }
};

  return<>

   {!user? <Login setHandleUser={setHandleUser}/>:null} 

  {user=="admin" ?<Admin  changeUser={setUser}/>:""}
  {user =="employe"?<EmployeDash  changeUser={setUser}/>:""}
      
  </>
}

export default App;
