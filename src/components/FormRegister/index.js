import React from "react";
import { Grid } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import DatePickerField from "./DatePickerField";
import INITIAL_VALUES from "../Register/formInitialValues";

INITIAL_VALUES.birth_date = Date();

const FormRegister = () => {
  return (
    <Formik onSubmit={(e) => alert(e.birth_date)} initialValues={INITIAL_VALUES}>
      {({ values, errors }) => (
        <Form>
          <Grid container>
            <Field name="birth_date" component={DatePickerField} />
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default FormRegister;