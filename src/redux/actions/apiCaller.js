
const callApi = (command, body = {}) => {
  return gapi.client.calendar.events[command]({
    "calendarId": "primary",
    ...body
  }
  )
    .then(res => {
      return res;
    })
    .catch(error => {
      return error;
    });
}

export default callApi;
