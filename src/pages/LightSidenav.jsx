import React from 'react'
import LayoutForLayouts from '../components/LayoutForLayouts'
import Footer from '../components/Footer'
import '../index.css'
const LightSidenav = () => {
  return (
    <>
    <div className="conainer-fluid lightNav d-flex flex-column justify-content-between">


    
    <LayoutForLayouts head={"Sidenav Light"} content={"This page is an example of using the light side navigation option. By appending the .sb-sidenav-light class to the .sb-sidenav class, the side navigation will take on a light color scheme. The .sb-sidenav-dark is also available for a darker option."}/>
    <Footer/>
    </div>
    </>
  )
}

export default LightSidenav
