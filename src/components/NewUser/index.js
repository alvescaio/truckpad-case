import React from 'react';
import { makeStyles, TextField, Icon, 
        Grid, FormControl, IconButton, Typography, Button} from '@material-ui/core';

import { useFormik } from 'formik';
 
import { Link, NavLink } from 'react-router-dom';
import { func } from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    margin: {
        '& > *': {
            marginTop: theme.spacing(2),
          },
    },
}));

function NewUser({ users, dispatch }){

    const { getFieldProps, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            id: 0,
            active: true,
            name: "",
            birth_date: "",
            state: "",
            city: "",
            phone: "",
            addresses: {
                name: "",
                state: "",
                country: "",
                neighborhood: "",
                city: "",
                street_number: "",
                complement: "",
                postal_code: "",
                street_name: ""
            },
            documents: [
                {
                    expires_at: "",
                    country: "",
                    number: "",
                    doc_type: "",
                    category: ""
                },
            ]
        },
        validate: values => {
            const err = {
                name: "",
                contact: {
                    email: ""
                }
            };
            const message = "Campo obrigatório";
            if (!values.name) err.name = message;
            if (!values.contact.email) err.contact.email = message;

            return err;
        },
        onSubmit: (values, bag) => {
            console.log(values);
        }
    });
    
    const [name, metadataName] = getFieldProps("name", "text");
    const [email, metadataEmail] = getFieldProps("contact.email", "text");
    const [phone, metadataPhone] = getFieldProps("contact.phone", "text");

    const classes = useStyles();

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert("Enviado!");
    // }
    
    return (
        <>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography gutterBottom variant="h4" component="h4">
                    Cadastrar novo usuário
                </Typography>
                <form className={classes.margin}>
                    <TextField fullWidth label="Nome" variant="outlined" />
                    <TextField fullWidth label="Nome" variant="outlined" />
                    <TextField fullWidth label="Nome" variant="outlined" />
                    <TextField
                        label="none"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        />
                </form>
                <NavLink to="/">
                    <IconButton>
                        <Icon>arrow_back</Icon>
                    </IconButton>
                </NavLink>
                <Button variant="contained" color="primary" type="submit">Enviar</Button>
            </Grid> 
        </Grid>
       </>
    );
}

export default NewUser;