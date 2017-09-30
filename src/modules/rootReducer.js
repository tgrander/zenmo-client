import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './auth'
import categoriesReducer from './categories'
import totalsReducer from './totals'
import transactionsReducer from './transactions'


export default combineReducers({

    auth: authReducer,
    categories: categoriesReducer,
    totals: totalsReducer,
    form: formReducer,
    transactions: transactionsReducer
})
