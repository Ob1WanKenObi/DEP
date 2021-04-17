import React from 'react';
import PageLayout from '../PageLayout/PageLayout';
import Homepage from './Homepage';
import ChooseChart from '../ChooseChart/ChooseChart';

const timeLine = ['January', 'February', 'March', 'April', 'May'];
const dataset =    [3311, 16344, 12334, 19443, 15224];
const legend = "testing";
const chart = 0;

const index = (props) => {
    return (
        <PageLayout {...props}>
            <Homepage />
        </PageLayout>
        //<ChooseChart timeline={timeLine} datasets={dataset} legend={legend} chart = {chart}/>
    );
}

export default index;
