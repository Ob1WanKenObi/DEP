import React, { useState } from 'react';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
const initialValues = {
    email: '',
    password: '',
}

const API = {
    URL: 'http://localhost:8000/api/auth/login',
    key: 'password'
}



const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format').required('Required'),
    password: Yup.string().min(6, 'Password is too short').max('20', 'Password is too long').required('Required'),
});



const LogIn = () => {

    const [isLogin, setIsLogin] = useState(false);

    const formSubmitHandler = (values) => {
        axios.defaults.withCredentials = true;
        const data = {
            username: values.email,
            password: values.password,
        }
        axios.post(API.URL, data)
            .then(res => {
                console.log(res.data);

            })
            .catch(err => {
                console.log(err);
                setIsLogin(true);
            });
        console.log(values);
    }

    return (
        isLogin === true ? <Redirect to="/homepage" /> : <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => formSubmitHandler(values)}
                validationSchema={validationSchema}>
                <Form
                    labelCol={{ xs: 4 }}
                    wrapperCol={{ xs: 20 }}
                >
                    <div style={{ flex: "1", width: "100%", height: "800px", alignContent: "center", classname: "needbg" }}>
                        <br /><br /><br /><br /><br />
                        <div style={{ background: "#e1e1f5", flex: 1, padding: 40, borderRadius: "20px", width: "40%", alignSelf: "center", marginLeft: "30%", marginTop: "0px" }}>
                            <h2 class="minor-heading-3"><u>Log in to use the website</u></h2><br></br>

                            <div>
                                <label htmlFor='email' class="label-normal">Email</label>
                                <Field type='email' id='email' name='email' class='input-area-1' />
                                <ErrorMessage name='email' />
                            </div>

                            <div>
                                <label htmlFor='password' class="label-normal">Password</label>
                                <Field type='password' id='password' name='password' class='input-area-1' />
                                <ErrorMessage name='password' />
                            </div>
                            <button type='submit' class="button-basic">LOG IN</button>
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
