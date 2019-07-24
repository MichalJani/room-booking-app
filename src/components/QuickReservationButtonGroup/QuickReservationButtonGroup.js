import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const QuickReservationButtonGroup = ({ buttonVariants, onClick }) => {
  return (
    <ButtonGroup
      variant="contained"
      color="primary"
      size="large"
      aria-label="Large contained secondary button group"
    >
      {buttonVariants.map(numOfMinutes => (
        <Button onClick={() => onClick(numOfMinutes)}>{numOfMinutes}</Button>
      ))}
    </ButtonGroup>
  );
};

QuickReservationButtonGroup.propTypes = {
  buttonVariants: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClick: PropTypes.func.isRequired
};

export default QuickReservationButtonGroup;
