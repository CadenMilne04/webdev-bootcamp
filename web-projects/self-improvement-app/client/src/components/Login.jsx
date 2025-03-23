import React, { useState } from 'react'
import "./Login.css"
import axios from "axios"

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  handleLogInClick = async(e) =>{
    e.preventDefault();

    try{
      await axios.post("http://localhost:3001/", {
        email,
        password
      })
    }
    catch(e){
      console.log(e);
    }
  };

  return (
   <>
      <form action="POST">
        <div className="sign-in">
            <h1>Please Sign In:</h1>
            <input onChange={(e)=>{setEmail(e.target.value)}} value={email} className="sign-in-input" type="text" placeholder='Email'/>
            <input onChange={(e)=>{setPassword(e.target.value)}} value={password} className="sign-in-input" type="text" placeholder='Password'/>
            <input type="submit" onClick={handleLogInClick} className="sign-in-button log"/>
        </div>  
      </form> 
   </>
  )
}

export default Login