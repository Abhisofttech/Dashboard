import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
   <>
   <div className="container-fluid footer d-flex align-center justify-content-between mt-5">
    <p>Copyright © Dummy Website 2023</p>
    <p className='text-grey'>
        <Link to='/' >Privacy Policy</Link> . 
        <Link to='/' >Terms & Conditions</Link>
    </p>
   </div>
   </>
  )
}

export default Footer
