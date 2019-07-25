import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const QuickReservationButtonGroup = ({ buttonVariants, onClick }) => {
  const quickBook = num => {
    let bookingLength = 0;
    let date = Date.now();
    const booking = {
      summary: 'Event1',
      location: 'Room 416',
      description: 'Conference Room booking',
      start: {
        dateTime: '2020-01-28T09:00:00+02:00'
      },
      end: {
        dateTime: '2020-02-28T17:01:00+02:00'
      },
      reminders: {
        useDefault: true
      }
    };
  };

  return (
    <ButtonGroup
      variant="contained"
      color="primary"
      size="large"
      aria-label="Large contained secondary button group"
    >
      {buttonVariants.map(numOfMinutes => (
        <Button onClick={() => quickBook(numOfMinutes)}>{numOfMinutes}</Button>
      ))}
    </ButtonGroup>
  );
};

QuickReservationButtonGroup.propTypes = {
  buttonVariants: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClick: PropTypes.func.isRequired
};

export default QuickReservationButtonGroup;
