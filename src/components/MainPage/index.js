import { connect } from 'react-redux'
import { MainPage } from './MainPage'
import { eventStates } from '../../utils/consts'
import { getAllEventsRequest } from '../../redux/actions/actionCreators'

const mapStateToProps = state => {
  return {
    roomState: state.roomInfo.state,
    isFetching: state.events.eventsState === eventStates.FETCHING
  }
}

export const MainPageConnected = connect(mapStateToProps, { getAllEventsRequest })(MainPage)
