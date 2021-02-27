import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    legend: '',
    tl1: '',
    d1: '',
    tl2: '',
    d2: '',
    tl3: '',
    d3: '',
    tl4: '',
    d4: '',
    tl5: '',
    d5: '',
}


const formSubmitHandler = (values, randomFunc) => {
    //Axios post request to API Endpoint
    const data = {
        xAxisarray: [values.tl1, values.tl2, values.tl3, values.tl3, values.tl5],
        yAxisArray: [values.d1, values.d2, values.d3, values.d4, values.d5],
        legend: values.legend,
        typeOfChart: 1
    }
    randomFunc(data);
}

const validationSchema = Yup.object({
    legend: Yup.string().required('Required'),
    tl1: Yup.number().required('Required'),
    d1: Yup.number().required('Required'),
    tl2: Yup.number().required('Required'),
    d2: Yup.number().required('Required'),
    tl3: Yup.number().required('Required'),
    d3: Yup.number().required('Required'),
    tl4: Yup.number().required('Required'),
    d4: Yup.number().required('Required'),
    tl5: Yup.number().required('Required'),
    d5: Yup.number().required('Required'),
});




const DataEntry = (props) => {



    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => formSubmitHandler(values, props.kuchbhi)}
            validationSchema={validationSchema}>
            <Form>
                <div>
                    <label htmlFor='legend'>Legend</label>
                    <Field type='text' id='legend' name='legend' />
                    <ErrorMessage name='legend' />
                </div>

                <div>
                    <label htmlFor='tl1'>Time Stamp-1</label>
                    <Field type='number' id='tl1' name='tl1' />
                    <ErrorMessage name='tl1' />
                </div>

                <div>
                    <label htmlFor='d1'>Data Entry - 1</label>
                    <Field type='number' id='d1' name='d1' />
                    <ErrorMessage name='d1' />
                </div>

                <div>
                    <label htmlFor='tl2'>Time Stamp-2</label>
                    <Field type='number' id='tl2' name='tl2' />
                    <ErrorMessage name='tl2' />
                </div>

                <div>
                    <label htmlFor='d2'>Data Entry - 2</label>
                    <Field type='number' id='d2' name='d2' />
                    <ErrorMessage name='d2' />
                </div>

                <div>
                    <label htmlFor='tl3'>Time Stamp-3</label>
                    <Field type='number' id='tl3' name='tl3' />
                    <ErrorMessage name='tl3' />
                </div>

                <div>
                    <label htmlFor='d3'>Data Entry - 3</label>
                    <Field type='number' id='d3' name='d3' />
                    <ErrorMessage name='d3' />
                </div>

                <div>
                    <label htmlFor='tl4'>Time Stamp-4</label>
                    <Field type='number' id='tl4' name='tl4' />
                    <ErrorMessage name='tl4' />
                </div>

                <div>
                    <label htmlFor='d4'>Data Entry - 4</label>
                    <Field type='number' id='d4' name='d4' />
                    <ErrorMessage name='d4' />
                </div>

                <div>
                    <label htmlFor='tl5'>Time Stamp-5</label>
                    <Field type='number' id='tl5' name='tl5' />
                    <ErrorMessage name='tl5' />
                </div>

                <div>
                    <label htmlFor='d5'>Data Entry - 5</label>
                    <Field type='number' id='d5' name='d5' />
                    <ErrorMessage name='d5' />
                </div>

                <button type='submit'>SUBMIT</button>
            </Form>
        </Formik >
    );
}

export default DataEntry;
