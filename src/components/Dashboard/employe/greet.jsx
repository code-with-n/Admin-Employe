import { useState } from "react";
import style from "./employe.module.css";

const Greet = ({  changeUser }) => {
  const empName = JSON.parse(localStorage.getItem("loggedInUser"));
  

  const onLogOut = () => {
    localStorage.setItem("loggedInUser", "");

    changeUser("");
  };

  return (
    <>
      <div className={style.greetlogo}>
        {/* contain user name */}
        <div className={style.greet}>
          Hy <br />
          {empName.data.name }
        </div>
        <button className={style.logOutBtn} onClick={onLogOut}>
          Log Out
        </button>
      </div>
    </>
  );
};

export default Greet;
