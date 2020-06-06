import { CLIENT_ID, API_KEY } from './config'

export const gapi = window.gapi
const SCOPES = 'https://www.googleapis.com/auth/calendar'
const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
]

export const handleClientLoad = () => {
  gapi.load('client:auth2', initClient)
}

const initClient = () => {
  gapi.client
    .init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    })
    .then(
      function () {
        gapi.auth2.getAuthInstance().signIn()
      }
    )
}
