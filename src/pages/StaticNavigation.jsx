import React from 'react'
import LayoutForLayouts from '../components/LayoutForLayouts'
import Footer from '../components/Footer'
import '../index.css'

const StaticNavigation = () => {
  
  return (
   <>
   <div className="conainer-fluid static-page d-flex flex-column justify-content-between ">

  
  <LayoutForLayouts head={"Static Navigation"} content={"This page is an example of using static navigation.  The top navigation and side navigation are  static on scroll. Scroll down this page to see an example."}/>
  <Footer />
  </div>
   </>
  )
}

export default StaticNavigation
