import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { connect } from 'react-redux';
import { addEventRequest } from '../../redux/actions/actionCreators';



export const QuickReservationButtonGroup = ({ buttonVariants, addEventRequest }) => {
  const quickBook = num => {
    const startDate = new Date();
    const startTimeMil = startDate.getTime();
    const eventLengthMil = num * 60 * 1000;
    const endTimeMil = startTimeMil + eventLengthMil;
    const endDate = new Date(endTimeMil);

    const booking = {
      summary: 'Event1',
      location: 'Room 416',
      description: 'Conference Room booking',
      start: {
        dateTime: `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}T${startDate.getHours()}:${startDate.getMinutes()}:00+02:00`
      },
      end: {
        dateTime: `${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDate()}T${endDate.getHours()}:${endDate.getMinutes()}:00+02:00`
      },
      reminders: {
        useDefault: true
      }
    };
    console.log('TCL: QuickReservationButtonGroup -> booking', booking);
    addEventRequest(booking);
  };

  return (
    <ButtonGroup
      variant="contained"
      color="primary"
      size="large"
      aria-label="Large contained secondary button group"
    >
      {buttonVariants.map(numOfMinutes => (
        <Button key={numOfMinutes} onClick={() => quickBook(numOfMinutes)}>
          {numOfMinutes}
        </Button>
      ))}
    </ButtonGroup>
  );
};

QuickReservationButtonGroup.propTypes = {
  buttonVariants: PropTypes.arrayOf(PropTypes.number).isRequired,
  addEventRequest: PropTypes.func.isRequired
};

export default connect(
  null,
  { addEventRequest }
)(QuickReservationButtonGroup);
