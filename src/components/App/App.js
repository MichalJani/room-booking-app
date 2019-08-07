import React, { useEffect } from 'react'
import { Container } from '@material-ui/core'
import { Provider } from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import store from '../../store'
import MainPage from '../MainPage/MainPage'
import BottomAppBar from '../BottomAppBar/BottomAppBar'
import { gapi, SCOPES, DISCOVERY_DOCS } from '../../gapi'
import { CLIENT_ID, API_KEY } from '../../config'

const useStyles = makeStyles(theme => ({
  appContainer: {
    minHeight: '100vh',
    minWidth: '100%',
    display: 'flex',
    margin: 0,
    padding: 0
  }
}))

const App = () => {
  useEffect(() => {
    /**
     *  On load, called to load the auth2 library and API client library.
     */
    function handleClientLoad () {
      gapi.load('client:auth2', initClient)
    }

    /**
     *  Initializes the API client library and sets up sign-in state
     *  listeners.
     */
    function initClient () {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        })
        .then(
          function () {
            // Listen for sign-in state changes.
            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus)

            // Handle the initial sign-in state.
            updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get())
            gapi.auth2.getAuthInstance().signIn()
          }
        )
    }

    /**
     *  Called when the signed in status changes, to update the UI
     *  appropriately. After a sign-in, the API is called.
     */
    function updateSigninStatus (isSignedIn) {
      if (isSignedIn) {
      }
    }

    handleClientLoad()
  }, [])

  const classes = useStyles()

  return (
    <Provider store={store}>
      <Container className={classes.appContainer} maxWidth={false}>
        <MainPage />
        <BottomAppBar />
      </Container>
    </Provider>
  )
};

export default App
