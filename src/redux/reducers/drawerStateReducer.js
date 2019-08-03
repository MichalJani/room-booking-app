import { CHANGE_DRAWER_STATE } from '../actions/actionTypes';

const initialState = false;

const drawerStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DRAWER_STATE:
      return action.payload;

    default:
      return state;
  }
};

export default drawerStateReducer;
