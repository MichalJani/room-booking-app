import { takeLatest, put } from 'redux-saga/effects'
import { callApi } from '../utils/helpers'

function * watchGetEventsSaga () {
  yield takeLatest('GET_ALL_EVENTS', getEventsSaga)
}

function * getEventsSaga () {
  yield put({ type: 'GET_ALL_EVENTS_START' })

  const eventsResponse = yield callApi('list')
  // const events = yield eventsResponse
  console.log(`saga response1: ${eventsResponse.result.items}`)
  eventsResponse.result.items.map(event => {
    console.log(event)
  })
  const responseBody = JSON.parse(eventsResponse.body)
  console.log(`saga response2: ${responseBody.items}`)
  yield put({ type: 'GET_ALL_EVENTS_FINISH', payload: responseBody.items })
}

export default watchGetEventsSaga
