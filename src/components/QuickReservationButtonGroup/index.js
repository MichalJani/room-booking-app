import { connect } from 'react-redux'
import { addEvent } from '../../redux/actions/actionCreators'
import { QuickReservationButtonGroup } from './QuickReservationButtonGroup'

const mapStateToProps = state => ({ buttonVariants: state.timeVariants })

const mapDispatchToProps = dispatch => ({
  onButtonClick: numOfMinutes => dispatch(addEvent(numOfMinutes))
})

export const QuickReservationButtonGroupConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuickReservationButtonGroup)
