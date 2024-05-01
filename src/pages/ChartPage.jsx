import React from 'react'
import LayoutForLayouts from '../components/LayoutForLayouts'
import PieChart from '../components/PieChart'
import AreaChart from '../components/AreaChart'
import BarChart from '../components/BarChart'
import Footer from '../components/Footer'

const ChartPage = () => {
  return (
    <>
   
    
    <LayoutForLayouts head='Charts' content='This page is an example of using static navigation. By removing the .sb-nav-fixed class from the body , the top navigation and side navigation will become static on scroll. Scroll down this page to see an example. '/>

    <div className="chart-conatiner p-3">
        <div className="row">
          <div className="col-12  mt-3">
           <AreaChart/>
          </div>
          <div className="col-12 col-md-6 mt-3">
            <BarChart />
          </div>
          <div className="col-12 col-md-6  mt-3">
            <PieChart />
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default ChartPage
