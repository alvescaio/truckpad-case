import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Creators as TruckersActions} from "../../store/ducks/truckers";

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

import styleHome from './style';

const useStyles = makeStyles(styleHome);

function formatBrDate(date){
    let originDate = new Date(date);
    return originDate.getDay('00')+"/"+originDate.getMonth('00')+"/"+originDate.getFullYear('0000');
}

function Home({ truckers, dispatch }){
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [tempTrucker, setTempTrucker] = useState({documents: []});

    const handleClickOpen = (data = {}) => {
        setTempTrucker(data);
        setOpen(true);
    };
  
    const handleClose = (idTrucker) => {
        dispatch(TruckersActions.removeTrucker(idTrucker));
        setOpen(false);
    };

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>

                </Grid>
                {
                    truckers.map((trucker, i) => (
                        <Grid item xs={12} md={4} sm={6} key={trucker.id}>
                             <Card className={classes.card, !trucker.active ? classes.disabled : ''}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {trucker.name}
                                    </Typography>
                                    <div className={classes.iconAndtext}>
                                        <Icon className={classes.iconDescription}>phone</Icon>
                                        <Typography variant="body1" color="textSecondary" component="p">
                                            {trucker.phone.length > 10 ?
                                                trucker.phone.replace(/(\d{2})?(\d{1})?(\d{4})?(\d{4})/, "($1) $2 $4-$3")
                                                : trucker.phone.replace(/(\d{2})?(\d{4})?(\d{4})/, "($1) $2-$3")}
                                        </Typography>
                                    </div>
                                    <div className={classes.iconAndtext}>
                                        <Icon className={classes.iconDescription}>room</Icon>
                                        <Typography variant="body1" color="textSecondary" component="p">
                                            {trucker.city} / {trucker.state}
                                        </Typography>
                                    </div>
                                    <div className={classes.iconAndtext}>
                                        <Icon className={classes.iconDescription}>cake</Icon>
                                        <Typography variant="body1" color="textSecondary" component="p">
                                            { formatBrDate(trucker.birth_date) }
                                        </Typography>
                                    </div>
                                    <div className={classes.iconAndtext}>
                                        <Icon className={classes.iconDescription}>info</Icon>
                                        <Typography variant="body1" color="textSecondary" component="p" style={{marginRight: 5}}>
                                            CPF:
                                        </Typography>
                                        <Typography variant="body1" color="textSecondary" component="p">
                                            {trucker.documents.map(document => document.doc_type === "CPF" ? document.number.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4") : "Não cadastrado")[0] }
                                        </Typography>
                                    </div>
                                </CardContent>
                                <Avatar 
                                    alt="Remy Sharp"
                                    src={ require('../../assets/profile_pictures/trucker-bino.png')}
                                    className={classes.bigAvatar} />
                                <Divider />
                                <CardActions disableSpacing className={classes.cardAction} >
                                    <IconButton aria-label="show more" style={{color: '#007EF3'}} onClick={() => dispatch(TruckersActions.addTrucker({...trucker, id: truckers.length+1}))}>
                                        <Icon>edit</Icon>
                                    </IconButton>
                                    <IconButton aria-label="show more" style={{color: '#ED392F'}} onClick={() => handleClickOpen(trucker)}>
                                        <Icon>delete</Icon>
                                    </IconButton>
                                    <IconButton onClick={() => dispatch(TruckersActions.changeActive(trucker))} aria-label="show more">
                                        <Icon>{!trucker.active ? "visibility" : "visibility_off"}</Icon>
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }
                <Grid item xs={12}>
                    <NavLink to="/formRegister">
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
                <DialogTitle id="alert-dialog-title">Tem certeza que deseja excluir?</DialogTitle>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Não
                </Button>
                <Button onClick={() => handleClose(tempTrucker.id)} color="secondary" autoFocus>
                    Sim, eu tenho
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default connect(state => ({ truckers: state.truckers.truckers })) (Home); 