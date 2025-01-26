import { useState } from "react";
import style from "./login.module.css";
const Login = ({setHandleUser}) => {

    const [email, setEmail] = useState('');
    const [pass,setPass] = useState('')
    const submitHandler = (e)=>{
        e.preventDefault();
       setHandleUser(email,pass)
       setEmail("")
       setPass("")

        
    }
  return (
    <>
      <div className={style.loginContainer}>
        <div className={style.login}>
          <h4>Login</h4>
          <form action="" className={style.form} onSubmit={(e)=>submitHandler(e)}>
        
              <input required type="email" placeholder="enter your email" className={style.input} value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <input required  type="password" placeholder="enter your password" className={style.input} value={pass}  onChange={(e)=>setPass(e.target.value)} />
            
            <button className={style.logInButton}>Log In</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
