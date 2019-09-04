import { CHANGE_DRAWER_STATE } from '../actions/actionTypes'

const initialState = {
  isDrawerOpen: false
}

const drawerStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DRAWER_STATE:
      return {
        ...state,
        isDrawerOpen: action.payload
      }

    default:
      return state
  }
}

export default drawerStateReducer
