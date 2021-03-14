import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ timeLine, legend, dataSet, height, width }) => {

    return (
        <Line
            data={
                {
                    labels: timeLine,
                    datasets: [
                        {
                            label: legend,
                            data: dataSet,
                            borderWidth: 1,
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            lineTension: 0,
                        }
                    ]
                }
            }
            height={height}
            width={width}
            options={
                {
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },

                }
            }
        />
    );
}

export default LineChart;