import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { Provider } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import store from '../../store';
import MainPage from '../MainPage/MainPage';
import BottomAppBar from '../BottomAppBar/BottomAppBar';
import { gapi, SCOPES, DISCOVERY_DOCS } from '../../gapi';
import { CLIENT_ID, API_KEY } from '../../config';

const useStyles = makeStyles(theme => ({
  appContainer: {
    minHeight: '100vh',
    minWidth: '100%',
    margin: 0,
    padding: 0,
    display: 'flex'
  }
}));

const App = () => {
  useEffect(() => {
    /**
     *  On load, called to load the auth2 library and API client library.
     */
    function handleClientLoad() {
      gapi.load('client:auth2', initClient);
    }

    /**
     *  Initializes the API client library and sets up sign-in state
     *  listeners.
     */
    function initClient() {
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
            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

            // Handle the initial sign-in state.
            updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
            gapi.auth2.getAuthInstance().signIn();
          },
          function (error) {
            appendPre(JSON.stringify(error, null, 2));
          }
        );
    }

    /**
     *  Called when the signed in status changes, to update the UI
     *  appropriately. After a sign-in, the API is called.
     */
    function updateSigninStatus(isSignedIn) {
      if (isSignedIn) {
        listUpcomingEvents();
      }
      // else {

      // }
    }

    /**
     * Append a pre element to the body containing the given message
     * as its text node. Used to display the results of the API call.
     *
     * @param {string} message Text to be placed in pre element.
     */
    function appendPre(message) {
      // var pre = document.getElementById('content');
      var textContent = document.createTextNode(message + '\n');
      console.log(textContent);
    }

    /**
     * Print the summary and start datetime/date of the next ten events in
     * the authorized user's calendar. If no events are found an
     * appropriate message is printed.
     */
    function listUpcomingEvents() {
      gapi.client.calendar.events
        .list({
          calendarId: 'primary',
          timeMin: new Date().toISOString(),
          showDeleted: false,
          singleEvents: true,
          maxResults: 10,
          orderBy: 'startTime'
        })
        .then(function (response) {
          var events = response.result.items;
          appendPre('Upcoming events:');

          if (events.length > 0) {
            for (let i = 0; i < events.length; i++) {
              var event = events[i];
              var when = event.start.dateTime;
              if (!when) {
                when = event.start.date;
              }
              appendPre(event.summary + ' (' + when + ')');
            }
          } else {
            appendPre('No upcoming events found.');
          }
        });
    }
    handleClientLoad();
  }, []);

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
