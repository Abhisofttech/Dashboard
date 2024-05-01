import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as Charts } from 'chart.js/auto';
const BarChart = () => {
  

    const data = {
        labels: ['January' , 'February' , 'March' , 'April' , 'May' , 'June' ] ,
        datasets: [
            {
                label: 'Sessions',
                data: [4215, 5312, 6251, 7841, 9821, 14982],
                borderColor: 'black',
                backgroundColor: '#0275D8',
                color: 'red',
                fill: true,
                Boundary: 'end',
                tension: 0.5
            }
        ]  
    };
    const options = {
        maintainAspectRatio : false,
        scales : {
            y : {
                beginAtZero : true
            }
        }
    }
    return (
    <>
     <div className="container-fluid border rounded shadow">
                <div className=" border-bottom p-2 d-flex">
                <i className="bi bi-bar-chart-line-fill me-3"></i> <p>Bar Chart Example</p>
                </div>
                <div className="chart  height">
                    <Bar data={data} options={options} />
                </div>
                <div className=" border-top pt-2 text-secondary d-flex">
                   <p>Updated yesterday at 11:59 PM</p>
                </div>
            </div>
    </>
  )
}

export default BarChart
