import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Grid, FormControl, IconButton, Typography, Button } from '@material-ui/core';

import { Link, NavLink } from 'react-router-dom';
import { func } from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    margin: {
        margin: theme.spacing(1),
        '& > *': {
            marginTop: 20,
          },
    },
}));

function NewUser({ users, dispatch }){
    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Enviado!");
    }
    
    return (
        <>
        <Grid container spacing={2}>
            <Grid item xs={12} class={classes.marginTop}>
                <Typography gutterBottom variant="h4" component="h4">
                    Cadastrar novo usuário
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField id="outlined-basic" label="Nome" variant="outlined" />
                    <TextField id="outlined-basic" label="Nome" variant="outlined" />
                    <TextField id="outlined-basic" label="Nome" variant="outlined" />
                    <Button type="submit">Enviar</Button>
                </form>
                <NavLink to="/">
                    <IconButton>
                        <Icon>back</Icon>
                    </IconButton>
                </NavLink>
            </Grid> 
        </Grid>
       </>
    );
}

export default NewUser;