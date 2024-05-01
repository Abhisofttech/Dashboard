import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as Charts } from 'chart.js/auto';
const AreaChart = () => {
    const data = {
        labels: ['Mar 1' , 'Mar 2' , 'Mar 3' , 'Mar 4' , 'Mar 5' , 'Mar 6' , 'Mar 7' , 'Mar 8' , 'Mar 9' , 'Mar 10' , 'Mar 11' , 'Mar 12' , 'Mar 13' ],
        datasets: [
            {
                label: 'Sessions',
                data: [10000, 30162, 26263, 18394, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451 , 35442 ],
                borderColor: 'blue',
                backgroundColor: '#CCE3F7',
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
    console.log(Charts);
    return (
        <>
            <div className="container-fluid border rounded shadow">
                <div className=" border-bottom p-2 d-flex">
                    <i className="bi bi-graph-down me-3"></i> <p>Area Chart Example</p>
                </div>
                <div className="chart p-auto height ">
                    <Line data={data} options={options} />
                </div>
                <div className=" border-top pt-2 text-secondary d-flex">
                   <p>Updated yesterday at 11:59 PM</p>
                </div>
            </div>
        </>
    )
}

export default AreaChart
