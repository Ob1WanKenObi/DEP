import React, { Component } from 'react';
import DataEntry from '../DataEntry/DataEntry';
import BarChart from '../BarChart/BarChart';

class ShowChart extends Component {

    state = {
        timeLine: null,
        dataSet: null,
        legend: null,
        typeOfChart: null,
    }

    stateChangeHandler = (props) => {
        this.setState(() => {
            return ({
                timeLine: props.xAxisarray,
                dataSet: props.yAxisArray,
                legend: props.legend,
                typeOfChart: props.chartType
            });
        });
    }

    render() {
        let bawal = <DataEntry kuchbhi={this.stateChangeHandler} />
        if (this.state.typeOfChart !== null) {
            // check chart type
            // change bawal according to that
            bawal = <BarChart timeLine={this.state.timeLine} dataSet={this.state.dataSet} legend={this.state.legend} />
        }
        return (
            bawal
        );
    }
}

export default ShowChart;