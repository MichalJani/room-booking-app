import { ADD_EVENT, GET_ALL_EVENTS, UPDATE_EVENT, CANCEL_EVENT, GET_EVENT } from "./actionTypes";
import callApi from './apiCaller';
import axios from 'axios';

// export const getAllEvents = () => {
//   return {
//     type: GET_ALL_EVENTS
//   };
// };

export const getAllEvents = () => {
  console.log('hey')
  return dispatch => {
    callApi('events')
    // axios('/events')
      .then((res) => dispatch({
        type: GET_ALL_EVENTS,
        payload: res
      })
      )
  };
}

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
