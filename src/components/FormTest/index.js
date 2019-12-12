// verificar o guia de integração do formik com o matrial-ui picker: https://material-ui-pickers.dev/guides/form-integration

import React from "react";
import { withFormik } from "formik";
import * as Yup from 'yup';
import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import FormHelperText from '@material-ui/core/FormHelperText';


import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  DataPicker
} from '@material-ui/pickers';

import FORM_VALIDATIONS from '../formValidations';
import FORM_INITIAL_VALUES from '../formInitialValues';
import moment from "moment";

const styles = () => ({
  card: {
    maxWidth: 420,
    marginTop: 50
  },
  container: {
    display: "Flex",
    justifyContent: "center"
  },
  actions: {
    float: "right"
  }
});

const courseCategory = [
  {
    value: "webDevelopment",
    label: "Web Development"
  },
  {
    value: "networking",
    label: "Networking"
  },
  {
    value: "computerScience",
    label: "Computer Science"
  }
];

const form = props => {
    const {
        classes,
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        setFieldValue,
        setTouched
    } = props;

    const resetFields = () => {
      setFieldValue("birth_date", "", false);
      handleReset();
    }

    const handleDate = (data) => {
      console.log(data);
      setFieldValue("birth_date", data, false);
    }

    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit}>
            <Card className={classes.card}>
                <CardContent>
                <TextField
                    id="name"
                    label="Nome"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.name ? errors.name : ""}
                    error={touched.name && Boolean(errors.name)}
                    margin="dense"
                    variant="outlined"
                    fullWidth
                />
                <KeyboardDatePicker
                    autoOk
                    fullWidth
                    emptyLabel="01/02/1998"
                    variant="inline"
                    inputVariant="outlined"
                    label="Data de nascimento"
                    format="dd/MM/yyyy"
                    margin={"normal"}
                    id="date-picker-inline"
                    name="birth_date"
                    onBlur={handleBlur}
                    value={values.birth_date}
                    InputAdornmentProps={{ position: "start" }}               
                    onChange={handleDate}
                    helperText={touched.birth_date ? errors.birth_date : ""}
                    error={touched.birth_date && Boolean(errors.birth_date)}
                    disableFuture={true}
                    maskChar="__/__/____"
                />
                <TextField
                    id="city"
                    label="Cidade"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.city ? errors.city : ""}
                    error={touched.city && Boolean(errors.city)}
                    margin="dense"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    id="state"
                    label="Estado"
                    value={values.state}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    helperText={touched.state ? errors.state : ""}
                    error={touched.state && Boolean(errors.state)}
                    margin="dense"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    id="phone"
                    label="Telefone"
                    value={values.phone}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    helperText={touched.phone ? errors.phone : ""}
                    error={touched.phone && Boolean(errors.phone)}
                    margin="dense"
                    variant="outlined"
                    fullWidth
                />
                </CardContent>
                <CardActions className={classes.actions}>
                <Button type="submit" color="primary" disabled={isSubmitting}>
                    SUBMIT
                </Button>
                <Button color="secondary" onClick={resetFields}>
                    CLEAR
                </Button>
                </CardActions>
            </Card>
            </form>
        </div>
    );
};

const Form = withFormik({
  mapPropsToValues: ({
    active,
    name,
    birth_date,
    state,
    city,
    phone,
  }) => {
    return {
      name: name || "",
      active: active || false,
      birth_date: birth_date || "",
      state: state || "",
      city: city || "",
      phone: phone || ""
    };
  },

  validationSchema: FORM_VALIDATIONS,

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      // submit to the server
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }
})(form);

export default withStyles(styles)(Form);