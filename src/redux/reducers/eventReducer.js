import { ADD_EVENT, GET_ALL_EVENTS, UPDATE_EVENT, CANCEL_EVENT, GET_EVENT } from "../actions/actionTypes";

const initialState = {
  eventList: [],
  event: null,
  loading: false
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_EVENTS:
      return {
        ...state,
        eventList: action.payload
      };

    case ADD_EVENT:
      return {
        ...state,
        eventList: [action.payload, ...state.eventList]
      };

    case GET_EVENT:
      return {
        ...state,
        event: action.payload
      };

    case UPDATE_EVENT:
      const filterList = state.eventList.filter(event => event.id !== action.payload.id);
      const newList = [action.payload, filterList]
      return {
        ...state,
        eventList: newList
      };

    case CANCEL_EVENT:
      return {
        ...state,
        eventList: state.eventList.filter(event => event.id !== action.payload)
      };

    case EVENTS_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state
  }
};

export default eventReducer;
