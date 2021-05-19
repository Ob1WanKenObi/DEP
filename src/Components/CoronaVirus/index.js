import React, { useState, useEffect } from 'react';
import PageLayout from '../PageLayout/PageLayout';
import CoronaVirus from './CoronaVirus';
import Loader from '../Loader/loader';
import { Redirect } from 'react-router-dom';

const index = (props) => {
    const [loading, setLoading] = useState(true);
    const [jwt, setJwt] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token !== null && token !== undefined) {
            setJwt(true);
        }
        setLoading(false);
    }, []);
    if (loading) {
        return <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Loader />
        </div>
    } else {
        if (!jwt) {
            return <Redirect to='/' />
        }
        else {
            return (<PageLayout {...props}>
                <CoronaVirus />
            </PageLayout>);
        }
    }
}

export default index;