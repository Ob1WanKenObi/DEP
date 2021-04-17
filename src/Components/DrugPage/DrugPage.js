import React, { useState } from 'react'
import { Statistic } from 'antd'
import SearchBar from '../SearchBar/SearchBar';
import AllChart from '../AllChart/AllChart';
import linechart from '../../common/images/linechart.svg';
import alert from '../../common/images/alert.svg';
import cross from '../../common/images/cross.svg';
import needle from '../../common/images/needle.svg';
import virus from '../../common/images/virus-outline.svg';
import skull from '../../common/images/skull.svg';
import MultiChart from '../MultiCharts/MultiCharts';

const timeLine = ['January', 'February', 'March', 'April', 'May'];
const dataset =    [[3311, 16344, 12334, 19443, 15224],
                    [8311, 16344, 12334, 19443, 15224],
                    [13311, 16344, 12334, 19443, 15224],
                    [18311, 16344, 12334, 19443, 15224],
                    [23311, 16344, 12334, 19443, 15224],
                    [28311, 16344, 12334, 19443, 15224]];
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

const DrugPage = () => {
    const DataType = ['Enforcement of Drug Measures', 'DAPO', "Buddy's Programme", 'De-addiction and Rehabilitation'];
    const [showStats, setShowStats] = useState(true);
    const [typeofData, setTypeOfData] = useState(null);

    const showStatsHandler = () => {
        setShowStats(false);
    }

    const dataTypeHandler = (datatype) => {
        setTypeOfData(datatype);
    }

    let statistics =
        <div className="grid-container-datasearch-2" style={{gridTemplateColumns: "2fr 2fr"}}>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#7aba20" }}>
                <div className="search-data-heading" >Total Enrolment in DAPO</div>
                <div className="search-data-data"><span><img src={linechart} className="mx-2" />16669</span></div>
            </div>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#8d45d9" }}>
                <div className="search-data-heading">Total Students in Buddy Programme</div>
                <div className="search-data-data"><span><img src={linechart} className="mx-2" />120159</span></div>
            </div>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#4870db" }}>
                <div className="search-data-heading">Total Patients in Re-hab centers</div>
                <div className="search-data-data"><span><img src={cross} className="mx-2" />123</span></div>
            </div>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#1cb077" }}>
                <div className="search-data-heading">Total Patients in De-addiction centers</div>
                <div className="search-data-data"><span><img src={needle} className="mx-2" />10764</span></div>
            </div>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#f78820" }}>
                <div className="search-data-heading">People Arrested by Drug Enforcement</div>
                <div className="search-data-data"><span><img src={alert} className="mx-2" />200</span></div>
            </div>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#e3685d" }}>
                <div className="search-data-heading">Cases Registered by Drug Enforcement</div>
                <div className="search-data-data"><span><img src={alert} className="mx-2" />124</span></div>
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

export default DrugPage;

