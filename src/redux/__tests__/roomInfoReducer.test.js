import {
  CHANGE_ROOM_STATUS
} from '../actions/actionTypes'
import { roomStates } from '../../utils/consts'
import roomInfoReducer from '../reducers/roomInfoReducer'

describe('Room Info Reducer', () => {
  it('Should return default state', () => {
    const newState = roomInfoReducer(undefined, {})
    expect(newState).toEqual({
      name: 'Room 407',
      state: roomStates.AVAILABLE
    })
  })

  it('Should return new state if receiving type', () => {
    const roomState = {
      name: 'Room 407',
      state: roomStates.OCCUPIED
    }
    const state = {
      name: 'Room 407',
      state: roomStates.AVAILABLE
    }
    const newState = roomInfoReducer(state, {
      type: CHANGE_ROOM_STATUS,
      payload: roomState
    })
    expect(newState).toEqual({
      ...state,
      status: {
        name: 'Room 407',
        state: 'Occupied'
      }
    })
  })
})
