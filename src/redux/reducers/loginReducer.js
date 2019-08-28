import { LOG_IN } from '../actions/actionTypes'

const initialState = {
  isLoggedIn: false
}

const drawerStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: action.payload
      }

    default:
      return state
  }
}

export default drawerStateReducer
