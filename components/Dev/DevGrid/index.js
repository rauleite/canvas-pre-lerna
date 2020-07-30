import React, { useContext } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import MenuTheme from './MenuTheme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridContainer: {
    margin: 0,
    width: '100%',
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Grid container spacing={1}> */}
      <Grid container spacing={0}>
        <Grid item>
          <MenuTheme />
        </Grid>
      </Grid>
    </div>
  // criar menu desses button
  );
};
