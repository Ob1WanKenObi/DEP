import React, { Component } from 'react';
import BarChart from './Components/BarChart/BarChart';
import LineChart from './Components/LineChart/LineChart';
import DoughnutChart from './Components/DoughnoutChart/DoughnotChart';
import SignUp from './Components/SignUp/SignUp';

const timeline = ['2011', '2012', '2013', '2014', '2015'];
const data = [10, 11, 23, 30, 25];

class App extends Component {
  state = {
    timeline: null,
    data: null,
    legend: '',
    showChart: true,
  }




  render() {
    return (
      // <DoughnutChart timeLine={timeline} dataSet={data} legend="Death per year in millions" />
      <BarChart timeLine={timeline} dataSet={data} legend="Death in million"/>
    );
  }
}

export default App;
