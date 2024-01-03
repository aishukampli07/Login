import React, { useState } from 'react'
import './App.css';
import Login from './Components/LoginSignup/Login';
import SignUp from './Components/LoginSignup/SignUp';

function App() {
  const[currentForm,setCurrentForm] = useState('Login')

  const toggleForm = (formName) =>{
    setCurrentForm(formName);
  }
  return (
    <div className="App">
     {
           currentForm === Login? <Login onFormSwitch={toggleForm}/> : <SignUp onFormSwitch={toggleForm}/>
     } 
    </div>
  );
}

export default App;




