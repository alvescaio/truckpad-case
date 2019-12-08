import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import {IconButton} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { Link, NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { NONAME } from 'dns';

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
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
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
        position: 'relative',
        bottom: -40,
        left: 20, 
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

function changeActive(user) {
    return {
        type: 'CHANGE_ACTIVE',
        user,
    };
}

function formatDate(date){
    let originDate = new Date(date);
    return originDate.getDay('00')+"/"+originDate.getMonth('00')+"/"+originDate.getFullYear('0000');
}

function Home({ users, dispatch }){
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>

                </Grid>
                {
                    users.map((user, i) => (
                        <Grid item xs={12} md={4} sm={6}>
                             <Card className={classes.card, !user.active?classes.disabled:''}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {user.name}
                                    </Typography>
                                    <div className={classes.iconAndtext}>
                                        <Icon className={classes.iconDescription}>room</Icon>
                                        <Typography variant="body1" color="textSecondary" component="p">
                                            {user.city} / {user.state}
                                        </Typography>
                                    </div>
                                    <div className={classes.iconAndtext}>
                                        <Icon className={classes.iconDescription}>cake</Icon>
                                        <Typography variant="body1" color="textSecondary" component="p">
                                            { formatDate(user.birth_date) }
                                        </Typography>
                                    </div>
                                </CardContent>
                                <Avatar alt="Remy Sharp" src={require('../../assets/profile_pictures/user-1.jpg')} className={classes.bigAvatar} />
                                <Divider />
                                <CardActions disableSpacing className={classes.alignSpacebetween} >
                                    <IconButton aria-label="show more" color="primary" onClick={() => dispatch(addUser({...user, id: users.length+1}))}>
                                        <Icon>edit</Icon>
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
        </div>
    );
}

export default connect(state => ({ users: state.users })) (Home); 