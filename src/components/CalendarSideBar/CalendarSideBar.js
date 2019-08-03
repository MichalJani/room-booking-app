import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CalendarCard from '../CalendarCard/CalendarCard';
import { changeDrawerState } from '../../redux/actions/actionCreators';

const useStyles = makeStyles({
  list: {
    width: 250
  }
});

const CalendarSideBar = ({ drawerOpen, onClick }) => {
  const classes = useStyles();

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => onClick(drawerOpen)}
      onKeyDown={() => onClick(drawerOpen)}
    >
      <CalendarCard />

      <CalendarCard />

      <CalendarCard />

      <CalendarCard />
    </div>
  );

  return (
    <div>
      <Button onClick={() => onClick(drawerOpen)}>Open Calendar</Button>
      <SwipeableDrawer
        anchor="right"
        open={drawerOpen}
        onClose={() => onClick(drawerOpen)}
        onOpen={() => onClick(drawerOpen)}
      >
        {sideList()}
      </SwipeableDrawer>
    </div>
  );
};

CalendarSideBar.propTypes = {
  drawerOpen: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { drawerOpen: state.drawerOpen };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: drawerOpen => dispatch(changeDrawerState(!drawerOpen))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarSideBar);
