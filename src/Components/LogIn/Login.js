import React, { useState, useEffect } from 'react';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
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
                <Form
                    labelcol={{ xs: 4 }}
                    wrappercol={{ xs: 20 }}
                >
                    <div style={{ flex: "1", width: "100%", height: "800px", alignContent: "center", classname: "needbg" }}>
                        <br /><br /><br /><br /><br />
                        <div style={{ background: "#e1e1f5", flex: 1, padding: 40, borderRadius: "20px", width: "40%", alignSelf: "center", marginLeft: "30%", marginTop: "0px" }}>
                            <h2 className="minor-heading-3"><u>Log in to use the website</u></h2><br></br>

                            <div>
                                <label htmlFor='email' className="label-normal">Email</label>
                                <Field type='email' id='email' name='email' className='input-area-1' />
                                <ErrorMessage name='email' />
                            </div>

                            <div>
                                <label htmlFor='password' className="label-normal">Password</label>
                                <Field type='password' id='password' name='password' className='input-area-1' />
                                <ErrorMessage name='password' />
                            </div>
                            <button type='submit' className="button-basic">LOG IN</button>
                            <Link to="/register">
                                Don't have an account ? Create here
                            </Link>
                        </div>
                    </div>
                </Form>
            </Formik >
        </div>
    );
}

export default LogIn;
