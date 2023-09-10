import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const signIn = async (e) => {
    e.preventDefault();

    const apiUrl = 'http://localhost:3001/loginClient';
    const requestData = {
      email,
      password,
    };

    try { // Make the API call
      const response = await axios.post(apiUrl, requestData);
      console.log('API response:', response.data);
      if(response.data.message === "Login successful"){ 
        localStorage.setItem('token', response.data.token);
      }
    } catch (error) {
      console.error('API error:', error);
    }
  };

  return (
    <div className="containerSingIn">
    <div className="Sign">
      <div className="sign-in-container" class="container">
          <form className="formSingIn" onSubmit={signIn} >
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
