import moxios from 'moxios'
import { testStore } from '../utils/testStore'
import { getAllEventsRequest } from '../redux/actions/actionCreators'

describe('getAllEventsRequest action', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  test('Store is updated correctly', () => {
    const expectedState = [{
    }]
    const store = testStore()
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: expectedState
      })
    })
    // change below to saga
    return store.dispatch(getAllEventsRequest())
      .then(() => {
        const newState = store.getState()
        expect(newState.posts).toBe(expectedState)
      })
  })
})
