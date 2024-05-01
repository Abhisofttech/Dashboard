import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as Charts } from 'chart.js/auto';
const PieChart = () => {
    const data = {
        labels: ['Blue' , 'Yellow' , 'Red', 'Green' ] ,
        datasets: [
            {
                label: 'Sessions',
                data: [42.15, 53.12, 62.51, 78.41],
                borderColor: 'black',
                backgroundColor: ['Blue' , 'Yellow' , 'Red', 'Green'],
               
            }
        ]  
    };
    const option = {
        maintainAspectRatio : false
      }
  return (
    <>
    <div className="container-fluid border rounded shadow ">
                <div className=" border-bottom p-2 d-flex">
                <i className="bi bi-pie-chart-fill me-3"></i> <p>Pie Chart Example</p>
                </div>
                <div className="chart p-auto width height ">
                    <Pie data={data} options={option} />
                </div>
                <div className=" border-top pt-2 text-secondary d-flex">
                   <p>Updated yesterday at 11:59 PM</p>
                </div>
            </div>
    </>
  )
}

export default PieChart
