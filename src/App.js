import React, { Component } from 'react';
import BarChart from './Components/BarChart/BarChart';
import LineChart from './Components/LineChart/LineChart';
import DoughnutChart from './Components/DoughnoutChart/DoughnotChart';
import SignUp from './Components/SignUp/SignUp';
<<<<<<< Updated upstream
=======
import DataEntry from './Components/DataEntry/DataEntry';
import ShowChart from './Components/ShowChart/ShowChart';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
      <SignUp />
=======
      //<BarChart timeLine ={timeline} dataSet={data} legend="death in millions per months" />
      <ShowChart />
      //<SignUp />
>>>>>>> Stashed changes
    );
  }
}

export default App;
