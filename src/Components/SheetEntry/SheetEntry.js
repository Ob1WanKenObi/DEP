import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { message } from 'antd';
import * as Yup from 'yup';
import axios from 'axios';

import court_cases from '../../common/images/dep_tables/court_cases.png';
import court_criminal from '../../common/images/dep_tables/court_criminal.png';
import covid from '../../common/images/dep_tables/covid.png';
import drug_abuse from '../../common/images/dep_tables/drug_abuse.png';
import drug_abuse2 from '../../common/images/dep_tables/drug_abuse2.png';
import healthcare_1 from '../../common/images/dep_tables/healthcare_1.png';
import ration_atta from '../../common/images/dep_tables/ration_atta.png';
import ration_dal from '../../common/images/dep_tables/ration_dal.png';
import revenue_excise from '../../common/images/dep_tables/revenue_excise.png';
import revenue_gst from '../../common/images/dep_tables/revenue_gst.png';
import revenue_motor from '../../common/images/dep_tables/revenue_motor.png';
import revenue_stamp from '../../common/images/dep_tables/revenue_stamp.png';
import vaccination from '../../common/images/dep_tables/vaccination.png';
import err from '../../common/images/dep_tables/err.png';


const select1 = ["General Administration", "Development Administration", "Seasonal Work", "Structured Drives and Working"];
const select2 = ["Revenue", "Court", "Covid", "Healthcare", "Drug Abuse", "Smart Ration"];

const select3_0 = [
    {
        name: 'Collection of Excise',
        tableName: 'excise_duty_tax'
    },
    {
        name: 'Collection of GST',
        tableName: 'gst'
    },
    {
        name: 'Collection of Motor Vehicle Tax',
        tableName: 'motor_vehicle_tax',
    },
    {
        name: 'Collection of Stamp Duty',
        tableName: 'stamp_tax',
    },
];

const select3_1 = [
    {
        name: 'Criminal Court',
        tableName: 'criminal_court',
    },
    {
        name: 'Civil Court',
        tableName: 'civil_court',
    }
];

const select3_2 = [
    {
        name: 'Covid-19 Data',
        tableName: 'covid',
    },
];

const select3_3 = [
    {
        name: 'Vaccination Data',
        tableName: 'vaccination_data',
    },
    {
        name: 'Upgradation of Infrastructure',
        tableName: 'upgradation_of_infrastructure',
    },
];

const select3_4 = [
    {
        name: 'Enforcement of Drug Measures',
        tableName: 'enforcement_of_drug_measures',
    },
    {
        name: 'De-addiction and Rehabilitation',
        tableName: 'rehabilation',
    },
];

const select3_5 = [
    {
        name: 'Distribution of Atta',
        tableName: 'distribution_of_atta',
    },
    {
        name: "Distribution of Dal",
        tableName: 'distribution_of_dal',
    },
];

const initialValues = {
    legend1: 'General Administration',
    legend2: 'Revenue',
    legend3: 'excise_duty_tax',
}

const API = {
    URL: 'http://127.0.0.1:8000/excel/',
    key: 'password',

}



const validationSchema = Yup.object({
    legend1: Yup.string().required('Required !'),
    legend2: Yup.string().required('Required !'),
    legend3: Yup.string().required('Required !'),
});


const SheetEntry = (props) => {

    const [activeselect, setactiveselect] = useState(select3_0);

    const [selectedFile, setSelectedFile] = useState(null);

    const [sample, setSample] = useState(revenue_excise);

    const handleSample = (event) => {
        const checking = event.target.value;
        if (checking == select3_0[0].tableName) { setSample(revenue_excise); }
        else if (checking == select3_0[1].tableName) { setSample(revenue_gst); }
        else if (checking == select3_0[2].tableName) { setSample(revenue_motor); }
        else if (checking == select3_0[3].tableName) { setSample(revenue_stamp); }
        else if (checking == select3_1[0].tableName) { setSample(court_criminal); }
        else if (checking == select3_1[1].tableName) { setSample(court_cases); }
        else if (checking == select3_2[0].tableName) { setSample(covid); }
        else if (checking == select3_3[0].tableName) { setSample(vaccination); }
        else if (checking == select3_3[1].tableName) { setSample(healthcare_1); } //
        else if (checking == select3_4[0].tableName) { setSample(drug_abuse); } //
        else if (checking == select3_4[1].tableName) { setSample(drug_abuse2); } //
        else if (checking == select3_5[0].tableName) { setSample(ration_atta); }
        else if (checking == select3_5[1].tableName) { setSample(ration_dal); }
        else { setSample(err); }
    }

    const handle3 = (event) => {
        const check = event.target.value;
        if (check == select2[0]) {
            setactiveselect(select3_0);
        }
        else if (check == select2[1]) {
            setactiveselect(select3_1);
        }
        else if (check == select2[2]) {
            setactiveselect(select3_2);
        }
        else if (check == select2[3]) {
            setactiveselect(select3_3);
        }
        else if (check == select2[4]) {
            setactiveselect(select3_4);
        }
        else {
            setactiveselect(select3_5);
        }
        handleSample(event);
    }

    const fileChangedHandler = (event) => {
        console.log(event.target.files[0]);
        setSelectedFile(event.target.files[0]);
    }

    const formSubmitHandler = (values) => {
        //Axios post request to API Endpoint
        var formData = new FormData();
        formData.append("sheet", selectedFile);
        formData.append("title", values.legend3);
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
        console.log(values);
    }

    let finalView = (<Formik
        initialValues={initialValues}
        onSubmit={(values) => formSubmitHandler(values)}
        validationSchema={validationSchema} >
        <Form>
            <div className="sheetentry-main">
                <div className="sheetentry-minor" style={{ background: "linear-gradient(62deg, #ebebeb 0%, #d1d1d1 100%)", backgroundRepeat: 'False' }}>
                    <div>
                        <h1 className="minor-heading-3">Upload Excel File Here:</h1>
                    </div>
                    <label htmlFor='legend1' className="label-normal">Data Type</label>
                    <div style={{ display: "inline", overflow: "hidden", display: "flex", flexFlow: "row wrap" }}>
                        <div style={{ width: "33%" }}>
                            <Field as="select" id='legend1' name='legend1' className="input-area-2" >
                                {select1.map(select1 => <option key={select1} value={select1}>{select1}</option>)}
                            </Field>
                            <ErrorMessage name='legend1' render={error =>
                                <div style={{ color: "red" }}>
                                    <span style={{ backgroundColor: "white", borderLeft: "4px solid red", padding: "2px 5px" }}>
                                        {error}
                                    </span>
                                </div>}
                            />
                        </div>
                        <div style={{ width: "33%" }}>
                            <Field as="select" id='legend2' name='legend2' className="input-area-2" onClick={handle3} >
                                {select2.map(select2 => <option key={select2} value={select2}>{select2}</option>)}
                            </Field>
                            <ErrorMessage name='legend2' render={error =>
                                <div style={{ color: "red" }}>
                                    <span style={{ backgroundColor: "white", borderLeft: "4px solid red", padding: "2px 5px" }}>
                                        {error}
                                    </span>
                                </div>}
                            />
                        </div>
                        <div style={{ width: "34%" }}>
                            <Field as="select" id='legend3' name='legend3' className="input-area-2" onClick={handleSample}>
                                {activeselect.map(({ name, tableName }) => <option key={name} value={tableName}>{name}</option>)}
                            </Field>
                            <ErrorMessage name='legend3' render={error =>
                                <div style={{ color: "red" }}>
                                    <span style={{ backgroundColor: "white", borderLeft: "4px solid red", padding: "2px 5px" }}>
                                        {error}
                                    </span>
                                </div>}
                            />
                        </div>
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
                                The folloing rows should contain the data as specified in the sample file.
                            </span>
                        </div>
                        <div style={{ width: "70%", backgroundColor: "#ffffff" }}>
                            <span style={{ color: "black", borderLeft: "4px solid #252540", padding: "2px 5px" }}>
                                Make sure there aren't any other cells filled in the document.
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
                        {/* <ErrorMessage name='excel' /> */}
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
