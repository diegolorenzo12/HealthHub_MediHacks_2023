import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import 'bootstrap/dist/css/bootstrap.css'; 


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [BirthDate, setBirthDate] = useState("");



  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        alert("Sign in Successful");
      })
      .catch((error) => {
        console.log(error);
        alert("Email already in use");
      });
  };

  return (

    <div className="sign-in-container" class="container2">
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
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
      <a href="/signIn"><button type="submit">Already have an account</button></a>
    </div>
  );
};

export default SignUp;
