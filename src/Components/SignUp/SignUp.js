import React, { useState, useEffect } from 'react';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Alert } from 'antd';
import { Redirect, Link } from 'react-router-dom';

const initialValues = {
    name: '',
    email: '',
    district: '',
    password: '',
    confirmPassword: '',
}



const API = {
    URL: 'http://127.0.0.1:8000/api/auth/register',
    key: 'password'
}


const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid Email Format').required('Required'),
    district: Yup.string().required('Required'),
    password: Yup.string().min(6, 'Password is too short').max('20', 'Password is too long'),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], 'Passwords should match'),
});



const SignUp = () => {

    const [isSignedUp, setIsSignedUp] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token !== null && token !== undefined) {
            setIsSignedUp(true);
        }
    }, []);

    const formSubmitHandler = (values) => {
        const data = {
            username: values.email,
            password: values.password
        }
        axios.post(API.URL, data)
            .then(() => {
                alert("Account Created ! You can Login Now");
            })
            .catch((e) => {
                status = e.response.status;
                if (status == 409) {
                    alert("username already present");
                } else {
                    alert("Something went wrong");
                }
            });
    }


    return (
        isSignedUp === true ? <Redirect to="/" /> : (<Formik
            initialValues={initialValues}
            onSubmit={formSubmitHandler}
            validationSchema={validationSchema}>
            <Form
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
                labelcol={{ xs: 4 }}
                wrappercol={{ xs: 20 }}
            >
                <div style={{ flex: 1 }} />
                <div style={{ background: "#e1e1f5", flex: 1, padding: 40, borderRadius: "20px" }}>

                    <h2 className="minor-heading-3">Sign Up to use the website</h2>
                    <div >
                        <label htmlFor='name' className="label-normal">Name</label>
                        <Field type='name' id='name' name='name' className='input-area-1' />
                        <ErrorMessage render={text => <Alert message={text} showIcon type='warning' />} name='name' />
                    </div>

                    <div>
                        <label htmlFor='email' className="label-normal">Email</label>
                        <Field type='email' id='email' name='email' className='input-area-1' />
                        <ErrorMessage name='email' />
                    </div>

                    <div>
                        <label htmlFor='district' className="label-normal">District</label>
                        <Field type='text' id='district' name='district' className='input-area-1' />
                        <ErrorMessage name='district' />
                    </div>

                    <div>
                        <label htmlFor='password' className="label-normal">Password</label>
                        <Field type='password' id='password' name='password' className='input-area-1' />
                        <ErrorMessage name='password' />
                    </div>

                    <div>
                        <label htmlFor='confirmPassword' className="label-normal">Confirm Password</label>
                        <Field type='password' id='confirmPassword' name='confirmPassword' className='input-area-1' />
                        <ErrorMessage name='confirmPassword' />
                    </div>
                    <button type='submit' className="button-basic">SIGN UP</button>
                    <Link to="/">
                        Already have an account? Sign in here
                    </Link>
                </div>
            </Form>
        </Formik >)
    );
}

export default SignUp;
