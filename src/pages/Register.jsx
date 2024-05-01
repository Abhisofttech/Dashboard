import React, { useState } from 'react'
import './Login.css';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({})
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pass: '',
    confirmPass: ''
  })
  const userSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    phone: Yup.string().matches(/^\d{10}$/, 'Should be 10 didgits')
      .required('Phone Number is required'),
    email: Yup.string().required('Email is required').email('Invalid Email format'),
    pass: Yup.string()
      .required('Password is required')
      .min(8, 'Password should be at least 8 characters')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
    confirmPass: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('pass')], 'Passwords must match'),
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userSchema.validate(formData, { abortEarly: false })
      navigate('/Login');
    } catch (errors) {
      let newErrors = {}
      errors.inner.forEach((err) => {
        newErrors[err.path] = err.message
      })
      console.log(newErrors)
      setError(newErrors);
    }
  }
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  return (
    <>
      <div className="page-container">
        <form onSubmit={handleSubmit}>
          <div >
            <p className="Heading">Create your  Account</p>
            <div className="input-container">
              <div className="input-box-container">
                <input type="text" value={formData.name} name='name' className="input-box" placeholder='Enter Full Name' onChange={handleInput} />
                <label className="label-box">Full Name<span id='mandtory'>*</span> </label>
              </div>
              
            </div ><br />
            { error.name && <div className='error'>{error.name}</div>}
            <div className="input-container">
              <div className="input-box-container">
                <input type="text" value={formData.phone} name='phone' className="input-box" placeholder='Enter Phone number' onChange={handleInput} />
                <label className="label-box">Phone number<span id='mandtory'>*</span></label>
              </div>
              <br />
            </div >
            { error.phone && <div className='error'>{error.phone}</div>}
            <div className="input-container">
              <div className="input-box-container">
                <input type="email" value={formData.email} name='email' className="input-box" placeholder='Enter Email address' onChange={handleInput} />
                <label className="label-box"> Email address<span id='mandtory'>*</span> </label>
              </div>
            </div > <br />
            { error.email && <div className='error'>{error.email}</div>}
            <div className="input-container">
              <div className="input-box-container">
                <input type="password" value={formData.pass} name='pass' className="input-box pass" autoComplete="username" placeholder='Enter password' onChange={handleInput} />
                <label className="label-box"> Password<span id='mandtory'>*</span></label>
              </div>
              <br />
            </div >
            { error.pass && <div className='error'>{error.pass}</div>}
            <div className="input-container">
              <div className="input-box-container">
                <input type="password" value={formData.confirmPass} name='confirmPass' className="input-box c-pass" autoComplete="current-password" placeholder='Confirm password' onChange={handleInput} />
                <label className="label-box">Confirm Password<span id='mandtory'>*</span></label>
              </div>
<br />
            </div >
            { error.confirmPass && <div className='error'>{error.confirmPass}</div>} <br /><br></br>
            <div className="btn-container mt-3">
              <button className='btn-login' type='submit'>Create Account</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
export default Register
