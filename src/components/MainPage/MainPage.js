import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import MainPageStatus from '../MainPageStatus/MainPageStatus';
import MainPageTimeline from '../MainPageTimeline/MainPageTimeline';

class MainPage extends Component {
  render() {
    return (
      <Container>
        <Grid container spacing={0}>
          <Grid item md={8}>
            <MainPageStatus />
          </Grid>
          <Grid item md={4}>
            <MainPageTimeline />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default MainPage;
