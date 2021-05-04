import React, { useState, useEffect } from 'react';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import bgg from '../../common/images/signin.svg';
import {LoginOutlined} from '@ant-design/icons';


const initialValues = {
    email: '',
    password: '',
}

const API = {
    URL: 'http://127.0.0.1:8000/api/auth/login',
    key: 'password'
}



const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format').required('Required'),
    password: Yup.string().min(6, 'Password is too short').max('20', 'Password is too long').required('Required'),
});

const LogIn = () => {

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token !== null && token !== undefined) {
            console.log(isLogin);
            console.log('If accessed');
            setIsLogin(true);
        }
    }, [])

    const formSubmitHandler = (values) => {
        axios({
            method: "post",
            url: API.URL,
            data: {
                username: values.email,
                password: values.password,
            },
            withCredentials: true,
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => {
                localStorage.setItem('token', res.data);
                setIsLogin(true);
            })
            .catch(e => {
                status = e.response.status;
                if (status == 404) {
                    alert("user not found, signup first");
                } else if (status == 403) {
                    alert("Wrong Password");
                } else {
                    alert("something went wrong please try again");
                }
            });
    }

    return (
        isLogin === true ? <Redirect to="/homepage" /> : <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => formSubmitHandler(values)}
                validationSchema={validationSchema}>
                <Form>
                    <div className="login-main" style={{background: `linear-gradient(45deg, #b5ffdb 0%, #ffffff 50%,#ffd1a6 100%)`}}> {/*`url(${bgg}) no-repeat center center fixed`*/}
                        <div style={{padding: "3%", border: "2px solid black",borderRadius: "10px", width: "40%", marginLeft: "30%", marginTop: "0px", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)" }}>
                            <h2 className="minor-heading-3">Log in to use the website</h2>

                            <div>
                                <label htmlFor='email' className="label-normal">Email</label>
                                <Field type='email' id='email' name='email' className='input-area-1' />
                                <ErrorMessage name='email' render={error => 
                                    <div style={{ color: "red"}}>
                                        <span style={{backgroundColor: "#ededed", borderLeft: "4px solid red",  padding: "2px 5px"}}>
                                            {error}
                                        </span>
                                    </div>} 
                                />
                            </div>

                            <div>
                                <label htmlFor='password' className="label-normal">Password</label>
                                <Field type='password' id='password' name='password' className='input-area-1' />
                                <ErrorMessage name='password' render={error => 
                                    <div style={{ color: "red"}}>
                                        <span style={{backgroundColor: "#ededed", borderLeft: "4px solid red",  padding: "2px 5px"}}>
                                            {error}
                                        </span>
                                    </div>} 
                                />
                            </div>
                            <div style={{width: "100%",display: "flex", justifyContent: "center"}}>
                                <button type='submit' className="button-login">LOGIN</button>
                            </div>
                            <div style={{width: "100%",marginTop: "7px"}}>
                                <Link to="/register">
                                    Don't have an account ? Create here
                                </Link>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik >
        </div>
    );
}

export default LogIn;
