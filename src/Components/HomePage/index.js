import React, { useState, useEffect } from 'react';
import PageLayout from '../PageLayout/PageLayout';
import Loader from '../Loader/loader';
import HomePage from './Homepage';
import { Redirect } from 'react-router-dom';

const index = (props) => {
    const [loading, setLoading] = useState(true);
    const [jwt, setJwt] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token !== null && token !== undefined) {
            console.log('got the token');
            setJwt(true);
        }
        setLoading(false);
    }, []);

    if (loading) {
        console.log("Load kar bhai");
        return <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Loader />
        </div>
    } else {
        if (!jwt) {
            console.log('Redirected');
            return <Redirect to='/' />
        }
    }
    return (
        <PageLayout {...props}>
            <HomePage />
        </PageLayout>
    )

}

export default index;
