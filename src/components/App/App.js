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
  handleClientLoad =()=> {
      gapi.load('client:auth2', initClient)
    }
    initClient= ()=> {
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
