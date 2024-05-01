import React, { useState } from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';

const ForgetPass = () => {
const [email , setEmail] = useState('');
const navigate = useNavigate();
  const handleSubmit =  () => {
    
      navigate('/Login');
     
    }
  
  const handleInput = (e) => {
    const  emailId = e.target.value;
    setEmail(emailId);
    console.log(emailId);
  }
  return (
    <>
      <div className="page-container">
        <form onSubmit={handleSubmit}>
        <div >
          <p className="Heading">Password Recovery</p>
          <p className='info' >Enter your email address and we will send you a link to reset your password.</p>
          <div className="input-container">
            <div className="input-box-container">
              <input type="email" value={email} className="input-box" placeholder='Enter Email address' required onChange={handleInput}/>
              <label className="label-box"> Email address<span id='mandtory'>*</span> </label>
            </div>
          </div > <br />
          <div className="btn-container">
            <button className='btn-login' type='submit'>Forget Password</button>
          </div>
        </div>
        </form>
      </div>
    </>
  )
}



export default ForgetPass
