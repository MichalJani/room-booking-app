import React from "react";
import PropTypes from "prop-types";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    padding: 0,
    margin: 0
  }
}));
const StatusSection = ({ status, roomName }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="false" className={classes.container}>
      <Typography variant="h4" component="h4">
        {status}
      </Typography>
      <Typography variant="h3" component="h3">
        {roomName}
      </Typography>
    </Container>
  );
};

StatusSection.propTypes = {
  status: PropTypes.string.isRequired,
  roomName: PropTypes.string.isRequired
};

export default StatusSection;
