import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import admin from '../../common/images/admin.png';
import dev from '../../common/images/dev.png';
import seasonal from '../../common/images/seasonal.png';
import structure from '../../common/images/structure.png';
import covid from '../../common/images/covid19.png';
import bgg from '../../common/images/homebg.jpg';

class HomePage extends Component {


    render() {
        return (
            <div style={{background: `url(${bgg}) no-repeat center center fixed`, height: "90.7vh"}}>
            <div className="grid-container-home" style={{ gridTemplateColumns: "2fr 2fr" }}>
                <Link to={"/general-administration"} >
                    <div className="grid-item-home" style={{ backgroundColor: "rgb(189,189,189)" }}>
                        <div>General Administration</div>
                        <img src={admin} alt="General Administration" style={{ width: "180px", height: "180px", marginTop: "10px" }}></img>
                    </div>
                </Link>
                <Link to={"/covid"}>
                    <div className="grid-item-home" style={{ backgroundColor: "#bfbfbf" }}>
                        <div>Covid-19</div>
                        <img src={covid} alt="Covid-19" style={{ width: "220px", height: "180px", marginTop: "10px" }}></img>
                    </div>
                </Link>
            </div >
            </div>
        );
    }
}

export default HomePage;