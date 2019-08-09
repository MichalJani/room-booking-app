import { applyMiddleware, createStore } from 'redux'
import rootReducer from '../redux/reducers'
import { sagaMiddleware } from '../store'

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...sagaMiddleware)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState)
}
