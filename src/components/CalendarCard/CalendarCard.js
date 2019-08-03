import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    padding: '5px',
    marginLeft: '20px',
    marginRight: '20px',
    marginBottom: '20px'
  },
  title: {
    color: 'black'
  },
  status: {
    color: 'black'
  }
}));

const CalendarCard = props => {
  const {
    description,
    location,
    id,
    etag,
    start: { dateTime, timeZone }
  } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card} id={id}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {`${dateTime} ${timeZone}`}
        </Typography>
        <Typography variant="h5" component="h5">
          {description}
        </Typography>
        <Typography variant="h6" component="h6">
          {location}
        </Typography>
      </CardContent>
    </Card>
  );
};

CalendarCard.propTypes = {
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  etag: PropTypes.string.isRequired,
  start: PropTypes.shape({
    dateTime: PropTypes.string,
    timeZone: PropTypes.string
  }).isRequired
};

CalendarCard.defaultProps = {};
export default CalendarCard;
