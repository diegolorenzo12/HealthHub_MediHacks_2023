import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import 'bootstrap/dist/css/bootstrap.css'; 
import { Link } from 'react-router-dom';


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        alert("Sign in succesful");
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid Username/Password");
      });
  };

  return (
    <div className="Sign">
    <div className="sign-in-container" class="container">
        <form onSubmit={signIn}>
          <h1 className="h1-1">Log In</h1>
          <input className="SignIn"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input className="SignIn"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className="SignIn" type="submit">Log In</button>
        </form>
        <a href="/SignUp"><button className="Register" type="submit">Register</button></a>
    </div>
    </div>
    
  );
};

export default SignIn;
