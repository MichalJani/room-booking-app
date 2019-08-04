import { combineReducers } from 'redux'
import eventReducer from './eventReducer'
import roomInfoReducer from './roomInfoReducer'
import timeVariantsReducer from './timeVariantsReducer'
import drawerStateReducer from './drawerStateReducer'

export default combineReducers({
  roomInfo: roomInfoReducer,
  events: eventReducer,
  timeVariants: timeVariantsReducer,
  drawerOpen: drawerStateReducer
})
