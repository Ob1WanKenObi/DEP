import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const initialValues = {
    name: '',
    email: '',
    district: '',
    password: '',
    confirmPassowrd: '',
}

const API = {
    URL: '',
    key: ''
}

const formSubmitHandler = (values) => {
    //Axios post request to API Endpoint
    const data = {
        name: values.name,
        email: values.email,
        district: values.district,
        password: values.password
    }
    axios.post(API.URL, data)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    console.log(values);
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid Email Format').required('Required'),
    district: Yup.string().required('Required'),
    password: Yup.string().min(6, 'Password is too short').max('20', 'Password is too long'),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], 'Passwords should match'),
});




const SignUp = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={formSubmitHandler}
            validationSchema={validationSchema}>
            <Form>
                <div>
                    <label htmlFor='name'>Name</label>
                    <Field type='text' id='name' name='name' />
                    <ErrorMessage name='name' />
                </div>

                <div>
                    <label htmlFor='email'>Email</label>
                    <Field type='email' id='email' name='email' />
                    <ErrorMessage name='email' />
                </div>

                <div>
                    <label htmlFor='district'>District</label>
                    <Field type='text' id='district' name='district' />
                    <ErrorMessage name='district' />
                </div>

                <div>
                    <label htmlFor='passowrd'>Password</label>
                    <Field type='password' id='passowrd' name='passowrd' />
                    <ErrorMessage name='password' />
                </div>

                <div>
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <Field type='password' id='confirmPassword' name='confirmPassword' />
                    <ErrorMessage name='confirmPassword' />
                </div>
                <button type='submit'>SignUp</button>
            </Form>
        </Formik >
    );
}

export default SignUp;
