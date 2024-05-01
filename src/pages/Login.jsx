import React , {useState} from 'react'
import './Login.css';
import * as Yup from 'yup';
import { useNavigate} from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({})
  const [formData, setFormData] = useState({
     email: '',
    pass: ''
  })
  const userSchema = Yup.object({
    email: Yup.string().required('Email is required').email('Invalid Email format'),
    pass: Yup.string()
      .required('Password is required')
      .min(8, 'Password should be at least 8 characters')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userSchema.validate(formData, { abortEarly: false })
     
      navigate('/');
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
      <div className="page-container ">
        <form onSubmit={handleSubmit}>
          <div >
            <p className="Heading">Login to your Account</p>
            <div className="input-container">
              <div className="input-box-container">
                <input type="email" value={formData.email} name='email' className="input-box" placeholder='Enter email address' onChange={handleInput}/>
                <label className="label-box">Enter Email </label>
              </div>
            </div > <br />
            { error.email && <div className='error'>{error.email}</div>}
            <div className="input-container">
              <div className="input-box-container">
                <input type="password" value={formData.pass} name='pass' className="input-box" placeholder='Enter password' onChange={handleInput}/>
                <label className="label-box">Enter Password </label>
              </div>
              <br />
            </div >
            { error.pass && <div className='error'>{error.pass}</div>}
          </div>
          <div className="btn-container">
            <button className='btn-login' type='submit'>Login</button>
          </div>
        </form>
      </div>
    </>
  )
}
export default Login

