import { connect } from 'react-redux'
import { addEventRequest } from '../../redux/actions/actionCreators'
import { QuickReservationButtonGroup } from './QuickReservationButtonGroup'
import { quickBook } from './../../utils/helpers'

const mapStateToProps = state => ({ buttonVariants: state.timeVariants
})

const mapDispatchToProps = dispatch => ({
  onButtonClick: numOfMinutes => dispatch(addEventRequest(quickBook(numOfMinutes)))
})

export const QuickReservationButtonGroupConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuickReservationButtonGroup)
