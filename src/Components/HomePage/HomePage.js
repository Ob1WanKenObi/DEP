import React, { Component } from 'react';
import covid from '../../common/images/corona.png';
import agri from '../../common/images/agri.png';

class HomePage extends Component {


    render() {
        return (
            <div class="grid-container">
                <div class="grid-item">
                    Covid Data<br></br>
                    <img src={covid} alt="COVID" style={{width:"180px",height:"180px"}}></img>
                </div>
                <div class="grid-item">
                    Agricultural Data<br></br>
                    <img src={agri} alt="COVID" style={{width:"180px",height:"180px"}}></img>
                </div>
                <div class="grid-item">Samlpe-heading-3</div>
                <div class="grid-item">Samlpe-heading-4</div>
                <div class="grid-item">Samlpe-heading-5</div>
                <div class="grid-item">Samlpe-heading-6</div>
            </div>
        );
    }
}

export default HomePage;