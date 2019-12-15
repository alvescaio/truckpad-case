import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Creators as TruckersActions} from "../../store/ducks/truckers";
import { NavLink, useHistory } from 'react-router-dom';

import {Typography, IconButton, CardContent, CardActions,
    Card, Dialog, DialogTitle, DialogContent, 
    DialogActions, FormControlLabel, Checkbox, Grid, Divider,
    Button, Avatar, Icon, makeStyles, Fab} from '@material-ui/core';

import MsgClearBox from './msgClearBox';
import styleHome from './style';

const useStyles = makeStyles(styleHome);

function formatBrDate(date){
    let originDate = new Date(date);
    return ("0" + (originDate.getDay() + 1)).slice(-2)+"/"+("0" + (originDate.getMonth() + 1)).slice(-2)+"/"+originDate.getFullYear();
}

function Home({ truckers, dispatch }){

    const History = useHistory();
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [tempTrucker, setTempTrucker] = useState({});
    const [checkedDelete, setCheckedDelete] = useState(false);

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
            <Grid container spacing={3} className={classes.content}>
                {console.log(truckers)}
                {  
                    !truckers.length ? 
                        <MsgClearBox /> :
                        truckers.map((trucker, i) => (
                            <Grid item xs={12} md={4} sm={6} key={trucker.id} className={classes.gridCard}>
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
                                            <Icon className={classes.iconDescription}>assignment_ind</Icon>
                                            <Typography variant="body1" color="textSecondary" component="p" style={{marginRight: 5}}>
                                                <b>CPF:</b>
                                            </Typography>
                                            <Typography variant="body1" color="textSecondary" component="p">
                                                {trucker.documents.filter(d => d.doc_type === "CPF")[0].number.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4") }
                                            </Typography>
                                        </div>
                                        <div className={classes.iconAndtext}>
                                            <Icon className={classes.iconDescription}>commute</Icon>
                                            <Typography variant="body1" color="textSecondary" component="p" style={{marginRight: 5}}>
                                               <b>CNH:</b>
                                            </Typography>
                                            <Typography variant="body1" color="textSecondary" component="p">
                                                { trucker.documents.filter(d => d.doc_type === "CNH")[0].number }
                                            </Typography>
                                            <Typography variant="body1" color="textSecondary" component="p" style={{marginLeft: 5}}>
                                                <b>{ trucker.documents.filter(d => d.doc_type === "CNH")[0].category }</b>
                                            </Typography>
                                        </div>
                                    </CardContent>
                                    <img 
                                        alt="Trucker Profile"
                                        src={require('../../assets/profile_pictures/trucker.png')}
                                        className={classes.bigAvatar} />
                                    <Divider />
                                    <CardActions disableSpacing className={classes.cardAction} >
                                        <IconButton aria-label="EditTrucker" style={{color: '#007EF3'}} onClick={() => History.push('/editTrucker/'+trucker.id)}>
                                            <Icon>edit</Icon>
                                        </IconButton>
                                        <IconButton 
                                            aria-label="DeleteTrucker" 
                                            style={{color: '#ED392F'}} 
                                            onClick={() => 
                                                {(
                                                    !checkedDelete ? 
                                                    handleClickOpen(trucker) :
                                                    handleClose(trucker.id)
                                                )}
                                        }>
                                            <Icon>delete</Icon>
                                        </IconButton>
                                        <IconButton onClick={() => dispatch(TruckersActions.changeActive(trucker))} aria-label="DisableTrucker">
                                            <Icon>{!trucker.active ? "visibility" : "visibility_off"}</Icon>
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))
                }
            </Grid>
            <Fab color="primary" aria-label="Cadastar Motorista" className={classes.fab} onClick={() => {(History.push('/addTrucker'))}}>
                <Icon>add</Icon>
            </Fab>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Tem certeza que deseja excluir?</DialogTitle>
                <DialogContent style={{paddingTop: 0, paddingBottom: 10}}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checkedDelete}
                                onChange={() => setCheckedDelete(!checkedDelete)}
                                value="checkedDelete"
                                color="secondary"
                            />
                        }
                        label="Não perguntar novamente"
                    />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="default">
                    Não
                </Button>
                <Button onClick={() => handleClose(tempTrucker.id)} color="secondary" variant="outlined" autoFocus>
                    Sim, eu tenho
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default connect(state => ({ truckers: state.truckers.truckers })) (Home); 