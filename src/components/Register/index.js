import React from 'react';
import { useFormik } from 'formik';
import FORM_VALIDATIONS from './formValidations';
import FORM_INITIAL_VALUES from './formInitialValues';
import { makeStyles, TextField, Icon,
    Grid, FormControl, IconButton, Typography, Button, Input} from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import STYLE_REGISTER from './style';

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
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography gutterBottom variant="h4" component="h4">
                    Cadastrar novo usuário
                </Typography>
                <form className={classes.margin} onSubmit={formik.handleSubmit}>
                    <Input
                        fullWidth
                        label="Nome"
                        variant="outlined"
                        type="string"
                        helperText={formik.errors.name}
                        error={formik.errors.name?true:false}
                        />
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        />
                        <div>{formik.errors.firstName}</div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        />
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        />
                    <button type="submit">Submit</button>
                </form>
                <NavLink to="/">
                    <IconButton>
                        <Icon>arrow_back</Icon>
                    </IconButton>
                </NavLink>
                <Button variant="contained" color="primary" type="submit">Enviar</Button>
            </Grid>
        </Grid>
    );
}

export default Register;