import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, makeStyles, Button} from '@material-ui/core';
import logoTruckPad from '../../assets/utils/truckpad-logo.svg';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        'justify-content': 'space-between'
    },
    logo: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    button: {
        alignSelf: 'center',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
        [theme.breakpoints.only('xs')]: {
            paddingRight: 0,
        },
    },
    hidden: {
        display: 'none'
    }
}));



function Header(){
    const Location = useLocation();
    const History = useHistory();
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Container className={classes.toolbar}>
                <img src={logoTruckPad}  className={classes.logo}/>
                <Button 
                    variant="outlined" 
                    size="large" 
                    className={Location.pathname == "/" ? classes.button : classes.hidden} 
                    color="secondary"
                    onClick={() => {(History.push("/addTrucker"))}}
                >
                        CADASTRAR MOTORISTA
                </Button>
            </Container>
        </AppBar>
    );
}

export default Header;