import React from 'react';
import { Tabs, Table } from "antd";
import ChooseChart from "../ChooseChart/ChooseChart";

const { TabPane } = Tabs;

function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}


const MultiCharts = ({ datasets, legend, timeline, dataSource, columns }) => {

    const changeHandler = (key) => { };
    const listData1 = datasets.map((datasets) =>
        <div className="multi-chart-grid-item">
            <ChooseChart timeline={timeline} datasets={datasets} legend={legend} chart={1} />
        </div>);
    const listData0 = datasets.map((datasets) =>
        <div className="multi-chart-grid-item">
            <ChooseChart timeline={timeline} datasets={datasets} legend={legend} chart={0} />
        </div>);
    const listData2 = datasets.map((datasets) =>
        <div className="multi-chart-grid-item">
            <ChooseChart timeline={timeline} datasets={datasets} legend={legend} chart={2} />
        </div>);

    return (
        <div>
            <Tabs defaultActiveKey="0" onChange={changeHandler} >
                <TabPane key="0" tab="Table">
                    <div style={{ padding: "30px" }}>
                        <Table
                            columns={columns}
                            dataSource={dataSource}
                            onChange={onChange}
                            bordered
                            title={() => legend}
                            footer={() => 'The data is updated monthly, so please wait for current data'}
                            scroll={{ x: 1300 }}
                            rowClassName={(record, index) => {
                                let className = index % 2 ? 'shallow\_gray' : 'deep\_gray';
                                return className
                            }}
                        />
                    </div>
                </TabPane>
                <TabPane key="1" tab="Barchart">
                    <div className="multi-chart-grid-container">
                        {listData0}
                    </div>
                </TabPane>
                <TabPane key="2" tab="Linechart">
                    <div className="multi-chart-grid-container">
                        {listData1}
                    </div>
                </TabPane>
                <TabPane key="3" tab="Piechart">
                    <div className="multi-chart-grid-container">
                        {listData2}
                    </div>
                </TabPane>
            </Tabs>
        </div>
    );
}


export default MultiCharts;