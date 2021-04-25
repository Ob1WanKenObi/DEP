import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { message } from 'antd';
import * as Yup from 'yup';
import axios from 'axios';
import bgg from '../../common/images/signin.svg';
import test from '../../common/images/test.jpg';
import test2 from '../../common/images/test2.webp';

const initialValues = {
    legend: '',
}

const API = {
    URL: 'http://localhost:8000/excel/',
    key: 'password',
}



const validationSchema = Yup.object({
    legend: Yup.string().required('Required !'),
});


const SheetEntry = (props) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const fileChangedHandler = (event) => {
        console.log(event.target.files[0]);
        setSelectedFile(event.target.files[0]);
    }

    const formSubmitHandler = (values) => {
        //Axios post request to API Endpoint
        var formData = new FormData();
        formData.append("sheet", selectedFile);
        formData.append("title", values.legend);
        console.log(formData.getAll('sheet'));
        console.log(formData.getAll('title'));
        axios.post(API.URL, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
            .then(res => {
                console.log(res.data);
                message.success("File Uploaded !");
            })
            .catch(err => {
                console.log(err);
                message.error("Error Occured while uploading the file");
            })

    }

    let finalView = (<Formik
        initialValues={initialValues}
        onSubmit={(values) => formSubmitHandler(values)}
        validationSchema={validationSchema} >
        <Form>
            <div className="sheetentry-main">
                <div className="sheetentry-minor" style={{background: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",backgroundRepeat: 'False'}}>
                <div>
                    <h1 class="minor-heading-3">Upload Excel File Here:</h1>
                </div>
                <div>
                    <label htmlFor='legend' class="label-normal">Data Type</label>
                    <Field id='legend' name='legend' class="input-area-2" />
                    <ErrorMessage name='legend' render={error => 
                        <div style={{ color: "white"}}>
                            <span style={{backgroundColor: "red", borderLeft: "4px solid white",  padding: "2px 5px"}}>
                                {error}
                            </span>
                        </div>} 
                    />
                </div>
                <div>
                    <label htmlFor='excel' class="label-normal">Excel</label>
                    <input type="file"
                        id='excel'
                        name='excel'
                        class="input-area-2"
                        onChange={fileChangedHandler}
                        accept=".xlsx,.xls,.csv" />
                    <span style={{color: "black", backgroundColor: "#a4affc", borderLeft: "4px solid #252540", padding: "2px 5px"}}>File Format: .csv, Maximum file size: 25mb</span>
                    {/* <ErrorMessage name='excel' /> */}
                </div>
                <div className="d-flex justify-content-center">
                    <button type='submit' class="button-special">SUBMIT</button>
                </div>
            </div>
            </div>
        </Form>
    </Formik >);

    return (
        finalView
    );
}

export default SheetEntry;
