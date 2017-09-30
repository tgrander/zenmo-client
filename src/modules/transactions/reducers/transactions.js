import {
    HYDRATE_TRANSACTIONS_STATE,
    LOADING_TRANSACTIONS,
    TRANSACTIONS_FETCH_SUCCESS,
    TRANSACTIONS_FETCH_FAILURE
} from '../constants/transactions-constants'


const initialState = {
    loading: false,
    transactions: []
}

const transactionsReducer = (state = initialState, action) => {

    switch (action.type) {

        case TRANSACTIONS_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                transactions: action.transactions
            }

        case LOADING_TRANSACTIONS:
            return {
                ...state,
                loading: true
            }

        case TRANSACTIONS_FETCH_FAILURE:
            return {
                ...state,
                transactions: action.transactions,
                loading: false
            }

        default:
            return state
    }
}

export default transactionsReducer
