import React, { useState } from 'react'
import SearchBar from '../SearchBarCovid/SearchBarCovid';
import alert from '../../common/images/alert.svg';
import linechart from '../../common/images/linechart.svg';
import MultiChart from '../MultiCharts/MultiCharts';
import Loader from '../Loader/loader';


const Positivity = () => {
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

    const fetchedDataHandler = (data, column, dataSource, timeLine) => {
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

        legendArray.push("Contact Positivity");
        newArray.splice(0, 1);
        setFetchedDataset(newArray);
        setLegends(legendArray);
    }

    const dataTypeHandler = (data, column, dataSource, timeLine) => {
        fetchedDataHandler(data, column, dataSource, timeLine);
    }

    let statistics =
        <div className="grid-container-datasearch-2" style={{ gridTemplateColumns: "2fr 2fr" }}>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#7aba20" }}>
                <div className="search-data-heading" >Total Samples Collected in Last Month</div>
                <div className="search-data-data"><span><img src={linechart} className="mx-2" />6548</span></div>
            </div>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#1cb077" }}>
                <div className="search-data-heading">Total Positive Samples in Last Month</div>
                <div className="search-data-data"><span><img src={alert} className="mx-2" />679</span></div>
            </div>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#f78820" }}>
                <div className="search-data-heading">Overall Positivity Percentage</div>
                <div className="search-data-data"><span><img src={linechart} className="mx-2" />10.37%</span></div>
            </div>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#e3685d" }}>
                <div className="search-data-heading">District with Highest positivity</div>
                <div className="search-data-data"><span><img src={alert} className="mx-2" />Ropar</span></div>
            </div>
        </div>



    return (
        <div>
            <div><SearchBar statsoffaHandler={showStatsHandler} typeOfDataHandler={dataTypeHandler} apiURL='positivityquery' /></div>
            {showStats ? statistics :
                fetchedDataset && legends ? (<div className="chart-box">
                    <div>
                        <MultiChart timeline={fetchedTimeline} datasets={fetchedDataset} legend={legends} dataSource={fetchedDataSource} columns={fetchedColumn} />
                    </div>
                </div>) : <Loader />}
        </div>
    )
}

export default Positivity;

