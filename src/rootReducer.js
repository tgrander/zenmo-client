import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

const defaultAssetsState = {
  checkings: 0,
}
const defaultExpensesState = {
  rent: 0,
  'monthly-expenses': 0,
}
const defaultLiabilitiesState = {
  'student-loans': 0,
}
const defaultGoalsState = {
  'add-to-savings': 0,
  'invest-in-stocks': 0
}

const ADD_ASSET = 'ADD_ASSET';
const REMOVE_ASSET = 'REMOVE_ASSET';
const MODIFY_ASSET = 'MODIFY_ASSET';

const ADD_EXPENSE = 'ADD_EXPENSE';
const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
const MODIFY_EXPENSE = 'MODIFY_EXPENSE';

const ADD_LIABILITY = 'ADD_LIABILITY';
const REMOVE_LIABILITY = 'REMOVE_LIABILITY';
const MODIFY_LIABILITY = 'MODIFY_LIABILITY';

const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';
const MODIFY_GOAL = 'MODIFY_GOAL';

const assetsReducer = (state, action) => {
  switch (action.type) {
    case 'expression':

    default:
      return state;
  }
}

export default combineReducers({
  form: formReducer
})
