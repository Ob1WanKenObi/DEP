import React, { Component } from 'react';
import SignUp from './Components/SignUp/SignUp';
import ShowChart from './Components/ShowChart/ShowChart';


class App extends Component {

  render() {
    return (
      // <DoughnutChart timeLine={timeline} dataSet={data} legend="Death per year in millions" />
      //<BarChart timeLine ={timeline} dataSet={data} legend="death in millions per months" />
      //<ShowChart />
      <div className="container">
        <h2 class = "major-heading-center">SIGN UP!</h2>
        <h2 class = "minor-heading-center">Sign Up to be able to commit data on the website.</h2>
        <SignUp />
      </div>
      /*<div className="container">
        <ShowChart />
      </div>*/
    );
  }
}

export default App;
