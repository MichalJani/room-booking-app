import {
  ADD_EVENT,
  GET_ALL_EVENTS,
  UPDATE_EVENT,
  CANCEL_EVENT,
  GET_EVENT,
} from './actionTypes';
import callApi from './apiCaller';

export const getAllEvents = res => {
  return {
    type: GET_ALL_EVENTS,
    payload: res,
  };
};

export const getAllEventsRequest = () => {
  return dispatch => {
    callApi('events').then(res => {
      dispatch(getAllEvents(res));
    });
  };
};

export const addEvent = payload => {
  return {
    type: ADD_EVENT,
    payload,
  };
};

export const updateEvent = payload => {
  return {
    type: UPDATE_EVENT,
    payload,
  };
};

export const cancelEvent = id => {
  return {
    type: CANCEL_EVENT,
    id,
  };
};

export const getEvent = id => {
  return {
    type: GET_EVENT,
    id,
  };
};
