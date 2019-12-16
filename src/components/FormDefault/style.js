export default (theme) => ({
    formSpacing: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
    button: {
        margin: theme.spacing(1),
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    iconDefault: {
        color: 'gray'
    },
    groupButtons: {
        display: 'flex',
        'justify-content': 'space-between',
        [theme.breakpoints.down('xs')]: {
            'flex-direction': 'column',
        },
        '& > button': {
            [theme.breakpoints.down('xs')]: {
                marginBottom: theme.spacing(2),
                width: '100%',
            },
        },       
    },
    paper: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        [theme.breakpoints.up('xs')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            paddingBottom: theme.spacing(4),
            paddingTop: theme.spacing(4),
        },
        [theme.breakpoints.between('sm', 'lg')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            paddingBottom: theme.spacing(4),
            paddingTop: theme.spacing(4),
        },
        [theme.breakpoints.up('xl')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
        },
    },
    title: {
        marginTop: 20,
        marginBottom: 20
    }
});