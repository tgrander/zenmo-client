import types from './types'


const initialState = {
    categories: {}
}

const categoriesReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.CATEGORIZE_TRANSACTIONS:
            return {
                ...state,
                categories: action.categories
            }

        default:
            return state
    }
}

export default categoriesReducer
