import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Button } from 'antd';
import { Modal } from 'antd'

const LineChart = ({ timeLine, legend, dataSet, height, width, downloadAsImage }) => {

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


    let chartReference = React.createRef();
    const chart = <Line
        data={
            {
                labels: timeLine,
                datasets: [
                    {
                        label: legend,
                        data: dataSet,
                        borderWidth: 1,
                        borderColor: 'rgb(75, 192, 192)',
                        lineTension: 0,
                        fill: false,
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
                    usePointStyle: true,
                    labels: {
                        boxWidth: 0,
                    },
                    display: false,
                }

            }
        }
    />
    const download = () => {
        const imageLink = chartReference.current.chartInstance.toBase64Image();
        downloadAsImage(imageLink);
    }

    const final = (
        <>
            <h5 className='my-2'>{legend}</h5>
            {chart}
            <Button className='my-2' onClick={download}>Download Chart</Button>
            <Button className='my-2 mx-2' onClick={showModal}>Chart Popup</Button>
            <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000} footer={null}>
                <div className="d-flex justify-content-center">
                    <h5 className='my-4'>{legend}</h5>
                </div>
                <div className="d-flex justify-content-center">
                    <Line
                        data={
                            {
                                labels: timeLine,
                                datasets: [
                                    {
                                        label: legend,
                                        data: dataSet,
                                        borderWidth: 1,
                                        borderColor: 'rgb(75, 192, 192)',
                                        lineTension: 0,
                                        fill: false,
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
                                    usePointStyle: true,
                                    labels: {
                                        boxWidth: 0,
                                    },
                                    display: false,
                                }

                            }
                        }
                    />
                </div>
            </Modal>
        </>
    );

    return (
        final
    );
}

export default LineChart;