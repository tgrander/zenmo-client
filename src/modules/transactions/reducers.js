import CategoryFilters from 'constants/transactions/category-filters';
import types from './types';

const initialState = {
	accounts: [],
	dateRange: [],
	defaultDateRange: [],
	filter: CategoryFilters.ALL,
	quickDisplayFilter: CategoryFilters.ALL,
	isLoading: false,
	allTransactions: [],
	transactionsById: {},
};

const transactionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_TRANSACTIONS:
			return {
				...state,
				isLoading: true,
			};

		case types.TRANSACTIONS_FETCH_SUCCESS:
			return {
				...state,
				accounts: action.accounts,
				isLoading: false,
				allTransactions: action.allTransactions,
				transactionsById: action.transactionsById,
			};

		case types.TRANSACTIONS_FETCH_FAILURE:
			return {
				...state,
				isLoading: false,
			};

		case types.SET_DEFAULT_TRANSACTIONS_DATE_RANGE:
			return {
				...state,
				dateRange: action.payload,
				defaultDateRange: action.payload,
			};

		case types.CHANGE_DATE_RANGE:
			return {
				...state,
				dateRange: action.payload,
			};

		case types.CHANGE_FILTER:
			return {
				...state,
				filter: action.filter,
			};

		case types.CHANGE_QUICK_DISPLAY_FILTER:
			return {
				...state,
				quickDisplayFilter: action.filter,
			};

		case types.RESET_QUICK_DISPLAY_FILTER:
			return {
				...state,
				quickDisplayFilter: CategoryFilters.ALL,
			};

		case types.UPDATE_TRANSACTION_CATEGORY:
			return {};

		default:
			return state;
	}
};

export default transactionsReducer;
