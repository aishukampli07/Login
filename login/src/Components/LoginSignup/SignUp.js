import React, { useState } from 'react'

const SignUp = (props) => {

const[email,setEmail] = useState("")
const[password,setPassword] = useState('')
const[name,setName] = useState('')

const handleSubmit = (e)=>{
  e.preventDefault()
  console.log(email)
}

  return (
    <>
     <div className="auth-form-container">
    <form className=" SignUP-form" onSubmit={handleSubmit}>
    <div>
    <label htmlFor = "name">Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder='full name' id="name" name='name'></input>
    </div>
    <div>
      <label htmlFor = "email">Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='youremail@gmail.com' id="email" name='email'></input>
      </div>
      <div>
     <label htmlFor = "password">Password</label>
     <input value={password} onChange={(e) =>setPassword(e.target.value)} placeholder='' id='password' name='password'></input>
     </div>
     <button type='submit'>Sign up</button>
    
    </form>
    
    <button className="link-btn" onClick={() => {props.onFormSwitch('Login')}}> Already have a account? Login here</button>
    </div>
    </>
  )
}

export default SignUp
