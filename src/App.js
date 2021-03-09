import React, { Component } from 'react';
import SignUp from './Components/SignUp/SignUp';
import ShowChart from './Components/ShowChart/ShowChart';
import SheetEntry from './Components/SheetEntry/SheetEntry';
import LogIn from './Components/LogIn/Login';
import SideBar from './Components/SideBar/index';
import Header from './Components/Header/index';

const resources = [
  {
    name: 'Tax Data',
    link: '#',
  },
  {
    name: 'Health Data',
    link: '#',
  },
  {
    name: 'Court Cases Data',
    link: '#',
  },
  {
    name: 'Govt. Program Data',
    link: '#',
  },
  {
    name: 'Agriculture Data',
    link: '#',
  },
];
const modules = [
  {
    name: 'Create Data Entry',
    link: '#',
    items: 0
  },
  {
    name: 'Check out Recently Updated Data',
    link: '#',
    items: 0,
  },
  {
    name: 'Delete/Update Data',
    link: '#',
    items: 0,
  },
];

class App extends Component {

  render() {
    return (
      // <DoughnutChart timeLine={timeline} dataSet={data} legend="Death per year in millions" />
      //<BarChart timeLine ={timeline} dataSet={data} legend="death in millions per months" />
      //<ShowChart />
      // <SheetEntry />
      // <SideBar modules={modules} resources={resources} />
      <div className="container">
        <Header username="Sparsh Agarwal" />
        <div className="row w-100">
          <div className="col-2 px-2 w-100">
            <SideBar modules={modules} resources={resources} />
          </div>
          <div className="col-10">
            <ShowChart />
          </div>
        </div>
      </div>

      //<LogIn />
      /*<div className="container">
        <h2 class = "major-heading-center">LOG IN!</h2>
        <h2 class = "minor-heading-center">LOG IN to be able to continue on the website.</h2>
        <LogIn />>
      </div>*/
      /*<div className="container">
        <h2 class = "major-heading-center">SIGN UP!</h2>
        <h2 class = "minor-heading-center">Sign Up to be able to commit data on the website.</h2>
        <SignUp />
      </div>*/
      /*<div className="container">
        <ShowChart />
      </div>*/
    );
  }
}

export default App;
