import { useRef, useState } from "react";
import "./register.scss";

const Register = () => {
    const [email, setEmail]= useState("")
    const emailRef = useRef()

    const  handleStart=()=>{
        setEmail(emailRef.current.value)
        console.log(email)
    }
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="./netflix_logo.png" alt="logo" />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>
          Ready to watch ? Enter your email to create or restart your membership
        </p>
      <div className="input">
        <input type="email" placeholder="email address" ref={emailRef} />
        <button onClick={handleStart} className="registerButton">Get started</button>
      </div>
      </div>
    </div>
  );
};

export default Register;
