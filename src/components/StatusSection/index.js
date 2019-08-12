import { connect } from 'react-redux'
import { StatusSection } from './StatusSection'

const mapStateToProps = state => {
  return {
    state: state.roomInfo.state,
    name: state.roomInfo.name
  }
}

export const StatusSectionConnected = connect(mapStateToProps)(StatusSection)
