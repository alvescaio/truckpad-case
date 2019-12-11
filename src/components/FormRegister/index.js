import React from "react";
import { Grid } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import DatePickerField from "./DatePickerField";

const FormRegister = () => {
  return (
    <Formik onSubmit={(event) => alert(event.date)} initialValues={{ date: new Date() }}>
      {({ values, errors }) => (
        <Form>
          <Grid container>
            <Field name="date" component={DatePickerField} />
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default FormRegister;