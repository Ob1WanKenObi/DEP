import React from 'react';
import PageLayout from '../PageLayout/PageLayout';
import GeneralAdmin from './GeneralAdmin';

const index = (props) => {
    return (
        <PageLayout {...props}>
            <GeneralAdmin />
        </PageLayout>
    );
}

export default index;