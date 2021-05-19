import React, { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar';
import linechart from '../../common/images/linechart.svg';
import needle from '../../common/images/needle.svg';
import cross from '../../common/images/cross.svg'
import MultiChart from '../MultiCharts/MultiCharts';
import Loader from '../Loader/loader';



const DataType = [
  {
    tableName: 'vaccination_data',
    name: 'Vaccination Data',
  },
  {
    tableName: 'upgradation_of_infrastructure',
    name: 'Upgradation of Infrastructure',
  }
];


const HealthcarePage = () => {
  //const DataType = ['Vaccination Data', 'Upgradation of Infrastructure', 'National Health Mission Schemes', 'Sarbat Sehat Bima Yojna (SSBY)'];
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
    const getDataTypeName = DataType.filter(obj => obj.tableName === datatype)[0].name;;
    fetchedDataHandler(data, column, dataSource, timeLine, getDataTypeName);
  }

  let statistics =
    <div className="grid-container-datasearch-2" style={{ gridTemplateColumns: "2fr 2fr" }}>
      <div className="grid-item-datasearch-2" style={{ backgroundColor: "#8d45d9" }}>
        <div className="search-data-heading" >Less than 1 year olds Immunized - 2020 </div>
        <div className="search-data-data"><span><img src={needle} className="mx-2" />16598</span></div>
      </div>
      <div className="grid-item-datasearch-2" style={{ backgroundColor: "#4870db" }}>
        <div className="search-data-heading">Less than 1 year olds Immunity Target - 2020</div>
        <div className="search-data-data"><span><img src={needle} className="mx-2" />17151</span></div>
      </div>
      <div className="grid-item-datasearch-2" style={{ backgroundColor: "#1cb077" }}>
        <div className="search-data-heading">Dengue Cases found this year</div>
        <div className="search-data-data"><span><img src={cross} className="mx-2" />149</span></div>
      </div>
      <div className="grid-item-datasearch-2" style={{ backgroundColor: "#7aba20" }}>
        <div className="search-data-heading">Immunity Target Progress</div>
        <div className="search-data-data"><span><img src={linechart
        } className="mx-2" />26%</span></div>
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

export default HealthcarePage;

