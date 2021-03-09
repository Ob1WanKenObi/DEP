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
  state = {
    showDashboard: false,
    showExcel: false,
    showManual: false,
  }


  render() {

    return (
      <>
        <Header username="Sparsh Agarwal" />
        <div className="row w-100">
          <div className="col-2 px-2 w-100">
            <div style={{ position: "absolute", top: '0', left: '0', height: '100%', width: '100%' }}>
              <div className="position-sticky" style={{ top: '0' }}>
                <SideBar modules={modules} resources={resources} />
              </div>
            </div>
          </div>
          <div className="col-10">
            <ShowChart />
          </div>
        </div>
      </>

      //<SheetEntry />
      //<LogIn />
      /*<div className="container">
        <h2 class = "major-heading-center">LOG IN!</h2>
        <h2 class = "minor-heading-center">LOG IN to be able to continue on the website.</h2>
        <LogIn />
      </div>*/
      /*<div className="container">
        <SignUp />
      </div>*/
      /*<div className="container">
        <ShowChart />
      </div>*/
    );
  }
}

export default App;
