import React from 'react'
import Card from '../components/Card'
import AreaChart from '../components/AreaChart'
import BarChart from '../components/BarChart'
import Footer from '../components/Footer'
import Table from '../components/Table'
import Breadcrumb from '../components/BreadCrumb'

const Dashboard = () => {
  return (
    <div>

      <h1>Dashboard</h1>
      <Breadcrumb/>
      <div className="card-container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <Card color='primary' title='Primary' />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Card color='warning' title='Warning' />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Card color='success' title='Success' />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Card color='danger' title='Danger' />
          </div>
        </div>
      </div>
      <div className="chart-conatiner p-3">
        <div className="row">
          <div className="col-12 col-md-6 mt-3">
            <AreaChart />
          </div>
          <div className="col-12 col-md-6 mt-3">
            <BarChart />
          </div>
          <div className="col-12  mt-3">
            <Table/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
