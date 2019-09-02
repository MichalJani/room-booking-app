import React from 'react'
import { Container } from '@material-ui/core'
import { Provider } from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import store from '../../store'
import { MainPageConnected } from '../MainPage/'
import { BottomAppBar } from '../BottomAppBar/'

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
  const classes = useStyles()

  return (
    <Provider store={store}>
      <Container className={classes.appContainer} maxWidth={false}>
        <MainPageConnected />
        <BottomAppBar />
      </Container>
    </Provider>
  )
}

export default App
