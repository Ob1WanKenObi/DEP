import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Button } from 'antd';
import { Modal } from 'antd';

const DoughnutChart = ({ timeLine, legend, dataSet, height, width, downloadAsImage }) => {
    let chartReference = React.createRef();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const backgroundColor = [
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
            <Button className='my-2 mx-2' onClick={showModal}>Chart Popup</Button>
            <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000} footer={null}>
                <div className="d-flex justify-content-center">
                    <h5 className='my-4'>{legend}</h5>
                </div>
                <div className="d-flex justify-content-center">
                    <Doughnut
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
                        height={500}
                        width={550}
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
                    />
                </div>
            </Modal>

        </>
    )


    return (
        final
    );
}

export default DoughnutChart;