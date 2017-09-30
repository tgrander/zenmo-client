const initialState = {
    totals: {}
}

const dashboardReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CALCULATE_TRANSACTION_TOTALS':
            return {
                ...state,
                totals: action.totals
            }


        default:
            return state
    }
}

export default dashboardReducer
