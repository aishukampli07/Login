
import React, { useState } from 'react'
const Login = (props) => {
const[email,setEmail] = useState("")
const[password,setPassword] = useState('')

const handleSubmit = (e)=>{
  e.preventDefault()
  console.log(email)
}

  return (
    <>
     <div className="auth-form-container">
    <form  className="login-form" onSubmit={handleSubmit}>


      <label htmlFor = "email">Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='youremail@gmail.com' id="email" name='email'></input>


      
     <label htmlFor = "password">Password</label>
     <input value={password} onChange={(e) =>setPassword(e.target.value)} placeholder='' id='password' name='password'></input>

     
     <button type='submit'>Log In</button>
    
    </form>
    <button className="link-btn" onClick={() => {props.onFormSwitch('SignUp')}}>Don't have a account? SignUp</button>
    </div>
    
    </>
    
  )
}

export default Login
