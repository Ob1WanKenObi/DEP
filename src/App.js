import React, { Component } from 'react';
import SignUp from './Components/SignUp/SignUp';
import ShowChart from './Components/ShowChart/ShowChart';


class App extends Component {

  render() {
    return (
      // <DoughnutChart timeLine={timeline} dataSet={data} legend="Death per year in millions" />
      //<BarChart timeLine ={timeline} dataSet={data} legend="death in millions per months" />
      <ShowChart />
      //<SignUp />
    );
  }
}

export default App;
