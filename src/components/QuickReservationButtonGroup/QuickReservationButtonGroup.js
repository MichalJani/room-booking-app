import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { timeVariants } from '../../utils/consts'

export const QuickReservationButtonGroup = ({ buttonVariants, onButtonClick, roomState }) => {
  return (
    <ButtonGroup
      variant='contained'
      color='primary'
      size='large'
      aria-label='Large contained secondary button group'
    >
      {buttonVariants.map(numOfMinutes => (
        <Button key={numOfMinutes} onClick={() => onButtonClick(numOfMinutes)}>
          {timeVariants[numOfMinutes] + ' min'}
        </Button>
      ))}
    </ButtonGroup>
  )
}

QuickReservationButtonGroup.propTypes = {
  buttonVariants: PropTypes.arrayOf(PropTypes.string).isRequired,
  onButtonClick: PropTypes.func.isRequired
}
