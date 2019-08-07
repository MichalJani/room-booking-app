import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

const UpperAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Booking App
          </Typography>
          <Typography variant="h6">16:00</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

UpperAppBar.propTypes = {};

export default UpperAppBar;
