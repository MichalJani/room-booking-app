import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import roomInfoReducer from './roomInfoReducer';

export default combineReducers({
  roomInfo: roomInfoReducer,
  events: eventReducer
});
