import React from 'react';
import PageLayout from '../PageLayout/PageLayout';
import Homepage from './Homepage';

const index = (props) => {
    return (
        <PageLayout {...props}>
            <Homepage />
        </PageLayout>
    );
}

export default index;
