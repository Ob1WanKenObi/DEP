import React, { Component } from 'react';
import covid from '../../common/images/corona.png';
import agri from '../../common/images/agri.png';
import tax from '../../common/images/tax.jpg';

class HomePage extends Component {


    render() {
        return (
            <div class="grid-container">
                <div class="grid-item">
                    Covid Data<br></br>
                    <img src={covid} alt="COVID" style={{ width: "180px", height: "180px", marginTop: "10px" }}></img>
                </div>
                <div class="grid-item">
                    Agricultural Data<br></br>
                    <img src={agri} alt="COVID" style={{ width: "180px", height: "180px", marginTop: "10px" }}></img>
                </div>
                <div class="grid-item">
                    Tax Data<br></br>
                    <img src={tax} alt="COVID" style={{ width: "180px", height: "180px", marginTop: "10px" }}></img>
                </div>
                <div class="grid-item">sample-heading-4</div>
                <div class="grid-item">sample-heading-5</div>
                <div class="grid-item">sample-heading-6</div>
            </div>
        );
    }
}

export default HomePage;