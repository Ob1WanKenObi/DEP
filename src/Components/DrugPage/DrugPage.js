import React, { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar';
import linechart from '../../common/images/linechart.svg';
import alert from '../../common/images/alert.svg';
import cross from '../../common/images/cross.svg';
import needle from '../../common/images/needle.svg';
import MultiChart from '../MultiCharts/MultiCharts';
import Loader from '../Loader/loader';


const DataType = [
  {
    tableName: 'enforcement_of_drug_measures',
    name: 'Enforcement of Drug Measures',
  },
  {
    tableName: 'rehabilation',
    name: 'De-addiction and Rehabilitation',
  },
];

const DrugPage = () => {
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

    legendArray.push(DataTypeName);
    newArray.splice(0, 1);
    newArray.splice(-2, 2);
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
        fetchedDataset && legends ? (<div className="chart-box">
          <div>
            <MultiChart timeline={fetchedTimeline} datasets={fetchedDataset} legend={legends} dataSource={fetchedDataSource} columns={fetchedColumn} />
          </div>
        </div>) : <Loader />}
    </div>
  )
}

export default DrugPage;

