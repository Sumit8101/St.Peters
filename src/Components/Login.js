import React from 'react'
import Header from './Header'
import './Login.css'
export default function login() {
  return (
    <>
    <Header />
    <div className='container-fluid log'>
       

<div className="box">
  <div className="form">
    <h2>Login </h2>
    
    <div className="inputBox">
      <i className="fa-solid fa-user"></i>
      <input type="text" placeholder="Username" required='required'/>     
    </div>
    
    <div className="inputBox">
      <i className="fa-solid fa-lock"></i>
      <input type="text" placeholder="Password" required='required'/>  
    </div>
    
      <a href="#"> Forgot Password</a> 
    <input className='loginButton' type="submit" value="Login"/>
     <p> Not a member? <a href="#"> Sign up</a> </p>
    
  
  </div>
</div>
    </div></>
  )
}
