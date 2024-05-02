import React from 'react'
import LayoutForLayouts from '../components/LayoutForLayouts'
import PieChart from '../components/PieChart'
import AreaChart from '../components/AreaChart'
import BarChart from '../components/BarChart'
import Footer from '../components/Footer'

const ChartPage = () => {
  return (
    <>
   
    
    <LayoutForLayouts head='Charts' content='Chart.js is a third party plugin that is used to generate the charts in this template. The charts below have been customized - for further customization options, please visit the official Chart.js documentation . '/>

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
