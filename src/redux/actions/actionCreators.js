import {
  ADD_EVENT,
  GET_ALL_EVENTS,
  UPDATE_EVENT,
  CANCEL_EVENT,
  GET_EVENT
} from './actionTypes';
import { gapi } from '../../gapi';
import callApi from './apiCaller';

export const getAllEvents = payload => {
  return {
    type: GET_ALL_EVENTS,
    payload
  };
};

export const getAllEventsRequest = () => {
  return dispatch => {
    callApi('list')
      .then((res) => {
        dispatch(getAllEvent(res));
    });
  };
}

export const getEvent = payload => {
  return {
    type: GET_EVENT,
    payload
  };
};

export const getEventRequest = id => {
return dispatch => {
  callApi('get', { "eventId": id })
    .then((res) => {
      dispatch(getEvent(res));
    });
};
// return dispatch => {
  //   (() => {
  //     return gapi.client.calendar.events.get({
  //       "calendarId": "primary",
  //       "eventId": id
  //     })
  //       .then(res => {
  //         return dispatch(getEvent(res));
  //       })
  //       .catch(error => {
  //         return error;
  //       });
  //   })();
  // };
};

export const addEvent = payload => {
  console.log("TCL: payload", payload)
  return {
    type: ADD_EVENT,
    payload
  };
};

export const addEventRequest = event => {
  return dispatch => {
  callApi('insert', { "resource": event })
    .then((res) => {
      console.log(res)
      dispatch(getEvent(res.result));
    });
};
/ return dispatch => {
  //   (() => {
  //     return gapi.client.calendar.events.insert({
  //       "calendarId": "primary",
  //       "resource": event
  //     })
  //       .then(res => {
  //         return dispatch(addEvent(res.result));
  //       })
  //       .catch(erro r  = >  { 
  //         return error;
  //       });
  //   })();
  // };
};

export const updateEvent = payload => {
  return {
    type: UPDATE_EVENT,
    payload
  };
};

export const updateEventRequest = (event, id) => {
  return dispatch => {
    (() => {
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
    })();
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
    (() => {
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
    })();
  };
};
