import axios from 'axios';
import { ADD_EVENT, GET_ALL_EVENTS, UPDATE_EVENT, CANCEL_EVENT, GET_EVENT } from "./actionTypes";
import callApi from './apiCaller';

// export const getAllEvents = () => {
//   return {
//     type: GET_ALL_EVENTS
//   };
// };

export const getAllEvents = () => dispatch => {
  callApi('/events')
    .then(() => dispatch({
      type: GET_ALL_EVENTS
    })
    )
};

export const addEvent = payload => {
  return {
    type: ADD_EVENT,
    payload
  };
};

export const updateEvent = payload => {
  return {
    type: UPDATE_EVENT,
    payload
  };
};

export const cancelEvent = id => {
  return {
    type: CANCEL_EVENT,
    id
  };
};

export const getEvent = id => {
  return {
    type: GET_EVENT,
    id
  };
};
