import { CHANGE_ROOM_STATUS } from '../actions/actionTypes';
import { roomStates } from '../../utils/consts';

const initialState = {
  name: 'Room 407',
  state: roomStates.AVALIBLE
};

const roomInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ROOM_STATUS:
      return {
        ...state,
        status: action.payload
      };

    default:
      return state;
  }
};

export default roomInfoReducer;
