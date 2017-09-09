const initialState = {}

const transactionsReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'HYDRATE_STORE':
            return {
                ...state,
                transactions: action.transactions
            }

        default:
            return state
    }
}

export default transactionsReducer
