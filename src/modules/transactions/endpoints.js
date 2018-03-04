import axios from 'axios';


const endpoint = '/transactions';

const post = (endpoint, params = {}) => axios.post(endpoint, params);

const paths = {
  get: '/get',
  updateSingleTransactionCategory: '/update-single-category',
  updateAllTransactionCategories: '/update-all-categories',
};

const endpoints = {
  get: endpoint + paths.get,
  updateSingleTransactionCategory: endpoint + paths.updateSingleTransactionCategory,
  updateAllTransactionCategories: endpoint + paths.updateAllTransactionCategories,
};

export default {
  get: () => post(endpoints.get),
  updateSingleTransactionCategory: params => post(endpoints.updateSingleTransactionCategory, params),
  updateAllTransactionCategories: params => post(endpoints.updateAllTransactionCategories, params),
};
