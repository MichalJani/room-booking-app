import {
  ADD_EVENT,
  GET_ALL_EVENTS,
  UPDATE_EVENT,
  CANCEL_EVENT,
  GET_EVENT
} from './actionTypes';
import callApi from './apiCaller';
import { gapi } from '../../gapi';

export const getAllEvents = payload => {
  return {
    type: GET_ALL_EVENTS,
    payload
  };
};

export const getAllEventsRequest = () => {
  return dispatch => {
    callApi('events').then(res => {
      dispatch(getAllEvents(res));
    });
  };
};

export const getEvent = payload => {
  return {
    type: GET_EVENT,
    payload
  };
};

export const getEventRequest = id => {
  return dispatch => {
    callApi(`events/${id}`).then(res => {
      dispatch(getEvent(res));
    });
  };
};

export const addEvent = payload => {
  console.log(payload);
  return {
    type: ADD_EVENT,
    payload
  };
};

export const addEventRequest = event => {
  return dispatch => {
    function execute() {
      return gapi.client.calendar.events.insert({
        "calendarId": "primary",
        "resource": event
      })
        .then(function (response) {
          // Handle the results here (response.result has the parsed body).
          console.log("Response", response);
          console.log("response.result", response.result);
          dispatch(addEvent(response.result));
        },
          function (err) { console.error("Execute error", err); });
    }
    execute();
  }

  // const insertEvent = gapi.client.calendar.events.insert({
  //   'calendarId': 'primary',
  //   'resource': event
  // });
  // return (

  //   insertEvent.execute(
  //     // console.log("TCL: event", event)
  //   )
  //     .then(response => {
  //       console.log("TCL: response", response)
  //       // dispatch(addEvent(response));
  //     },
  //       function (err) { console.error("Execute error", err); }
  //     )
  // )

};


export const updateEvent = payload => {
  return {
    type: UPDATE_EVENT,
    payload
  };
};

export const updateEventRequest = event => {
  return dispatch => {
    callApi('events', 'POST', event).then(res => {
      dispatch(updateEvent(res));
    });
  };
};

export const cancelEvent = payload => {
  return {
    type: CANCEL_EVENT,
    payload
  };
};

export const cancelEventRequest = id => {
  return dispatch => {
    callApi(`events/${id}`, 'DELETE').then(res => {
      dispatch(cancelEvent(res));
    });
  };
};
