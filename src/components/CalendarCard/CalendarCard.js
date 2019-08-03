import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275
  },
  title: {
    color: 'black'
  },
  status: {
    color: 'black'
  }
}));

const CalendarCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          17:00 - 18:00
        </Typography>
        <Typography className={classes.status} variant="h5" component="h5">
          Event name
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CalendarCard;
