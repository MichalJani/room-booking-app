import { combineReducers } from 'redux';
import eventReducer from './eventReducer';

export default combineReducers({
<<<<<<< HEAD
  events: (state = [], action) => { console.log(action); return state }
=======
  events: eventReducer
>>>>>>> develop
});
