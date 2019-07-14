import React from "react";
import PropTypes from "prop-types";
import { Typography, Container } from "@material-ui/core";


const StatusSection = ({ status, roomName }) => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h3">
        {status}
      </Typography>
      <Typography variant="h2" component="h2">
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
