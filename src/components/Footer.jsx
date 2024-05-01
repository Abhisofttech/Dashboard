import React from 'react'
import '../index.css'
const Footer = () => {
  return (
   <>
   <div className="container-fluid footer d-flex align-center justify-content-between mt-5">
    <p>Copyright © Dummy Website 2023</p>
    <p className='text-grey'>
        <a href="#">Privacy Policy</a> . 
        <a href="#">Terms & Conditions</a>
    </p>
   </div>
   </>
  )
}

export default Footer
