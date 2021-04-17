import React, { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar';
import AllChart from '../AllChart/AllChart';
import alert from '../../common/images/alert.svg';
import rupee from '../../common/images/currency-inr.svg';
import MultiChart from '../MultiCharts/MultiCharts';

const timeLine = ['January', 'February', 'March', 'April', 'May'];
const dataset =    [[3311, 18344, 10334, 19443, 15224],
                    [8311, 17344, 12334, 17443, 19224],
                    [13311, 16344, 14334, 15443, 11224],
                    [18311, 15344, 14334, 15443, 15224],
                    [23311, 14344, 12334, 17443, 17224],
                    [28311, 13344, 10334, 19443, 13224]];
const dataSource = [
  {
    key: '1',
    Month: 'January',
    d1: '3311',
    d2: '8311',
    d3: '13311',
    d4: '18311',
    d5: '23311',
    d6: '28311',
  },
  {
    key: '2',
    Month: 'February',
    d1: '18344',
    d2: '17344',
    d3: '16344',
    d4: '15344',
    d5: '14344',
    d6: '13344',
  },
  {
    key: '3',
    Month: 'March',
    d1: '10334',
    d2: '12334',
    d3: '14334',
    d4: '14334',
    d5: '12334',
    d6: '10334',
  },
  {
    key: '4',
    Month: 'April',
    d1: '19443',
    d2: '17443',
    d3: '15443',
    d4: '15443',
    d5: '17443',
    d6: '19443',
  },
  {
    key: '5',
    Month: 'May',
    d1: '15224',
    d2: '19224',
    d3: '11224',
    d4: '15224',
    d5: '17224',
    d6: '13224',
  },
];
const columns = [
    {
      title: 'Month',
      dataIndex: 'Month',
    },
    {
      title: 'Data1',
      dataIndex: 'd1',
      sorter: (a, b) => a.d1 - b.d1,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Data2',
      dataIndex: 'd2',
    },
    {
      title: 'Data3',
      dataIndex: 'd3',
    },
    {
      title: 'Data4',
      dataIndex: 'd4',
    },
    {
      title: 'Data5',
      dataIndex: 'd5',
    },
  ];

const RevenuePage = () => {
    const DataType = ['Collection of Excise', 'Collection of GST', 'Collection of Motor Vehicle Tax', 'Collection of Stamp Duty'];
    const [showStats, setShowStats] = useState(true);
    const [typeofData, setTypeOfData] = useState(null);

    const showStatsHandler = () => {
        setShowStats(false);
    }

    const dataTypeHandler = (datatype) => {
        setTypeOfData(datatype);
    }

    let statistics =
        <div className="grid-container-datasearch-2" style={{ gridTemplateColumns: "2fr 2fr" }}>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#1cb077" }}>
                <div className="search-data-heading" >Revenue Collection in 2020</div>
                <div className="search-data-data"><span><img src={rupee} className="mx-2" />20,18,30,670</span></div>
            </div>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#f78820" }}>
                <div className="search-data-heading">Revenue Collection in 2021</div>
                <div className="search-data-data"><span><img src={rupee} className="mx-2" />5,46,68,640</span></div>
            </div>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#e3685d" }}>
                <div className="search-data-heading">Expected Collection in 2021</div>
                <div className="search-data-data"><span><img src={rupee} className="mx-2" />21,02,64,000</span></div>
            </div>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#7aba20" }}>
                <div className="search-data-heading">Percentage collected by far</div>
                <div className="search-data-data"><span><img src={alert} className="mx-2" />26%</span></div>
            </div>
        </div>



    return (
        <div>
            <div><SearchBar Datatypes={DataType} statsoffaHandler={showStatsHandler} typeOfDataHandler={dataTypeHandler} /></div>
            {showStats ? statistics : 
            <div className="chart-box">
                <div>
                    <MultiChart timeline={timeLine} datasets={dataset} legend={`${typeofData} per month`} dataSource={dataSource} columns={columns}/>
                </div>
            </div>}
        </div>
    )
}

export default RevenuePage;

