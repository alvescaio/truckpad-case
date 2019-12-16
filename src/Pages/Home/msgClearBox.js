import React from 'react';
import { Grid, Typography } from '@material-ui/core';

function MsgClearBox() {
    return (
        <Grid item xs={12} style={{display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <img src={require('../../assets/utils/clear.gif')} alt={"Vazio"} style={{width:300}}/>
            <Typography variant="h6" color="textSecondary" component="p" style={{marginTop: 20}}>
                Nenhum motorista cadastrado!
            </Typography>
        </Grid>
    )
}

export default MsgClearBox;