import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import logo from '../../assets/logo.png'
import Logo from '../Logo/Logo'
import StatusSection from '../StatusSection/StatusSection'
import QuickReservationButtonGroup from '../QuickReservationButtonGroup/QuickReservationButtonGroup'
import CalendarSideBar from '../CalendarSideBar/CalendarSideBar'
import AppBackground from '../../assets/main-page-background.jpg'
import { resolveClasses } from './helpers'

const useStyles = makeStyles(theme => ({
  mainPageContainer: {
    minHeight: '100vh',
    minWidth: '100%',
    display: 'flex',
    margin: 0,
    padding: 0
  },
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
  },
  marginTop: {
    marginTop: '50px'
  }
}))

export const MainPage = ({ roomState }) => {
  const classes = useStyles()
  return (
    <Container className={resolveClasses(roomState, classes)} maxWidth={false}>
      <Container maxWidth='xl'>
        <Grid container spacing={0} className={classes.mainGrid}>
          <Grid item xs={8} className={classes.leftColumn}>
            <Grid container className={classes.leftColumnContainer}>
              <Grid item>
                <Logo src={logo} alt='Logo' />
              </Grid>
              <Grid item container className={classes.statusSection}>
                <Grid item className={classes.marginTop}>
                  <StatusSection />
                </Grid>
                <Grid item className={classes.marginTop}>
                  <QuickReservationButtonGroup />
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
    </Container>
  )
}

MainPage.propTypes = {
  roomState: PropTypes.string.isRequired
}
