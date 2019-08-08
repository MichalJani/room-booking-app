import React, { useEffect } from 'react'
import { Container } from '@material-ui/core'
import { Provider } from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import store from '../../store'
import MainPage from '../MainPage/MainPage'
import BottomAppBar from '../BottomAppBar/BottomAppBar'
import { /* gapi, SCOPES, DISCOVERY_DOCS,  */handleClientLoad } from '../../gapi'

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
}

export default App
