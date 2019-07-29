import {
  ADD_EVENT,
  GET_ALL_EVENTS,
  UPDATE_EVENT,
  CANCEL_EVENT,
  GET_EVENT
} from './actionTypes';
import callApi from './apiCaller';

export const getAllEvents = payload => {
  return {
    type: GET_ALL_EVENTS,
    payload
  };
};

export const getAllEventsRequest = () =>
  dispatch => {
    callApi('list')
      .then((res) => {
        dispatch(getAllEvents(res));
      });
  };

export const getEvent = payload => {
  return {
    type: GET_EVENT,
    payload
  };
};

export const getEventRequest = id =>
  dispatch => {
    callApi('get',
      { "eventId": id })
      .then((res) => {
        dispatch(getEvent(res));
      })
      .catch((err) => {
        console.log(err)
        // dispatch(err)
      });
  };

export const addEvent = payload => {
  console.log("TCL: payload", payload)
  return {
    type: ADD_EVENT,
    payload
  };
};

export const addEventRequest = event => dispatch => {
  callApi('insert', { "resource": event })
    .then((res) => {
      console.log(res)
      dispatch(getEvent(res.result));
    });
};

export const updateEvent = payload => {
  return {
    type: UPDATE_EVENT,
    payload
  };
};

export const updateEventRequest = (event, id) => dispatch => {
  callApi('update', {
    "eventId": id,
    "resource": event
  })
    .then((res) => {
      dispatch(updateEvent(res.result));
    });
};

export const cancelEvent = payload => {
  return {
    type: CANCEL_EVENT,
    payload
  };
};

export const cancelEventRequest = id =>
  dispatch => {
    callApi('delete',
      { "eventId": id })
      .then((res) => {
        dispatch(cancelEvent(res));
      })
      .catch((err) => {
        console.log(err)
        // dispatch(err)
      })
  }
