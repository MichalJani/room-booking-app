import { ADD_EVENT, GET_ALL_EVENTS, UPDATE_EVENT, CANCEL_EVENT, GET_EVENT } from "../actions/actionTypes";

const initialState = {
  eventList: []
}

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_EVENTS:
      return [
        ...state,
        { eventList: action.events }
      ]

    case ADD_EVENT:
      return

    case GET_EVENT:
      return

    case UPDATE_EVENT:
      return

    case CANCEL_EVENT:
      return

    default:
      return state
  }
}

export default eventReducer;
