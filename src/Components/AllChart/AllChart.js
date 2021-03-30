import React from "react";
import Barchart from "../BarChart/BarChart";
import Doughnutchart from "../DoughnoutChart/DoughnotChart";
import LineChart from "../LineChart/LineChart";
import { Tabs } from "antd";
const { TabPane } = Tabs;
const AllChart = ({ datasets, legend, timeline }) => {
  const changeHandler = (key) => { };
  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={changeHandler} >
        <TabPane key="1" tab="Barchart">
          <Barchart
            dataSet={datasets}
            legend={legend}
            timeLine={timeline}
            width="400"
            height="400"
          />
        </TabPane>
        <TabPane key="2" tab="Linechart">
          <LineChart
            dataSet={datasets}
            legend={legend}
            timeLine={timeline}
            width="400"
            height="400"
          />
        </TabPane>
        <TabPane key="3" tab="Piechart">
          <Doughnutchart
            dataSet={datasets}
            legend={legend}
            timeLine={timeline}
            width="400"
            height="400"
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default AllChart;
