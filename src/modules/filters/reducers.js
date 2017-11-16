import filterTypes from 'constants/filters/filter-types';
import types from './types';


const initialState = {
  accountsFilter: filterTypes.accounts.ALL,
  transactionsTypeFilter: filterTypes.transactions.SPENDING,
  defaultDateRange: '',
  dateRange: '',
  categoryFilter: filterTypes.categories.ALL,
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_ACCOUNTS_FILTER:
      return {
        ...state,
      };

    case types.CHANGE_CATEGORY_FILTER:
      return {
        ...state,
      };

    case types.CHANGE_DATE_FILTER:
      return {
        ...state,
      };

    case types.CHANGE_TRANSACTION_TYPE_FILTER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default filtersReducer;
