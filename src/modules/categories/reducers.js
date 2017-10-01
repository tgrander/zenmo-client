import types from './types'
import transactionTypes from '../transactions/types'


const initialState = {
    isLoading: false,
    categories: {}
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
                categories: action.categories,
                isLoading: false
            }

        default:
            return state
    }
}

export default categoriesReducer
