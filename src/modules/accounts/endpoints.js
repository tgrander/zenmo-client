import axios from 'axios';

const endpoint = '/accounts';

const post = (endpoint, params = {}) => axios.post(endpoint, params);

const paths = {
  get: '/get',
};

const endpoints = {
  get: endpoint + paths.get,
};

export default {
  get: () => post(endpoints.get),
};
