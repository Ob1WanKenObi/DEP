import React, { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar';
import linechart from '../../common/images/linechart.svg';
import alert from '../../common/images/alert.svg';
import cross from '../../common/images/cross.svg';
import needle from '../../common/images/needle.svg';
import skull from '../../common/images/skull.svg';
import MultiChart from '../MultiCharts/MultiCharts';

const timeLine = ['January', 'February', 'March', 'April', 'May'];
const dataset = [[3311, 16344, 12334, 19443, 15224],
[8311, 16344, 12334, 19443, 15224],
[13311, 16344, 12334, 19443, 15224],
[18311, 16344, 12334, 19443, 15224],
[23311, 16344, 12334, 19443, 15224],
[28311, 16344, 12334, 19443, 15224]];

const DataType = [
  {
    tableName: 'covid',
    name: 'Covid-19 Data',
  }
];

const columns = [
  {
    title: 'Month',
    dataIndex: 'Month',
    fixed: 'left',
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
    sorter: (a, b) => a.d2 - b.d2,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Data3',
    dataIndex: 'd3',
    sorter: (a, b) => a.d3 - b.d3,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Data4',
    dataIndex: 'd4',
    sorter: (a, b) => a.d4 - b.d4,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Data5',
    dataIndex: 'd5',
    sorter: (a, b) => a.d5 - b.d5,
    sortDirections: ['descend', 'ascend'],
  },
];

const Covidpage = () => {
  const [fetchedColumn, setfetchedColumn] = useState(null);
  const [fetchedDataSource, setfetchedDataSource] = useState(null);
  const [showStats, setShowStats] = useState(true);
  const [typeofData, setTypeOfData] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);
  const [fetchedDataset, setFetchedDataset] = useState(null);


  const showStatsHandler = () => {
    setShowStats(false);
  }

  const fetchedDataHandler = (data, column, dataSource) => {
    setFetchedData(data);
    setfetchedColumn(column);
    setfetchedDataSource(dataSource);
    const newArray = column.map(({ title }) => {
      const columnArray = data.map((row) => {
        return row[title];
      });
      return columnArray;
    });
    console.log('TwoDEEARRAY', newArray);
    setFetchedDataset(newArray);
  }

  const dataTypeHandler = (datatype, data, column, dataSource) => {
    const getDataTypeName = DataType.filter(obj => obj.tableName === datatype)[0].name;
    setTypeOfData(getDataTypeName);
    fetchedDataHandler(data, column, dataSource);
  }
  let statistics =
    <div className="grid-container-datasearch-2">
      <div className="grid-item-datasearch-2" style={{ backgroundColor: "#f78820" }}>
        <div className="search-data-heading" >Total Cases</div>
        <div className="search-data-data"><span><img src={linechart} className="mx-2" />205189</span></div>
      </div>
      <div className="grid-item-datasearch-2" style={{ backgroundColor: "#e3685d" }}>
        <div className="search-data-heading">Total Deaths</div>
        <div className="search-data-data"><span><img src={skull} className="mx-2" />6204</span></div>
      </div>
      <div className="grid-item-datasearch-2" style={{ backgroundColor: "#7aba20" }}>
        <div className="search-data-heading">Total Recovered</div>
        <div className="search-data-data"><span><img src={cross} className="mx-2" />185762</span></div>
      </div>
      <div className="grid-item-datasearch-2" style={{ backgroundColor: "#8d45d9" }}>
        <div className="search-data-heading">Active Cases</div>
        <div className="search-data-data"><span><img src={alert} className="mx-2" />8020</span></div>
      </div>
      <div className="grid-item-datasearch-2" style={{ backgroundColor: "#4870db" }}>
        <div className="search-data-heading">Vaccinations Done</div>
        <div className="search-data-data"><span><img src={needle} className="mx-2" />3%</span></div>
      </div>
      <div className="grid-item-datasearch-2" style={{ backgroundColor: "#1cb077" }}>
        <div className="search-data-heading">Vaccinations Left</div>
        <div className="search-data-data"><span><img src={needle} className="mx-2" />97%</span></div>
      </div>
    </div>



  return (
    <div>
      <div><SearchBar Datatypes={DataType} statsoffaHandler={showStatsHandler} typeOfDataHandler={dataTypeHandler} /></div>
      {showStats ? statistics :
        <div className="chart-box">
          <div>
            <MultiChart timeline={timeLine} datasets={dataset} legend={`${typeofData} per month`} dataSource={fetchedDataSource} columns={fetchedColumn} />
          </div>
        </div>}
    </div>
  )
}

export default Covidpage;

