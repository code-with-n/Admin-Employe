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
import { useDispatch } from "react-redux";
import { actions } from "./redux-state";

function App() {
  setLocalStorage();
  // localStorage.clear()
  const {authData} = useContext(AuthContext)

  
 const [user,setUser] = useState(null);
 const [loggedInUserData, setLoggedInUser] = useState(null);
  const dispatch = useDispatch();
  useEffect(()=>{
    // setLocalStorage()
    // localStorage.clear()
    const logedInUser = localStorage.getItem("loggedInUser")
    if (logedInUser) {
      const userInfo = JSON.parse(logedInUser)
      setUser(userInfo.role);
      console.log(userInfo.role)
      setLoggedInUser(userInfo.data)
      // window.location.reload()
    }
  
 },[])
 const setHandleUser = (email, pass) => {
  dispatch(actions.addEmploye({items:authData.employe,email}))
  if (email === "admin@me.com" && pass === "123") {
    // setUser("admin")
    localStorage.setItem("loggedInUser", JSON.stringify({role:'admin',data:authData.admin}))
    window.location.reload()
  } else if (authData) {
    const employe = authData.employe.find((e) => email ===e.username && pass===e.password);
    
    if (employe) {
     
      localStorage.setItem("loggedInUser",JSON.stringify({role:'employe',data:employe}))
      window.location.reload();
    }else{
      alert("no find....")
    }
    // dispatch(actions.employeName({employe:email}))
  }else {
    alert("no find")
  }
};

  return<>

   {!user? <Login setHandleUser={setHandleUser}/>:null} 

  {user=="admin" ?<Admin/>:""}
  {user =="employe"?<EmployeDash data={loggedInUserData}/>:""}
    

   
  </>
}

export default App;
