import React, { useState } from 'react';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Alert } from 'antd';
import { Redirect, Link } from 'react-router-dom';
import LogIn from '../LogIn/Login';
import bgg from '../../common/images/signin.svg';
import {LoginOutlined} from '@ant-design/icons';

const initialValues = {
    name: '',
    email: '',
    district: '',
    password: '',
    confirmPassword: '',
}



const API = {
    URL: 'http://localhost:8000/api/auth/register',
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
    const formSubmitHandler = (values) => {
        //Axios post request to API Endpoint
        const data = {
            username: values.email,
            district: values.district,
            password: values.password
        }
        axios.post(API.URL, data)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                if (!err.response) {
                    console.log(values);
                    setIsSignedUp(true);
                    console.log(err);
                } else {
                    console.log(values);
                    setIsSignedUp(true);
                    console.log(err);
                }
            });
    }


    return (
        isSignedUp === true ? <Redirect to="/" /> : (<Formik
            initialValues={initialValues}
            onSubmit={formSubmitHandler}
            validationSchema={validationSchema}>
            <Form>
                    <div className="login-main" style={{background: `url(${bgg}) no-repeat center center fixed`}}>
                        <div style={{padding: "3%", border: "2px solid black",borderRadius: "10px", width: "40%", marginLeft: "30%", marginTop: "0px", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)" }}>
                            <h2 className="minor-heading-3">Sign Up to use the website</h2>

                            <div>
                        <label htmlFor='name' class="label-normal">Name</label>
                        <Field type='name' id='name' name='name' class='input-area-1' />
                        <ErrorMessage name='name' render={error => 
                            <div style={{ color: "red"}}>
                                <span style={{backgroundColor: "#ededed", borderLeft: "4px solid red",  padding: "2px 5px"}}>
                                    {error}
                                </span>
                            </div>} 
                        />
                    </div>

                    <div>
                        <label htmlFor='email' class="label-normal">Email</label>
                        <Field type='email' id='email' name='email' class='input-area-1' />
                        <ErrorMessage name='email' render={error => 
                            <div style={{ color: "red"}}>
                                <span style={{backgroundColor: "#ededed", borderLeft: "4px solid red",  padding: "2px 5px"}}>
                                    {error}
                                </span>
                            </div>} 
                        />
                    </div>

                    <div>
                        <label htmlFor='district' class="label-normal">District</label>
                        <Field type='text' id='district' name='district' class='input-area-1' />
                        <ErrorMessage name='name' render={error => 
                            <div style={{ color: "red"}}>
                                <span style={{backgroundColor: "#ededed", borderLeft: "4px solid red",  padding: "2px 5px"}}>
                                    {error}
                                </span>
                            </div>} 
                        />
                    </div>

                    <div>
                        <label htmlFor='password' class="label-normal">Password</label>
                        <Field type='password' id='password' name='password' class='input-area-1' />
                        <ErrorMessage name='password' render={error => 
                            <div style={{ color: "red"}}>
                                <span style={{backgroundColor: "#ededed", borderLeft: "4px solid red",  padding: "2px 5px"}}>
                                    {error}
                                </span>
                            </div>} 
                        />
                    </div>

                    <div>
                        <label htmlFor='confirmPassword' class="label-normal">Confirm Password</label>
                        <Field type='password' id='confirmPassword' name='confirmPassword' class='input-area-1' />
                        <ErrorMessage name='confirmPassword' render={error => 
                            <div style={{ color: "red"}}>
                                <span style={{backgroundColor: "#ededed", borderLeft: "4px solid red",  padding: "2px 5px"}}>
                                    {error}
                                </span>
                            </div>} 
                        />
                    </div>
                    <div style={{width: "100%",display: "flex", justifyContent: "center"}}>
                        <button type='submit' className="button-login"><LoginOutlined /> Sign Up</button>
                    </div>
                    <div style={{width: "100%",marginTop: "7px"}}>
                        <Link to="/">
                            Already have an account ? Login here
                        </Link>
                    </div>
                    </div>
                    </div>
                </Form>
        </Formik >)
    );
}

export default SignUp;
