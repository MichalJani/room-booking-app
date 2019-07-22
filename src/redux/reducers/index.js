import { combineReducers } from 'redux';

export default combineReducers({
  events: (state = [], action) => { console.log(action); return state }
});
