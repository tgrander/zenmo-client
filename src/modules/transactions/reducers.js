import types from './types'


const initialState = {
    loading: false,
    transactions: []
}

const transactionsReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.TRANSACTIONS_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                transactions: action.transactions
            }

        case types.LOADING_TRANSACTIONS:
            return {
                ...state,
                loading: true
            }

        case types.TRANSACTIONS_FETCH_FAILURE:
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
