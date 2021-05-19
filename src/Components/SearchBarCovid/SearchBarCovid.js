import React from 'react';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const monthList = ['Ropar'];
const subDivision = ['Ropar', 'Chamkaur Sahib', 'Anandpur Sahib', 'Morinda', 'Nangal']
const districts = ["Ropar"];
const API = {
    URL: 'http://127.0.0.1:8000/',
}

const SearchBar = ({ statsoffaHandler, typeOfDataHandler, apiURL }) => {
    const initialValues = {
        StartDate: '',
        EndDate: '',
        District: districts[0],
        SubDivision: subDivision[0],
    }

    const formSubmitHandler = (values) => {
        //Axios post request to API Endpoint
        const data = {
            StartDate: values.StartDate,
            EndDate: values.EndDate,
            District: values.District,
            SubDivision: values.SubDivision,
        }
        console.log(data)
        axios.get(`${API.URL}customquery/?start_date=${data.StartDate}&end_date=${data.EndDate}&district=${data.District}&subdivision=${data.SubDivision}`)
            .then(response => {
                console.log(response.data);
                const keyarray = Object.keys(response.data[0]);
                const columns = keyarray.map(
                    keys =>
                    ({
                        title: keys,
                        dataIndex: keys,
                        key: keys,
                        width: '20%',
                    })
                );
                const dataSource = response.data.map((row, index) =>
                    ({ ...row, key: index + 1 })
                );
                const timeLine = response.data.map((row) => {
                    return `${monthList[row["month"] - 1]}, ${row["year"]}`
                })
                typeOfDataHandler(data.DataType, response.data, columns, dataSource, timeLine);
            })
            .catch(err => {
                console.log('Query Sent Error');
                console.log(err);
            })
    }

    const validationSchema = Yup.object({
        StartDate: Yup.date().required('Required !'),
        EndDate: Yup.date().required('Required !'),
        District: Yup.string().required('Required !'),
        SubDivision: Yup.string().required('Required !'),
    });

    return (
        <div className="mx-2 my-1">
            <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={(values) => formSubmitHandler(values, typeOfDataHandler)}
            >
                <div>
                    <div className="grid-container-search">
                        <div className="grid-item-search d-flex justify-content-center" >
                            <div style={{ width: "100%" }}>
                                From
                            </div>
                        </div>
                        <div className="grid-item-search d-flex justify-content-center" >
                            <div style={{ width: "100%" }}>
                                To
                            </div>
                        </div>
                        <div className="grid-item-search d-flex justify-content-center" >
                            <div style={{ width: "100%" }}>
                                District and Sub-Division
                            </div>
                        </div>
                        <div className="grid-item-search d-flex justify-content-center" >
                            <div style={{ width: "100%" }}>
                                Search
                            </div>
                        </div>
                    </div>
                    <Form>
                        <div className="grid-container-search">
                            <div className="grid-item-search d-flex justify-content-center" >
                                <div style={{ width: "100%" }}>
                                    <Field type="date" name="StartDate" className="input-area-1" />
                                    <ErrorMessage name="StartDate" />
                                </div>
                            </div>
                            <div className="grid-item-search d-flex justify-content-center" >
                                <div style={{ width: "100%" }}>
                                    <Field type="date" name="EndDate" className="input-area-1" />
                                    <ErrorMessage name="EndDate" />
                                </div>
                            </div>
                            <div className="grid-item-search d-flex justify-content-center" >
                                <div style={{ width: "100%" }}>
                                    <Field as="select" name="District" className="input-area-1" style={{ width: "45%", display: "inline", marginRight: "5%" }}>
                                        {districts.map((disctrict) =>
                                            <option key={disctrict} value={disctrict}>{disctrict}</option>)}
                                    </Field>

                                    <Field as="select" name="SubDivision" className="input-area-1" style={{ width: "45%", display: "inline", marginLeft: "5%" }}>
                                        {subDivision.map(division =>
                                            <option key={division} value={division}>{division}</option>)}
                                    </Field>

                                </div>
                            </div>
                            <div className="grid-item-search d-flex justify-content-center" >
                                <div style={{ width: "100%" }}>
                                    <button className="button-search" type="submit" onClick={statsoffaHandler}>
                                        GO
                                </button>
                                </div>
                            </div>
                            <div className="grid-item-search d-flex justify-content-center" >
                                <div style={{ width: "100%" }}>
                                    <button className="button-search" >
                                        Reset
                                </button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </Formik>
        </div>
    );
}

export default SearchBar;