import React, { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar';
import linechart from '../../common/images/linechart.svg';
import alert from '../../common/images/alert.svg';
import chfile from '../../common/images/checkfile.svg';
import MultiChart from '../MultiCharts/MultiCharts';
import Loader from '../Loader/loader';

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
  const [fetchedTimeline, setFetchedTimeline] = useState(null);
  const [legends, setLegends] = useState(null);


  const showStatsHandler = () => {
    setShowStats(false);
  }

  const fetchedDataHandler = (data, column, dataSource, timeLine, DataTypeName) => {
    setFetchedData(data);
    setfetchedColumn(column);
    setfetchedDataSource(dataSource);
    setFetchedTimeline(timeLine);
    const newArray = column.map(({ title }) => {
      const columnArray = data.map((row) => {
        return row[title];
      });
      return columnArray;
    });
    const legendArray = column.filter(({ title }) => {
      return title !== 'month' && title !== 'year' && title !== 'district'
    }).map(({ title }) => title);

    console.log('Courts 2-D Array before', newArray);
    console.log('Courts Legends Array before', legendArray);
    legendArray.push(DataTypeName);
    newArray.splice(0, 1);
    newArray.splice(-2, 2);
    console.log('Courts 2-D Array', newArray);
    console.log('Courts Legends Array', legendArray);
    setFetchedDataset(newArray);
    setLegends(legendArray);
    setTypeOfData(DataTypeName);
  }

  const dataTypeHandler = (datatype, data, column, dataSource, timeLine) => {
    const getDataTypeName = DataType.filter(obj => obj.tableName === datatype)[0].name;
    fetchedDataHandler(data, column, dataSource, timeLine, getDataTypeName);
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
        fetchedDataset && legends ? (<div className="chart-box">
          <div>
            <MultiChart timeline={fetchedTimeline} datasets={fetchedDataset} legend={legends} dataSource={fetchedDataSource} columns={fetchedColumn} />
          </div>
        </div>) : <Loader />}
    </div>
  )
}

export default CourtPage;

