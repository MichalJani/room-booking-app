import axios from 'axios';

export const BASE_URL = 'https://dry-ravine-29395.herokuapp.com/api';

export default function callApi(endpoint, method = 'GET', body) {
  return axios({
    method,
    url: `${BASE_URL}/${endpoint}`,
    data: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
}
