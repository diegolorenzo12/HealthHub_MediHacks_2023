import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [BirthDate, setBirthDate] = useState("");

  const signUp = async (e) => {
    e.preventDefault();

    const apiUrl = 'http://localhost:3001/registerClient';
    const requestData = {
      email,
      password,
      name: Name,
      birth: BirthDate,
    };

    try { // Make the API call
      const response = await axios.post(apiUrl, requestData);
      console.log('API response:', response.data);
    } catch (error) {
      console.error('API error:', error);
    }
  };

  return (
    <div className="containerSingIn">
      <div className="Sign">
        <div className="sign-in-container" class="container">
          <form className="formSingIn" onSubmit={signUp}  >
            <h1 className="h1-1">Create Account</h1>
            <input
              type="Name"
              placeholder="Full Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="BirthDate"
              placeholder="Enter your Birth Date"
              value={BirthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            ></input>
            <input 
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="submit">Sign Up</button>
          </form>
          {/* <a href="/signIn"><button type="submit">Already have an account</button></a> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
