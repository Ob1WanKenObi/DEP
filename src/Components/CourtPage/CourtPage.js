import React, { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar';
import linechart from '../../common/images/linechart.svg';
import alert from '../../common/images/alert.svg';
import chfile from '../../common/images/checkfile.svg';
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
    tableName: 'civil_court',
    name: 'Civil Court',
  },
  {
    tableName: 'criminal_court',
    name: 'Criminal Court',
  },
];


const CourtPage = () => {
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
    <div className="grid-container-datasearch-2" style={{ gridTemplateColumns: "2fr 2fr" }}>
      <div className="grid-item-datasearch-2" style={{ backgroundColor: "#4870db" }}>
        <div className="search-data-heading" >Total Pending Cases</div>
        <div className="search-data-data"><span><img src={alert} className="mx-2" />1048</span></div>
      </div>
      <div className="grid-item-datasearch-2" style={{ backgroundColor: "#f78820" }}>
        <div className="search-data-heading">Cases closed Last Month</div>
        <div className="search-data-data"><span><img src={chfile} className="mx-2" />231</span></div>
      </div>
      <div className="grid-item-datasearch-2" style={{ backgroundColor: "#e3685d" }}>
        <div className="search-data-heading">Cases pending for more than a year</div>
        <div className="search-data-data"><span><img src={linechart} className="mx-2" />72</span></div>
      </div>
      <div className="grid-item-datasearch-2" style={{ backgroundColor: "#8d45d9" }}>
        <div className="search-data-heading">Cases pending for more than 6 months</div>
        <div className="search-data-data"><span><img src={alert} className="mx-2" />123</span></div>
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

export default CourtPage;

