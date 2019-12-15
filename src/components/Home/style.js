export default theme => ({
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
        opacity: 0.4,
    },
    cardAction: {
        justifyContent: 'flex-end',
        'background-color': '#DEDEDE',

    },
    content: {
        marginTop: theme.spacing(2)
    },
    fab: {
        position: 'fixed',
        display: 'none',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        'z-index': 1000,
        [theme.breakpoints.down('xs')]: {
            display: 'flex'
        },
    },
})