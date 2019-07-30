import { gapi } from '../../gapi';

const callApi = (command, body = {}) =>
  gapi.client.calendar.events[command]({
    "calendarId": "primary",
    ...body
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      throw error;
    });


export default callApi;
