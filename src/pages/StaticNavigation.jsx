import React from 'react'
import LayoutForLayouts from '../components/LayoutForLayouts'
import Footer from '../components/Footer'
import '../index.css'

const StaticNavigation = () => {
  
  return (
   <>
   <div className="conainer-fluid static-page d-flex flex-column justify-content-between ">

  
  <LayoutForLayouts head={"Static Navigation"} content={"This page is an example of using static navigation. By removing the .sb-nav-fixed class from the body , the top navigation and side navigation will become static on scroll. Scroll down this page to see an example."}/>
  <Footer />
  </div>
   </>
  )
}

export default StaticNavigation
