import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { connect } from 'react-redux'
import { addEvent } from '../../redux/actions/actionCreators'
import { timeVariants } from '../../utils/consts'

export const QuickReservationButtonGroup = ({ buttonVariants, onButtonClick }) => {
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

const mapStateToProps = state => ({ buttonVariants: state.timeVariants })

const mapDispatchToProps = dispatch => ({
  onButtonClick: numOfMinutes => dispatch(addEvent(numOfMinutes))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuickReservationButtonGroup)
