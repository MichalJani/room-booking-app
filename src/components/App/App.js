import React from 'react';

      import { Container } from '@material-ui/core';
import { Provider } from 'react-redux';
import store from '../../store';

const App = () => {
  return (
    <Provider store={store}>
       <Container>
    <MainPage />
  </Container>
    </Provider>
  );
}
export default App;
