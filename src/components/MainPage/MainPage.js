import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import logo from "../../assets/logo.png";
import Logo from "../Logo/Logo";
import StatusSection from "../StatusSection/StatusSection";
import BottomAppBar from "../BottomAppBar/BottomAppBar";
import QuickReservationButtonGroup from "../QuickReservationButtonGroup/QuickReservationButtonGroup";

const useStyles = makeStyles(theme => ({
  statusSection: {
    flexDirection: "column",
    justifySelf: "center"
  },
  mainGrid: {
    minHeight: "100%"
  },
  leftColumnContainer: {
    justifyContent: "space-between",
    flexDirection: "column",
    minHeight: "100%"
  }
}));

const MainPage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.mainPageContainer} maxWidth="lg">
      <Grid container spacing={0} className={classes.mainGrid}>
        <Grid item xs={8} className={classes.leftColumn}>
          <Grid container className={classes.leftColumnContainer}>
            <Grid item>
              <Logo src={logo} alt="Logo" />
            </Grid>
            <Grid item container className={classes.statusSection}>
              <Grid item>
                <StatusSection status="Avalible" roomName="Room 402" />
              </Grid>
              <Grid item mt={50}>
                <QuickReservationButtonGroup
                  buttonVariants={[15, 30, 45, 60, 90]}
                  onClick={() => null}
                />
              </Grid>
            </Grid>
            <Grid item />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Typography>Calendar</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainPage;
