import {
  GET_ALL_EVENTS_ERROR,
  GET_ALL_EVENTS_START,
  GET_ALL_EVENTS_FINISH,
  GET_EVENT,
  GET_ALL_EVENTS,
  ADD_EVENT,
  UPDATE_EVENT,
  CANCEL_EVENT
} from '../actions/actionTypes'
import { eventStates } from '../../utils/consts'

const initialState = {
  eventsState: eventStates.LOADED,
  eventList: [],
  errorMessage: null
}

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_EVENTS_START:
      return {
        ...state,
        eventsState: eventStates.FETCHING
      }
    case GET_ALL_EVENTS_FINISH:
      return {
        ...state,
        eventsState: eventStates.LOADED,
        eventList: action.payload
      }
    case GET_ALL_EVENTS_ERROR:
      return {
        ...state,
        eventsState: eventStates.ERROR,
        errorMessage: action.error
      }
    case GET_ALL_EVENTS:
      return {
        ...state,
        eventList: action.payload,
        eventsState: eventStates.LOADED
      }
    case ADD_EVENT:
      console.log(state.eventList)
      console.log(action.payload, '------payload-----')
      return {
        ...state,
        eventList: [action.payload, ...state.eventList]
      }

    case GET_EVENT:
      return {
        ...state,
        event: action.payload
      }

    case UPDATE_EVENT:
      const filterList = state.eventList.filter(
        event => event.id !== action.payload.id
      )
      const newList = [action.payload, filterList]
      return {
        ...state,
        eventList: newList
      }

    case CANCEL_EVENT:
      return {
        ...state,
        eventList: state.eventList.filter(event => event.id !== action.payload)
      }

    default:
      return state
  }
}

export default eventReducer
