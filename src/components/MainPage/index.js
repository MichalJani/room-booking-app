import { connect } from 'react-redux'
import { MainPage } from './MainPage'

const mapStateToProps = state => {
  return { roomState: state.roomInfo.state }
}

export const MainPageConnected = connect(mapStateToProps)(MainPage)
