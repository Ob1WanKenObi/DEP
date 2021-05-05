import React from "react";
import Barchart from "../BarChart/BarChart";
import Doughnutchart from "../DoughnoutChart/DoughnotChart";
import LineChart from "../LineChart/LineChart";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const WhichChart = ({ datasets, legend, timeline, charts }) => {
  const downloadAsImage = (imageLink) => {
    var a = document.createElement('a');
    a.href = imageLink;
    a.download = 'chart.jpeg';
    a.click();
  }
  const check = charts;
  if (check == 0) {
    return <Barchart
      dataSet={datasets}
      legend={legend}
      timeLine={timeline}
      width={270}
      height={240}
      downloadAsImage={downloadAsImage}
    />;
  }
  else if (check == 1) {
    return <LineChart
      dataSet={datasets}
      legend={legend}
      timeLine={timeline}
      width={270}
      height={240}
      downloadAsImage={downloadAsImage}
    />;
  }
  else if (check == 2) {
    return <Doughnutchart
      dataSet={datasets}
      legend={legend}
      timeLine={timeline}
      width={270}
      height={240}
      downloadAsImage={downloadAsImage}
    />;
  }
  else {
    return <div>F</div>
  }
}

const ChooseChart = ({ datasets, legend, timeline, chart }) => {
  const changeHandler = (key) => { };
  const downloadAsImage = (imageLink) => {
    var a = document.createElement('a');
    a.href = imageLink;
    a.download = 'chart.jpeg';
    a.click();
  }

  return (
    <div>
      <div>
        <WhichChart timeline={timeline} datasets={datasets} legend={legend} charts={chart} />
      </div>
      {/*<Tabs defaultActiveKey="1" onChange={changeHandler} >
        <TabPane key="1" tab="Barchart">
          <Barchart
            dataSet={datasets}
            legend={legend}
            timeLine={timeline}
            width="270"
            height="240"
            downloadAsImage={downloadAsImage}
          />
        </TabPane>
        <TabPane key="2" tab="Linechart">
          <LineChart
            dataSet={datasets}
            legend={legend}
            timeLine={timeline}
            width="270"
            height="240"
            downloadAsImage={downloadAsImage}
          />
        </TabPane>
        <TabPane key="3" tab="Piechart">
          <Doughnutchart
            dataSet={datasets}
            legend={legend}
            timeLine={timeline}
            width="270"
            height="240"
            downloadAsImage={downloadAsImage}
          />
        </TabPane>
      </Tabs>*/}
    </div>
  );
};

export default ChooseChart;
