import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import CalendarCard from '../CalendarCard/CalendarCard';

const useStyles = makeStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 600,
    backgroundColor: 'skyblue',
    minHeight: '100%',
    margin: '20px'
  }
});

const CalendarSideBar = events => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    isOpen: false
  });

  const toggleDrawer = () => event => {
    const openState = !state.isOpen;
    setState({ ...state, isOpen: openState });
  };

  const sideList = events => {
    console.log('WAZAAAAAAAAP');
    console.log(events);
    return (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer()}
        onKeyDown={toggleDrawer()}
      >
        {events.events.map(eventProps => (
          <CalendarCard {...eventProps} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <Button onClick={toggleDrawer()}>Open Calendar</Button>
      <SwipeableDrawer
        anchor="right"
        open={state.isOpen}
        onClose={toggleDrawer()}
        onOpen={toggleDrawer()}
        className={classes.swippableDrawer}
      >
        {sideList(events)}
      </SwipeableDrawer>
    </div>
  );
};

CalendarCard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      etag: PropTypes.string.isRequired,
      start: PropTypes.shape({
        dateTime: PropTypes.string,
        timeZone: PropTypes.string
      }).isRequired
    })
  )
};

export default CalendarSideBar;
