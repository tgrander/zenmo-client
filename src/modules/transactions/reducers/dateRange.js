import types from '../types';

const initialState = {
	current: [],
	default: [],
};

const dateRange = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_DEFAULT_TRANSACTIONS_DATE_RANGE:
			console.log(action.payload);
			return {
				...state,
				default: action.payload,
			};

		case types.CHANGE_DATE_RANGE:
			return {
				...state,
				dateRange: action.payload,
			};

		default:
			return state;
	}
};

export default dateRange;
