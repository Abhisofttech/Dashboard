import React from 'react'
import Breadcrumb from './BreadCrumb'

const LayoutForLayouts = ({head , content}) => {
  return (
    <>
    <div className="container-fluid">
     <h1 className="display-6 fw-medium">{head}</h1>
     <Breadcrumb/>
     <div className="container-fluid p-4 border border-secondary-subtle rounded ">
        {content}
     </div>
     </div>
    </>
  )
}

export default LayoutForLayouts
