import axios from 'axios';

const API_URL = 'http://localhost:3000';

const makeRequest = (config) => {
  config.url = `${API_URL}${config.url}`;

  return axios(config);
};

export { makeRequest, API_URL };
