import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';
import Logo from '../Logo/Logo';
import StatusSection from '../StatusSection/StatusSection';
import QuickReservationButtonGroup from '../QuickReservationButtonGroup/QuickReservationButtonGroup';
import CalendarSideBar from '../CalendarSideBar/CalendarSideBar';
import { roomStates } from '../../utils/consts';
import AppBackground from '../../assets/main-page-background.jpg';

const useStyles = makeStyles(theme => ({
  statusSection: {
    flexDirection: 'column',
    justifySelf: 'center'
  },
  mainGrid: {
    minHeight: '100%'
  },
  leftColumnContainer: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    minHeight: '100%'
  },

  roomOccupied: {
    background: `linear-gradient(rgba(255, 0, 0, 0.45), rgba(255, 0, 0, 0.45)), url(${AppBackground}) no-repeat center center fixed`
  },
  roomFree: {
    background: `linear-gradient(rgba(0, 255, 0, 0.45), rgba(0, 255, 0, 0.45)), url(${AppBackground}) no-repeat center center fixed`
  }
}));

const resolveClasses = (roomState, classes) => {
  console.log(`State = ${roomState},`);
  if (roomState === roomStates.OCCUPIED) {
    return `${classes.appContainer} ${classes.roomOccupied}`;
  }
  return `${classes.appContainer} ${classes.roomFree}`;
};

const MainPage = ({ roomState }) => {
  const classes = useStyles();
  return (
    <Container className={resolveClasses(roomState, classes)} maxWidth="lg">
      <Grid container spacing={0} className={classes.mainGrid}>
        <Grid item xs={8} className={classes.leftColumn}>
          <Grid container className={classes.leftColumnContainer}>
            <Grid item>
              <Logo src={logo} alt="Logo" />
            </Grid>
            <Grid item container className={classes.statusSection}>
              <Grid item mb={50}>
                <StatusSection />
              </Grid>
              <Grid item mt={50}>
                <QuickReservationButtonGroup onClick={() => null} />
              </Grid>
            </Grid>
            <Grid item />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <CalendarSideBar />
        </Grid>
      </Grid>
    </Container>
  );
};
const mapStateToProps = state => {
  return { roomState: state.roomInfo.state };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onClick: event => dispatch(() => event)
//   };
// };

export default connect(mapStateToProps)(MainPage);

MainPage.propTypes = {
  roomState: PropTypes.string.isRequired
};
