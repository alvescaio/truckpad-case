export default theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
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
        opacity: 0.4,
    },
    cardAction: {
        justifyContent: 'flex-end',
        'background-color': '#DEDEDE',

    }
})