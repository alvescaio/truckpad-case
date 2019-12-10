export default (theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    margin: {
        '& > *': {
            marginTop: theme.spacing(2),
          },
    },
})