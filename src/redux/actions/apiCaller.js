// import axios from 'axios';

// // export const BASE_URL = 'https://www.googleapis.com/calendar/v3/calendars';
// // https://www.googleapis.com/calendar/v3/calendars/calendarId/events
// // ?key=[YOUR_API_KEY]
// import { gapi } from '../../gapi';
// // export const key = '?key=';
// // export

// export default function callApi(resource) {
//   return gapi.client.calendar.events.insert({
//     "calendarId": "primary",
//     "resource": resource
//   })
//     .then(res => {
//       console.log("TCL: callApi -> response", res)

//       return res.result;
//     })
//     .catch(error => {
//       return error;
//     });

// }
// export default function callApi(calendarId, method = 'GET', body) {
//   return axios({
//     method,
//     url: `${BASE_URL}/${calendarId}/events`,
//     data: JSON.stringify(body),
//     headers: {
//       'Authorization': 'Bearer [YOUR_ACCESS_TOKEN]',

//       'Accept': 'application/json',

//       'Content-Type': 'application/json'
//     }
//   })
//     .then(res => {
//       return res.data;
//     })
//     .catch(error => {
//       return error;
//     });
// }
