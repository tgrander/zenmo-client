import isEmpty from 'lodash/isEmpty'
import types from './types'


const initialState = {
    loading: false,
    transactions: [],
    dateRange: [],
    defaultDateRange: []
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
                loading: false
            }

        case types.SET_DEFAULT_TRANSACTIONS_DATE_RANGE:
            return {
                ...state,
                dateRange: action.payload,
                defaultDateRange: action.payload
            }

        case types.CHANGE_DATE_RANGE:
            return {
                ...state,
                dateRange: action.payload
            }

        default:
            return state
    }
}

export default transactionsReducer
