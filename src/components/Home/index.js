import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import {IconButton} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@material-ui/core';

import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { tsConstructorType } from '@babel/types';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
    },
    alignSpacebetween: {
        justifyContent: 'flex-end',
    },
    hide: {
        display: 'none',
    },
    iconAndtext: {
        marginTop: 5,
        display: 'flex',
        alignContent: 'center',
    },
    iconDescription: {
        fontSize: 20,
        color: 'gray',
        marginRight: 5
    },
    bigAvatar: {
        position: 'static',
        width: 'auto',
        marginBottom: -40,
        marginLeft: 20, 
        width: 80,
        height: 80
    },
    disabled: {
        background: '#E0E0E0',
    }
}));

function addUser(user) {
    return {
        type: 'ADD_USER',
        user
    };
}

function deleteUser(id) {
    return {
        type: 'DELETE_USER',
        id
    };
}

function changeActive(user) {
    return {
        type: 'CHANGE_ACTIVE',
        user,
    };
}


function formatBrDate(date){
    let originDate = new Date(date);
    return originDate.getDay('00')+"/"+originDate.getMonth('00')+"/"+originDate.getFullYear('0000');
}

function Home({ users, dispatch }){
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [tempUser, setTempUser] = useState({documents: []});

    const handleClickOpen = (data = {}) => {
        setTempUser(data);
        setOpen(true);
    };
  
    const handleClose = (idUser) => {
        dispatch(deleteUser(idUser));
        setOpen(false);
    };

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>

                </Grid>
                {
                    users.map((user, i) => (
                        <Grid item xs={12} md={4} sm={6}>
                             <Card className={classes.card, !user.active ? classes.disabled : ''}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {user.name}
                                    </Typography>
                                    <div className={classes.iconAndtext}>
                                        <Icon className={classes.iconDescription}>phone</Icon>
                                        <Typography variant="body1" color="textSecondary" component="p">
                                            { user.phone }
                                        </Typography>
                                    </div>
                                    <div className={classes.iconAndtext}>
                                        <Icon className={classes.iconDescription}>room</Icon>
                                        <Typography variant="body1" color="textSecondary" component="p">
                                            {user.city} / {user.state}
                                        </Typography>
                                    </div>
                                    <div className={classes.iconAndtext}>
                                        <Icon className={classes.iconDescription}>cake</Icon>
                                        <Typography variant="body1" color="textSecondary" component="p">
                                            { formatBrDate(user.birth_date) }
                                        </Typography>
                                    </div>
                                    <div className={classes.iconAndtext}>
                                        <Icon className={classes.iconDescription}>info</Icon>
                                        <Typography variant="body1" color="textSecondary" component="p" style={{marginRight: 5}}>
                                            CPF:
                                        </Typography>
                                        <Typography variant="body1" color="textSecondary" component="p">
                                            {user.documents.map(document => document.doc_type === "CPF" ? document.number : "Não cadastrado")[0] }
                                        </Typography>
                                    </div>
                                </CardContent>
                                <Avatar alt="Remy Sharp" src={require('../../assets/profile_pictures/user-1.jpg')} className={classes.bigAvatar} />
                                <Divider />
                                <CardActions disableSpacing className={classes.alignSpacebetween} >
                                    <IconButton aria-label="show more" color="primary" onClick={() => dispatch(addUser({...user, id: users.length+1}))}>
                                        <Icon>edit</Icon>
                                    </IconButton>
                                    <IconButton aria-label="show more" color="secondary" onClick={() => handleClickOpen(user)}>
                                        <Icon>delete</Icon>
                                    </IconButton>
                                    <IconButton onClick={() => dispatch(changeActive(user))} aria-label="show more">
                                        <Icon>{!user.active ? "visibility" : "visibility_off"}</Icon>
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }
                <Grid item xs={12}>
                    <NavLink to="/NewUser">
                        <Button variant="contained" color="primary">
                            Cadastrar Motorista
                        </Button>
                    </NavLink>
                </Grid>
            </Grid>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Tem certeza que deseja excluir o cadastro deste usuário?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <b>Nome: </b>{tempUser.name} <br />
                        <b>CPF: </b>{tempUser.documents.map(document => document.doc_type === "CPF" ? document.number : "Não cadastrado")[0]} <br />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Não
                </Button>
                <Button onClick={() => handleClose(tempUser.id)} color="secondary" autoFocus>
                    Sim, eu tenho
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default connect(state => ({ users: state.users })) (Home); 