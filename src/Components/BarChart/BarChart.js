import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Button } from 'antd';

const BarChart = ({ timeLine, dataSet, legend, height, width, downloadAsImage }) => {

    function rainbow(numOfSteps, step) {
        var r, g, b;
        var h = step / numOfSteps;
        var i = ~~(h * 6);
        var f = h * 6 - i;
        var q = 1 - f;
        switch (i % 6) {
            case 0: r = 1; g = f; b = 0; break;
            case 1: r = q; g = 1; b = 0; break;
            case 2: r = 0; g = 1; b = f; break;
            case 3: r = 0; g = q; b = 1; break;
            case 4: r = f; g = 0; b = 1; break;
            case 5: r = 1; g = 0; b = q; break;
        }
        var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
        return (c);
    }

    let chartReference = React.createRef();
    // const bgColor = ["#fc8662", "#fcd181", "#b4e874", "#76e8c0", "#76cce8", "#7876e8",];
    const bgColor = dataSet.map((data, index) => rainbow(dataSet.length, index + 1));

    const chart = (<Bar
        data={{
            labels: timeLine,
            datasets: [
                {
                    label: legend,
                    data: dataSet,
                    borderWidth: 1,
                    backgroundColor: '#77b9e6',
                }
            ]
        }}
        height={height}
        width={width}
        ref={chartReference}
        options={{
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
                usePointStyle: true,
                labels: {
                    boxWidth: 0,
                },
                display: false,
            }

        }} />);

    const download = () => {
        const imageLink = chartReference.current.chartInstance.toBase64Image();
        downloadAsImage(imageLink);
    }

    const final = (
        <>
            <h5 className='my-2'>{legend}</h5>
            {chart}
            <Button className='my-2' onClick={download}>Download Chart</Button>
        </>
    )

    return (
        final
    );
}

export default BarChart;