import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import CalendarCard from '../CalendarCard/CalendarCard';

const useStyles = makeStyles({
  list: {
    width: 250
  }
});

const CalendarSideBar = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    isOpen: false
  });

  const toggleDrawer = () => event => {
    const openState = !state.isOpen;
    setState({ ...state, isOpen: openState });
  };

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <CalendarCard />

      <CalendarCard />

      <CalendarCard />

      <CalendarCard />
    </div>
  );

  return (
    <div>
      <Button
        onClick={toggleDrawer()}
        data-test="CalSideBarButton"
      >
        Open Calendar
        </Button>
      <SwipeableDrawer
        anchor="right"
        open={state.isOpen}
        onClose={toggleDrawer()}
        onOpen={toggleDrawer()}
      >
        {sideList()}
      </SwipeableDrawer>
    </div>
  );
};

export default CalendarSideBar;
