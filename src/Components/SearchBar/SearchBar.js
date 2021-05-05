import React from 'react';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const yearList = [2021, 2020]
const districts = ['Amritsar', 'Barnala', 'Bhatinda',
    'Faridkot', 'Fatehgarh Sahib', 'Fazilka',
    'Ferozepur', 'Gurdaspur', 'Hoshiarpur',
    'Jalandhar', 'Kapurthala', 'Ludhiana',
    'Mansa', 'Moga', 'Muktsar', 'Nawanshahr',
    "Pathankot", "Patiala", "Ropar",
    'Mohali', "Sangrur", "Tarn Taran"];
const API = {
    URL: 'http://127.0.0.1:8000/',
}

const SearchBar = ({ Datatypes, statsoffaHandler, typeOfDataHandler }) => {
    const initialValues = {
        DataType: Datatypes[0].tableName,
        FromMonth: 1,
        FromYear: yearList[0],
        ToMonth: 1,
        ToYear: yearList[0],
        District: districts[0],
    }

    const formSubmitHandler = (values) => {
        //Axios post request to API Endpoint
        const data = {
            DataType: values.DataType,
            FromMonth: values.FromMonth,
            FromYear: values.FromYear,
            ToMonth: values.ToMonth,
            ToYear: values.ToYear,
            district: values.District,
        }
        console.log(values);
        axios.get(`${API.URL}customquery/?start_year=${data.FromYear}&start_month=${data.FromMonth}&end_year=${data.ToYear}&end_month=${data.ToMonth}&district=${data.district}&tablename=${data.DataType}`)
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
        DataType: Yup.string().required('Required !'),
        FromMonth: Yup.string().required('Required !'),
        FromYear: Yup.string().required('Required !'),
        ToMonth: Yup.string().required('Required !'),
        ToYear: Yup.string().required('Required !'),
        District: Yup.string().required('Required !'),
    });

    return (
        <div className="mx-2 my-1">
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => formSubmitHandler(values, typeOfDataHandler)}
            >
                <div>
                    <div className="grid-container-search">
                        <div className="grid-item-search d-flex justify-content-center" >
                            <div style={{ width: "100%" }}>
                                Data Type
                            </div>
                        </div>
                        <div className="grid-item-search d-flex justify-content-center" >
                            <div style={{ width: "100%" }}>
                                District
                            </div>
                        </div>
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

                            </div>
                        </div>
                        <div className="grid-item-search d-flex justify-content-center" >
                            <div style={{ width: "100%" }}>
                            </div>
                        </div>
                    </div>
                    <Form>
                        <div className="grid-container-search">
                            <div className="grid-item-search d-flex justify-content-center" >
                                <div style={{ width: "100%" }}>
                                    <Field as="select" name="DataType" className="input-area-1">
                                        {Datatypes.map(({ name, tableName }) =>
                                            <option key={name} value={tableName}>{name}</option>)}
                                    </Field>
                                    <ErrorMessage name="DataType" />
                                </div>
                            </div>
                            <div className="grid-item-search d-flex justify-content-center" >
                                <div style={{ width: "100%" }}>
                                    <Field as="select" name="District" className="input-area-1">
                                        {districts.map(district =>
                                            <option key={district} value={district}>{district}</option>)}
                                    </Field>
                                    <ErrorMessage name="DataType" />
                                </div>
                            </div>
                            <div className="grid-item-search d-flex justify-content-center" >
                                <div style={{ width: "100%" }}>
                                    <Field as="select" name="FromMonth" className="input-area-1" style={{ width: "45%", display: "inline", marginRight: "5%" }}>
                                        {monthList.map((month, index) =>
                                            <option key={month} value={index + 1}>{month}</option>)}
                                    </Field>

                                    <Field as="select" name="FromYear" className="input-area-1" style={{ width: "45%", display: "inline", marginLeft: "5%" }}>
                                        {yearList.map(year =>
                                            <option key={year} value={year}>{year}</option>)}
                                    </Field>

                                </div>
                            </div>
                            <div className="grid-item-search d-flex justify-content-center" >
                                <div style={{ width: "100%" }}>
                                    <Field as="select" name="ToMonth" className="input-area-1" style={{ width: "45%", display: "inline", marginRight: "5%" }}>
                                        {monthList.map((month, index) =>
                                            <option key={month} value={index + 1}>{month}</option>)}
                                    </Field>

                                    <Field as="select" name="ToYear" className="input-area-1" style={{ width: "45%", display: "inline", marginLeft: "5%" }}>
                                        {yearList.map(year =>
                                            <option key={year} value={year}>{year}</option>)}
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