import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import categoriesReducer from './categories';
import filtersReducer from './filters';
import totalsReducer from './totals';
import transactionsReducer from './transactions';


export default combineReducers({

  auth: authReducer,
  categories: categoriesReducer,
  filters: filtersReducer,
  form: formReducer,
  totals: totalsReducer,
  transactions: transactionsReducer,
});
