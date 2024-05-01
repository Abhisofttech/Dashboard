import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({color , title}) => {
  return (
    <>
    <div className={`container-fluid border rounded text-white bg-${color} p-3 mt-2 shadow`}>
           <p>{title} Card</p>
           <hr className='border-dark' />
           <div className="d-flex justify-content-between">
           <Link to="#" className='text-white me-5'> View Details </Link>  <i className="bi bi-chevron-compact-right"></i>
           </div>
    </div>
    </>
  )
}

export default Card
