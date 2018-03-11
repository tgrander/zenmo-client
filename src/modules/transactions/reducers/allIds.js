import types from '../types';

const allIds = (state = [], action) => {
	switch (action.type) {
		case types.TRANSACTIONS_FETCH_SUCCESS:
			return [...state, ...action.allIds];

		default:
			return state;
	}
};

export default allIds;
