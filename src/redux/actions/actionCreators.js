import {
  ADD_EVENT,
  GET_ALL_EVENTS,
  UPDATE_EVENT,
  CANCEL_EVENT,
  GET_EVENT,
  CHANGE_ROOM_STATUS,
  CHANGE_DRAWER_STATE,
  GET_ALL_EVENTS_START,
  GET_ALL_EVENTS_ERROR
} from './actionTypes'
import { callApi } from '../../utils/helpers'
import { handleClientLoad } from '../../gapi'

export const setAllEvents = payload => {
  console.log(payload)
  return {
    type: GET_ALL_EVENTS,
    payload
  }
}

export const getAllEventsStart = () => {
  return {
    type: GET_ALL_EVENTS_START
  }
}

export const getAllEventsError = (error) => {
  return {
    type: GET_ALL_EVENTS_ERROR,
    error
  }
}

export const getAllEventsRequest = () => async dispatch => {
  dispatch(getAllEventsStart())
  try {
    if (!window.gapi.client) {
      await handleClientLoad()
    }

    const response = await callApi('list')
    console.log(response)
    dispatch(setAllEvents(response))
  } catch (error) {
    console.log(error)
    dispatch(getAllEventsError(error))
  }
}

export const getEvent = payload => {
  return {
    type: GET_EVENT,
    payload
  }
}

export const getEventRequest = id => dispatch => {
  callApi('get', { eventId: id })
    .then(res => {
      dispatch(getEvent(res))
    })
    .catch(err => {
      console.log(err)
      // dispatch(err)
    })
}

export const addEvent = payload => {
  console.log('TCL: payload', payload)
  return {
    type: ADD_EVENT,
    payload
  }
}

export const addEventRequest = event => dispatch => {
  callApi('insert', { resource: event })
    .then(res => {
      console.log(res)
      dispatch(addEvent(res.result))
    })
    .catch(err => {
      console.log(err)
      // dispatch(err)
    })
}

export const updateEvent = payload => {
  return {
    type: UPDATE_EVENT,
    payload
  }
}

export const updateEventRequest = (event, id) => dispatch => {
  callApi('update', {
    eventId: id,
    resource: event
  })
    .then(res => {
      dispatch(updateEvent(res.result))
    })
    .catch(err => {
      console.log(err)
      // dispatch(err)
    })
}

export const cancelEvent = payload => {
  return {
    type: CANCEL_EVENT,
    payload
  }
}

export const cancelEventRequest = id => dispatch => {
  callApi('delete', { eventId: id })
    .then(res => {
      dispatch(cancelEvent(res))
    })
    .catch(err => {
      console.log(err)
      // dispatch(err)
    })
}

export const changeRoomState = state => {
  return {
    type: CHANGE_ROOM_STATUS,
    payload: state
  }
}

export const changeDrawerState = state => {
  return {
    type: CHANGE_DRAWER_STATE,
    payload: state
  }
}
