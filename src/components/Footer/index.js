import React from 'react';
import { AppBar, Toolbar, Typography, Container, makeStyles, Icon, Box} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer: {
        width: '100%',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        backgroundColor: theme.palette.secondary.light,
        display: 'flex',
        alignItens: 'center',
        justifyContent: 'center',
        boxShadow: '0px -5px '+theme.palette.primary.main,
        '& span':{
            color: 'gray',
            marginRight: 2,
            marginLeft: 2
        }
    },
    icon: {
        fontSize: 20,
        color: 'rgb(237, 57, 47)'
    }
}));



function Footer(){
    const classes = useStyles();
    return (
        <footer style={{width: '100%', height: '50px'}}>
            <Box className={classes.footer} >
                    <span>Desenvolvido com</span>
                    <Icon className={classes.icon}>favorite</Icon> 
                    <span>por Caio Alves</span>
            </Box>
        </footer>
    );
}

export default Footer;