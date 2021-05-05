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
    const bgColor = ["#fc8662","#fcd181","#b4e874","#76e8c0","#76cce8","#7876e8",];
    /*dataSet.map((data, index) => rainbow(dataSet.length, index + 1));*/

    const chart = (<Bar
        data={{
            labels: timeLine,
            datasets: [
                {
                    label: legend,
                    data: dataSet,
                    borderWidth: 1,
                    backgroundColor: bgColor,
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
                    }
                }]
            }
        }} />);

    const download = () => {
        const imageLink = chartReference.current.chartInstance.toBase64Image();
        downloadAsImage(imageLink);
    }

    const final = (
        <>
            <Button onClick={download}>Download Chart</Button>
            {chart}
        </>
    )

    return (
        final
    );
}

export default BarChart;