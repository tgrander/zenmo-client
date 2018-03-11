import types from '../types';
import transaction from './transaction';

const byId = (state = {}, action) => {
	switch (action.type) {
		case types.TRANSACTIONS_FETCH_SUCCESS:
			return { ...state, ...action.byId };

		case types.UPDATE_TRANSACTION_CATEGORY:
		case types.UPDATE_TRANSACTION_CATEGORY_SUCCESS:
		case types.UPDATE_TRANSACTION_CATEGORY_FAILURE:
			const { transaction_id } = action.params.transaction;
			return {
				...state,
				[transaction_id]: transaction(state[transaction_id], action),
			};

		default:
			return state;
	}
};

export default byId;
