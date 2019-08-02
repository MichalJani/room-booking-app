import { CHANGE_ROOM_STATUS } from '../actions/actionTypes';
import { roomStates, timeVariants } from '../../utils/consts';

const initialState = Object.keys(timeVariants);

const timeVariantsReducer = (state = initialState, action) => {
  return state;
};

export default timeVariantsReducer;
