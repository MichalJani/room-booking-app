import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <div className="App">
          <MainPage />
        </div>
      </>
    );
  }
}

export default App;
