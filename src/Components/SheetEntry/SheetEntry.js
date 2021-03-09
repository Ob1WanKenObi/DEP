import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    legend: '',
    ChartType: '',
    excel: null,
}


const formSubmitHandler = (values, randomFunc) => {
    //Axios post request to API Endpoint
    const data = {
        legend: values.legend,
        ChartType: values.ChartType,
        excel: values.excel,
    }
    console.log(data);
    //randomFunc(data);
}

const validationSchema = Yup.object({
    legend: Yup.string().required('Required'),
    excel: Yup.mixed().required('Required'),
});




const SheetEntry = (props) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => formSubmitHandler(values, props.kuchbhi)}
            validationSchema={validationSchema}>
            <Form 
            style={{ display: "grid", gridTemplateColumns: "1fr 4fr 1fr", }}
            labelCol={{ xs: 4 }}
            wrapperCol={{ xs: 20 }}
            >

                <div style={{ flex: 1 }} />
                <div style={{ background: "Dimgray" , flex: 1, padding: 40, borderRadius: "20px" }}>
                <div>
                    <h1 class="minor-heading-2"><u>Upload Excel File Here: </u></h1>
                </div>
                <div>
                    <label htmlFor='legend' class = "label-normal">Data Type</label>
                    <Field id='legend' name='legend' class="input-area-2" />
                    <ErrorMessage name='legend' />
                </div>

                <div>
                    <label htmlFor='excel' class = "label-normal">Excel</label>
                    <Field type="file" id='excel' name='excel' class="input-area-2" accept=".xlsx,.xls"/>
                    <ErrorMessage name='excel' />
                </div>


                <div>
                    <label htmlfor="ChartType" class = "label-normal">Chart Type</label>
                    <Field as="select" name="ChartType"  class="input-area-2">
                        <option value="Barchart" selected >Bar-chart</option>
                        <option value="Linechart">Line-chart</option>
                        <option value="Doughnoutchart">Doughnout-chart</option>
                    </Field>

                </div>

                <button type='submit' class="button-basic">SUBMIT</button>
                </div>
            </Form>
        </Formik >
    );
}

export default SheetEntry;
