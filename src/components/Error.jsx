import React from 'react'
import { Link } from 'react-router-dom'
const Error = ({error}) => {
  return (
 <>
 <div className="container d-flex align-items-center flex-column">
    <h3>Page</h3>
 <h1 className="display-1 text-danger">{error}</h1>
 <h3>Access to this resource is denied.</h3>
 <h5> &larr;<Link to="/">  Return To DashBoard</Link></h5>
 </div>
 </>
  )
}

export default Error
