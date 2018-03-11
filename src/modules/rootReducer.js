import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import filtersReducer from './filters';
import transactions from './transactions/reducers';

export default combineReducers({
	categories: categoriesReducer,
	filters: filtersReducer,
	transactions,
});
