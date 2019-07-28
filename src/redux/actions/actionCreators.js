import {
  ADD_EVENT,
  GET_ALL_EVENTS,
  UPDATE_EVENT,
  CANCEL_EVENT,
  GET_EVENT
} from './actionTypes';
// import callApi from './apiCaller';
import { gapi } from '../../gapi';

export const getAllEvents = payload => {
  return {
    type: GET_ALL_EVENTS,
    payload
  };
};

export const getAllEventsRequest = () => {
  return dispatch => {
    function callApi() {
      return gapi.client.calendar.events.list({
        "calendarId": "primary"
      })
        .then(res => {
          return dispatch(getAllEvents(res));
        })
        .catch(error => {
          return error;
        });
    }
    callApi();
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
    function callApi() {
      return gapi.client.calendar.events.get({
        "calendarId": "primary",
        "eventId": id
      })
        .then(res => {
          return dispatch(getEvent(res));
        })
        .catch(error => {
          return error;
        });
    }
    callApi();
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
    function callApi() {
      return gapi.client.calendar.events.insert({
        "calendarId": "primary",
        "resource": event
      })
        .then(res => {
          return dispatch(addEvent(res));
        })
        .catch(error => {
          return error;
        });
    }
    callApi();
  }
}

export const updateEvent = payload => {
  return {
    type: UPDATE_EVENT,
    payload
  };
};

export const updateEventRequest = (event, id) => {
  return dispatch => {
    function callApi() {
      return gapi.client.calendar.events.update({
        "calendarId": "primary",
        "eventId": id,
        "resource": event
      })
        .then(res => {
          return dispatch(updateEvent(res));
        })
        .catch(error => {
          return error;
        });
    }
    callApi();
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
    function callApi() {
      return gapi.client.calendar.events.delete({
        "calendarId": "primary",
        "eventId": id
      })
        .then(res => {
          return dispatch(cancelEvent(res));
        })
        .catch(error => {
          return error;
        });
    }
    callApi();
  };
};
