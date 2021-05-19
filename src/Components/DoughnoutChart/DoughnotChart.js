import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Button } from 'antd';

const DoughnutChart = ({ timeLine, legend, dataSet, height, width, downloadAsImage }) => {
    let chartReference = React.createRef();
    const backgroundColor = [
        // "#0074D9",
        // "#FF4136",
        // "#2ECC40",
        // "#FF851B",
        // "#7FDBFF",
        // "#B10DC9",
        // "#FFDC00",
        // "#001f3f",
        // "#39CCCC",
        // "#01FF70",
        // "#85144b",
        // "#F012BE",
        // "#3D9970",
        // "#111111",
        // "#AAAAAA",
        "#77b9e6",
        "#CD5C5C",
        "#77b9e6",
        "#CD5C5C",
        "#77b9e6",
        "#CD5C5C",
        "#77b9e6",
        "#CD5C5C",
        "#77b9e6",
        "#CD5C5C",
        "#77b9e6",
        "#CD5C5C",
        "#77b9e6",
        "#CD5C5C",
        "#77b9e6",
        "#CD5C5C",
        "#77b9e6",
        "#CD5C5C",
        "#77b9e6",
        "#CD5C5C",
        "#77b9e6",
        "#CD5C5C",
        "#77b9e6",
        "#CD5C5C",
        "#77b9e6",
        "#CD5C5C",
        "#77b9e6",
        "#CD5C5C",
        "#77b9e6",
        "#CD5C5C",
        "#77b9e6",
        "#CD5C5C",
        "#77b9e6",
        "#CD5C5C",
        "#77b9e6",
        "#CD5C5C",

    ];

    const chart = <Doughnut
        data={
            {
                labels: timeLine,
                datasets: [
                    {
                        label: legend,
                        data: dataSet,
                        borderWidth: 1,
                        backgroundColor: backgroundColor,
                    }
                ]
            }
        }
        height={height}
        width={width}
        ref={chartReference}
        options={
            {
                responsive: false,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        }

                    }],
                    xAxes: [
                        {
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            }
                        }
                    ]
                },
                legend: {
                    display: false
                }

            }
        }
    />;

    const download = () => {
        const imageLink = chartReference.current.chartInstance.toBase64Image();
        downloadAsImage(imageLink);
    }

    const final = (
        <>
            <h5 className='my-2'>{legend}</h5>
            {chart}
            <Button className="my-2" onClick={download} >Download Chart</Button>

        </>
    )


    return (
        final
    );
}

export default DoughnutChart;