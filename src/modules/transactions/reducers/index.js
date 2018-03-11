import { combineReducers } from 'redux';
import allIds from './allIds';
import byId from './byId';
import dateRange from './dateRange';

const transactions = combineReducers({
	allIds,
	byId,
	dateRange,
});

export default transactions;
