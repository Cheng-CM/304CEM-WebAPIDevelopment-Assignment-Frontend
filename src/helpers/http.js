import Vue from 'vue';
import axios from 'axios';

const API_ENDPOINT = process.env.API_ENDPOINT;
console.log(`API_ENDPOINT = ${API_ENDPOINT}`);

// Base URL for all axios request
axios.defaults.baseURL = API_ENDPOINT;

// Axios Request Interceptors
axios.interceptors.request.use(config => {
  // config.headers.Authorization = 'Bearer ' + JWToken.getToken();
  return config;
});

axios.interceptors.response.use(response => {
  if (response.data) {
    // Placeholder for JWT Implementation later
  }

  return response;
}, error => {
  const response = error.response;

  if (response && response.data) {
    // Placeholder for JWT Implementation later
  }

  return Promise.reject(error);
});

// Axios Response Interceptors
axios.interceptors.response.use(
  response => {
    return response;
  },
  async ({ response }) => {
    const { data, status } = response;

    switch (status) {
      case 422:
        console.error('422, api params error', response);
        break;
      case 401:
        // Handle insufficient permission
        break;

    }
    return Promise.reject(response);
  }
);

// Register axios globally in Vue instance
Vue.prototype.$axios = axios;

export default axios;