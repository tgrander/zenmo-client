import { CATEGORIZE_TRANSACTIONS } from '../constants/categories-actions-types'


const initialState = {
    categories: {}
}

const categoriesReducer = (state = initialState, action) => {

    switch (action.type) {

        case CATEGORIZE_TRANSACTIONS:
            return {
                ...state,
                categories: action.categories
            }

        default:
            return state
    }
}

export default categoriesReducer
