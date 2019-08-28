import { changeDrawerState } from '../../redux/actions/actionCreators'
import { connect } from 'react-redux'
import { CalendarSideBar } from './CalendarSideBar'

const mapStateToProps = state => {
  return {
    drawerOpen: state.drawerOpen,
    events: state.events.eventList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: drawerOpen => {
      dispatch(changeDrawerState(!drawerOpen))
    }
  }
}

export const CalendarSideBarConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarSideBar)
