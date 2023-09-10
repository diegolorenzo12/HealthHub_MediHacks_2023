import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'; 

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="containerSingIn">
    <div className="Sign">
      <div className="sign-in-container" class="container">
          <form className="formSingIn">
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
          <a href="/SignUp">Dont have an account? Register</a> 
      </div>
    </div>
    </div>
    
  );
};

export default SignIn;
