import React from 'react';
import { makeStyles, TextField, Icon, 
        Grid, FormControl, IconButton, Typography, Button} from '@material-ui/core';

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
    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Enviado!");
    }
    
    return (
        <>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography gutterBottom variant="h4" component="h4">
                    Cadastrar novo usuário
                </Typography>
                <form onSubmit={handleSubmit} className={classes.margin}>
                    <TextField id="outlined-basic" fullWidth label="Nome" variant="outlined" />
                    <TextField id="outlined-basic" fullWidth label="Nome" variant="outlined" />
                    <TextField id="outlined-basic" fullWidth label="Nome" variant="outlined" />
                    <TextField
                        id="filled-full-width"
                        label="Label"
                        placeholder="Placeholder"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
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