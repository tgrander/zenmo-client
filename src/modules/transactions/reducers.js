import isEmpty from 'lodash/isEmpty'
import types from './types'
import uniq from 'lodash/uniq'


const initialState = {
    accounts: [],
    dateRange: [],
    defaultDateRange: [],
    filters: [],
    isLoading: false,
    transactions: [],
}

const transactionsReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.TRANSACTIONS_FETCH_SUCCESS:
            return {
                ...state,
                accounts: action.accounts,
                isLoading: false,
                transactions: action.transactions
            }

        case types.LOADING_TRANSACTIONS:
            return {
                ...state,
                isLoading: true
            }

        case types.TRANSACTIONS_FETCH_FAILURE:
            return {
                ...state,
                isLoading: false
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

        case types.CHANGE_FILTER:
            return {
                ...state,
                filters: uniq([...state.filters, action.payload])
            }

        default:
            return state
    }
}

export default transactionsReducer
