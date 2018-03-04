import axios from 'axios';


const endpoint = '/transactions';

const post = (endpoint, params = {}) => axios.post(endpoint, params);

const paths = {
  get: '/get',
  categorizeTransaction: '/categorize',
  updateAllTransactionCategories: '/update-all-categories',
};

const endpoints = {
  get: endpoint + paths.get,
  categorizeTransaction: endpoint + paths.categorizeTransaction,
  updateAllTransactionCategories: endpoint + paths.updateAllTransactionCategories,
};

export default {
  get: () => post(endpoints.get),
  categorizeTransaction: params => post(endpoints.categorizeTransaction, params),
  updateAllTransactionCategories: params => post(endpoints.updateAllTransactionCategories, params),
};
