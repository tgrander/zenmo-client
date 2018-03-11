import types from '../types';

const transaction = (state = {}, action) => {
	switch (action.type) {
		case types.UPDATE_TRANSACTION_CATEGORY:
			return {
				...state,
				pendingCategory: action.params.category,
			};

		case types.UPDATE_TRANSACTION_CATEGORY_SUCCESS:
			return {
				...state,
				pendingCategory: null,
				category: action.category,
			};

		case types.UPDATE_TRANSACTION_CATEGORY_FAILURE:
			return {
				...state,
				pendingCategory: null,
				updateCategoryError: true,
			};

		default:
			return state;
	}
};

export default transaction;
