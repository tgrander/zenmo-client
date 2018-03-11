import types from '../types';

const transaction = (state = {}, action) => {
	switch (action.type) {
		case types.UPDATE_TRANSACTION_CATEGORY:
			return {
				...state,
				pendingCategory: action.payload.category,
			};

		case types.UPDATE_TRANSACTION_CATEGORY_SUCCESS:
			return {
				...state,
				category: state.pendingCategory,
				pendingCategory: null,
			};

		case types.UPDATE_TRANSACTION_CATEGORY_FAILURE:
			return {
				...state,
				failedUpdatedCategory: state.pendingCategory,
				pendingCategory: null,
				updateCategoryError: true,
			};

		default:
			return state;
	}
};

export default transaction;
