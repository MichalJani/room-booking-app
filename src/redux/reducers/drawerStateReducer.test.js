import {
  CHANGE_DRAWER_STATE
} from '../actions/actionTypes'
import drawerStateReducer from './drawerStateReducer'

describe('Drawer State Reducer', () => {
  it('Should return default state', () => {
    const newState = drawerStateReducer(undefined, {})
    expect(newState).toEqual({
      isDrawerOpen: false
    })
  })

  it('Should return new state if receiving type', () => {
    const bool = true
    const newState = drawerStateReducer(undefined, {
      type: CHANGE_DRAWER_STATE,
      payload: bool
    })
    expect(newState).toEqual({
      isDrawerOpen: true
    })
  })
})
