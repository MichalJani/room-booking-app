import {
  GET_ALL_EVENTS_ERROR,
  GET_ALL_EVENTS_START,
  GET_ALL_EVENTS_FINISH
} from '../actions/actionTypes'
import eventReducer from './eventReducer'
import { eventStates } from '../../utils/consts'

describe('Event Reducer', () => {
  it('Should return default state', () => {
    const newState = eventReducer(undefined, {})
    expect(newState).toEqual({
      eventsState: eventStates.LOADED,
      data: []
    })
  })

  it('Should return new state if receiving type', () => {
    const events = [
      { event: 'event1' },
      { event: 'event2' },
      { event: 'event3' }
    ]
    const newState = eventReducer(undefined, {
      type: GET_ALL_EVENTS_FINISH,
      payload: events
    })
    expect(newState).toEqual({
      eventsState: eventStates.LOADED,
      data: events
    })
  })
})
