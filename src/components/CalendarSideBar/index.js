import { changeDrawerState, getAllEvents } from '../../redux/actions/actionCreators'
import { connect } from 'react-redux'
import { CalendarSideBar } from './CalendarSideBar'

const mapStateToProps = state => {
  return {
    drawerOpen: state.drawerOpen,
    events: state.events.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: drawerOpen => {
      dispatch(changeDrawerState(!drawerOpen))
      dispatch(getAllEvents())
    }
  }
}

export const CalendarSideBarConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarSideBar)
