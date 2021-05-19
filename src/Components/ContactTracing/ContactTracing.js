import React, { useState } from 'react'
import SearchBar from '../SearchBarCovid/SearchBarCovid';
import alert from '../../common/images/alert.svg';
import linechart from '../../common/images/linechart.svg';
import MultiChart from '../MultiCharts/MultiCharts';
import Loader from '../Loader/loader';


const ContactTracing = () => {
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
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#1cb077" }}>
                <div className="search-data-heading" >Total Contacts Traced in last Month</div>
                <div className="search-data-data"><span>29,230</span></div>
            </div>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#f78820" }}>
                <div className="search-data-heading">Total Positive Cases Traced in Last Month</div>
                <div className="search-data-data"><span>2,460</span></div>
            </div>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#e3685d" }}>
                <div className="search-data-heading">Percentage of Contacts Traced</div>
                <div className="search-data-data"><span>88.3%</span></div>
            </div>
            <div className="grid-item-datasearch-2" style={{ backgroundColor: "#7aba20" }}>
                <div className="search-data-heading">Average Contacts per Case</div>
                <div className="search-data-data"><span>22.5</span></div>
            </div>
        </div>



    return (
        <div>
            <div><SearchBar statsoffaHandler={showStatsHandler} typeOfDataHandler={dataTypeHandler} /></div>
            {showStats ? statistics :
                fetchedDataset && legends ? (<div className="chart-box">
                    <div>
                        <MultiChart timeline={fetchedTimeline} datasets={fetchedDataset} legend={legends} dataSource={fetchedDataSource} columns={fetchedColumn} />
                    </div>
                </div>) : <Loader />}
        </div>
    )
}

export default ContactTracing;

