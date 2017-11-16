import types from './types'
import transactionTypes from '../transactions/types'


const initialState = {
    isLoading: false,
    categories: [],
    transactionCategories: {}
}

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case transactionTypes.FETCH_TRANSACTIONS:
            return {
                isLoading: true
            }

        case types.CATEGORIZE_TRANSACTIONS:
            return {
                ...state,
                transactionCategories: action.transactionCategories,
                isLoading: false
            }

        case types.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categories: action.categories
            }

        default:
            return state
    }
}

export default categoriesReducer
