import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import roomInfoReducer from './roomInfoReducer';
import { timeVariants } from '../../utils/consts';
import timeVariantsReducer from './timeVariantsReducer';

export default combineReducers({
  roomInfo: roomInfoReducer,
  events: eventReducer,
  timeVariants: timeVariantsReducer
});
