import React from 'react';
import { Container } from '@material-ui/core';
import { Provider } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import store from '../../store';
import MainPage from '../MainPage/MainPage';
<<<<<<< HEAD
=======
import BottomAppBar from '../BottomAppBar/BottomAppBar';
>>>>>>> develop

const useStyles = makeStyles(theme => ({
  appContainer: {
    minHeight: '100vh',
    minWidth: '100%',
    margin: 0,
    padding: 0,
    display: 'flex',
  },
}));
const App = () => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Container className={classes.appContainer} maxWidth={false}>
        <MainPage />
        <BottomAppBar />
      </Container>
    </Provider>
  );
};
export default App;
