import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { getAllEvents } from '../../redux/actions/actionCreators';

const MainPage = ({ getAllEvents }) => {

  return (
    <Container>
      <Grid container spacing={0}>
        <Grid item md={8}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={getAllEvents}
          >
            Klikej synek!
            </Button>
        </Grid>
        <Grid item md={4}>
        </Grid>
      </Grid>
    </Container>
  );

}



export default connect(null, { getAllEvents })(MainPage);
