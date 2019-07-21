import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import logo from "../../assets/logo.png";
import Logo from "../Logo/Logo";
import StatusSection from "../StatusSection/StatusSection";
import BottomAppBar from "../BottomAppBar/BottomAppBar";

const useStyles = makeStyles(theme => ({
  mainPageContainer: {
    backgroundColor: "limegreen",
    minHeight: "100%",
    height: "100%",
    minWidth: "100%",
    flexGrow: 1
  },
  statusSection: {
    justifySelf: "center"
  },
  leftColumn: {
    minHeight: "100%",
    backgroundColor: "blue"
  },
  mainGrid: {
    backgroundColor: "pink",
    flexGrow: 1
  },
  leftColumnContainer: {
    justifyContent: "space-between",
    flexDirection: "column",
    minHeight: "100%",
    backgroundColor: "yellow"
  }
}));

const MainPage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.mainPageContainer} maxWidth={false}>
      <Grid container spacing={0} className={classes.mainGrid}>
        <Grid item xs={8} className={classes.leftColumn}>
          <Grid container className={classes.leftColumnContainer}>
            <Grid item>
              <Logo src={logo} alt="Logo" />
            </Grid>
            <Grid item className={classes.statusSection}>
              <StatusSection status="Avalible" roomName="Room 402" />
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
