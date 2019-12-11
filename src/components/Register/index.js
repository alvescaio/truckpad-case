import React from 'react';
import { useFormik } from 'formik';
import FORM_VALIDATIONS from './formValidations';
import FORM_INITIAL_VALUES from './formInitialValues';
import { makeStyles, TextField, Icon, 
    Grid, FormControl, IconButton, Typography, Button, Input} from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import STYLE_REGISTER from './style';
import Form from './Form';

const useStyles = makeStyles(STYLE_REGISTER);

const Register = () => {

    const classes = useStyles();

    const formik = useFormik({
        initialValues: FORM_INITIAL_VALUES ,
        validationSchema: FORM_VALIDATIONS,
        onSubmit: (values, bag) => {
            console.log(values);
        }
    });
    return (
        <Form></Form>
    );
}

export default Register;