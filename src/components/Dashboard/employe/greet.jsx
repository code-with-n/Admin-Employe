import { useState } from "react";
import style from "./employe.module.css";
const Greet = () => {
  // const [username,setname] = useState("");
  // if (!data) {
  //   setname("not arrived")
  // }else{
  //   setname(data.username)
  // }
  const onLogOut =()=>{
    localStorage.setItem("loggedInUser",'')
    window.location.reload()
  }
  return (
    <>
      <div className={style.greetlogo}>
        {/* contain user name */}
        <div className={style.greet}>
          Hy <br />
        </div>
        <button className={style.logOutBtn} onClick={onLogOut}>Log Out</button>
      </div>
    </>
  );
};

export default Greet;
