import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  container: {
    padding: 0,
    margin: 0
  }
}));
const StatusSection = ({ state, name }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="false" className={classes.container}>
      <Typography variant="h4" component="h4">
        {state}
      </Typography>
      <Typography variant="h3" component="h3">
        {name}
      </Typography>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    state: state.roomInfo.state,
    name: state.roomInfo.name
  };
};

StatusSection.propTypes = {
  status: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(StatusSection);
