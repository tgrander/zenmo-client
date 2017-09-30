import types from './types'


const initialState = {
    totals: {}
}

export default (state = initialState, action) => {

    switch (action.type) {

        case types.CALCULATE_TRANSACTION_TOTALS:
            return {
                ...state,
                totals: action.totals
            }


        default:
            return state
    }
}
