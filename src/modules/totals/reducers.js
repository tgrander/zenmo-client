import types from './types'
import transactionTypes from '../transactions/types'


const initialState = {
    totals: {
        total: 0
    },
    isLoading: false
}

export default (state = initialState, action) => {

    switch (action.type) {

        case transactionTypes.FETCH_TRANSACTIONS:
            return {
                isLoading: true
            }

        case types.CALCULATE_TRANSACTION_TOTALS:
            return {
                ...state,
                totals: action.totals,
                isLoading: false
            }


        default:
            return state
    }
}
