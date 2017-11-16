import moment from 'moment';
import types from './types';
import getCurrentMonth from 'utils/getCurrentMonth';
import endpoints from './endpoints';


export const fetchTransactionsRequest = async (dateRange = {}) => {
  const transactions = await endpoints.get();
  return transactions.data;
};

export const fetchTransactions = () => ({ type: types.FETCH_TRANSACTIONS });

export const fetchTransactionsError = error => ({
  type: types.TRANSACTIONS_FETCH_FAILURE,
  error,
});

export const fetchTransactionsSuccess = transactions => ({
  type: types.TRANSACTIONS_FETCH_SUCCESS,
  transactions: transactions.sort((a, b) => new Date(b.date) - new Date(a.date)),
});

export const loadingTransactions = () => ({ type: types.LOADING_TRANSACTIONS });

export const getDateRangeDefaultValue = () => {
  const dateRange = getCurrentMonth();
  return {
    type: types.SET_DEFAULT_TRANSACTIONS_DATE_RANGE,
    payload: [dateRange.startDate, dateRange.endDate],
  };
};

export const changeDateRange = range => ({
  type: types.CHANGE_DATE_RANGE,
  payload: range,
});

export const changeTransactionsFilter = filter => ({
  type: types.CHANGE_FILTER,
  payload: filter,
});

export const changeQuickDisplayFilter = filter => ({
  type: types.CHANGE_QUICK_DISPLAY_FILTER,
  payload: filter,
});

export const resetQuickDisplayFilter = () => ({
  type: types.RESET_QUICK_DISPLAY_FILTER,
});

export const updateTransactionCategory = params =>
  ({ type: types.UPDATE_TRANSACTION_CATEGORY, params });

export const updateSingleTransactionCategory = params =>
  endpoints.updateSingleTransactionCategory(params);

export const updateCategoryForAllTransactionsWithSameName = params =>
  endpoints.updateAllTransactionCategories(params);
