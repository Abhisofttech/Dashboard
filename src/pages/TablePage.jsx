import React from 'react'
import LayoutForLayouts from '../components/LayoutForLayouts'
import Footer from '../components/Footer'
import Table from '../components/Table'

const TablePage = () => {
  return (
  <>
  <LayoutForLayouts head='Tables' content='DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the official DataTables documentation . ' />
  <Table/>
  <br />
  <Footer/>
  </>
  )
}

export default TablePage
