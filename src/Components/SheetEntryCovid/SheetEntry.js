import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { message } from 'antd';
import * as Yup from 'yup';
import axios from 'axios';




const API = {
    URL: 'http://127.0.0.1:8000/excel/',
}




const SheetEntry = (props) => {

    const [activeselect, setactiveselect] = useState(null);

    const [selectedFile, setSelectedFile] = useState(null);

    const [sample, setSample] = useState(revenue_excise);


    const fileChangedHandler = (event) => {
        console.log(event.target.files[0]);
        setSelectedFile(event.target.files[0]);
    }

    const formSubmitHandler = (values) => {
        var formData = new FormData();
        formData.append("sheet", selectedFile);
        formData.append("title", values.legend3);
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


    let finalView = (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => formSubmitHandler(values)}
            validationSchema={validationSchema} >
            <Form>
                <div className="sheetentry-main">
                    <div className="sheetentry-minor" style={{ background: "linear-gradient(62deg, #ebebeb 0%, #d1d1d1 100%)", backgroundRepeat: 'False' }}>
                        <div>
                            <h1 className="minor-heading-3">Upload Excel (.Csv) File Here:</h1>
                        </div>
                        <label htmlFor='legend1' className="label-normal">Data Type</label>
                        <div style={{ display: "inline", overflow: "hidden", display: "flex", flexFlow: "row wrap" }}>

                        </div>
                        <div style={{ marginTop: "30px" }}>
                            <label htmlFor='excel' className="label-normal">Sample .CSV File:</label>
                            <div style={{ marginBottom: "10px", boxShadow: "4px 4px 4px rgba(0,0,0,0.3)" }}>
                                <img src={sample} width="100%" height="100px"></img>
                            </div>
                            <div style={{ width: "70%", backgroundColor: "#ffffff" }}>
                                <span style={{ color: "black", borderLeft: "4px solid #252540", padding: "2px 5px" }}>
                                    Please ensure that the first row of the document contains the Column names.
                            </span>
                            </div>
                            <div style={{ width: "70%", backgroundColor: "#ffffff" }}>
                                <span style={{ color: "black", borderLeft: "4px solid #252540", padding: "2px 5px" }}>
                                    The following rows should contain the data as specified in the sample image.
                            </span>
                            </div>
                            <div style={{ width: "70%", backgroundColor: "#ffffff" }}>
                                <span style={{ color: "black", borderLeft: "4px solid #252540", padding: "2px 5px" }}>
                                    Make sure there aren't any other columns filled in the document.
                            </span>
                            </div>
                        </div>
                        <div style={{ marginTop: "30px" }}>
                            <label htmlFor='excel' className="label-normal">Upload .CSV File</label>
                            <input type="file"
                                id='excel'
                                name='excel'
                                className="input-area-2"
                                onChange={fileChangedHandler}
                                accept=".csv" />
                            <span style={{ color: "black", backgroundColor: "#ffffff", borderLeft: "4px solid #252540", padding: "2px 5px" }}>File Format: .csv, Maximum file size: 25mb</span>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type='submit' className="button-special">SUBMIT</button>
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
