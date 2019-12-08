import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Grid, FormControl, IconButton, Typography } from '@material-ui/core';

import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    margin: {
        margin: theme.spacing(1),
        '& > *': {
            marginTop: 20,
          },
    },
    marginTop: {
        marginTop: theme.spacing(5),
    }
}));

function NewUser({ users, dispatch }){
    const classes = useStyles();

    return (
        <>
        <Grid container spacing={2}>
            <Grid item xs={12} class={classes.marginTop}>
                <Typography gutterBottom variant="h4" component="h4">
                    Cadastrar novo usuário
                </Typography>
            </Grid>
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <TextField id="outlined-basic" label="Nome" variant="outlined" />
                <TextField id="outlined-basic" label="Nome" variant="outlined" />
                <TextField id="outlined-basic" label="Nome" variant="outlined" />
            </FormControl>
            <Grid item xs={3}>
                <NavLink to="/">
                    <IconButton>
                        <Icon>home</Icon>
                    </IconButton>
                </NavLink>
            </Grid>  
        </Grid>
       </>
    );
}

export default NewUser;