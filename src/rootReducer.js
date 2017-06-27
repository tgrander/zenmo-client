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
const MODIFY_ASSET_LABEL = 'MODIFY_ASSET_LABEL';
const MODIFY_ASSET_AMOUNT = 'MODIFY_ASSET_AMOUNT';

const ADD_EXPENSE = 'ADD_EXPENSE';
const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
const MODIFY_EXPENSE_LABEL = 'MODIFY_EXPENSE_LABEL';
const MODIFY_EXPENSE_AMOUNT = 'MODIFY_EXPENSE_AMOUNT';

const ADD_LIABILITY = 'ADD_LIABILITY';
const REMOVE_LIABILITY = 'REMOVE_LIABILITY';
const MODIFY_LIABILITY_LABEL = 'MODIFY_LIABILITY_LABEL';
const MODIFY_LIABILITY_AMOUNT = 'MODIFY_LIABILITY_AMOUNT';

const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';
const MODIFY_GOAL_LABEL = 'MODIFY_GOAL_LABEL';
const MODIFY_GOAL_AMOUNT = 'MODIFY_GOAL_AMOUNT';

const addAsset = label => ({
  type: ADD_ASSET,
  label
})
const removeAsset = label => ({
  type: REMOVE_ASSET,
  label
})
const modifyAssetLabel = (oldLabel, newLabel) => ({
  type: MODIFY_ASSET_LABEL,
  oldLabel,
  newLabel
})
const modifyAssetAmount = (label, amount) => ({
  type: MODIFY_ASSET_AMOUNT,
  label,
  amount
})

const assetsReducer = (state=defaultAssetsState, action) => {
  switch (action.type) {
    case ADD_ASSET:
      let addAssetState = {...state}
      addAssetState[action.label] = 0
      return addAssetState

    case REMOVE_ASSET:
      let removeAssetState = {...state}
      delete removeAssetState[action.label]
      return removeAssetState

    case MODIFY_ASSET_LABEL:
      let modifyAssetLabelState = {...state}
      modifyAssetLabelState[action.newLabel] = state.oldLabel
      delete modifyAssetLabelState[action.oldLabel]
      return modifyAssetLabelState

    case MODIFY_ASSET_AMOUNT:
      let modifyAssetAmountState = {...state}
      modifyAssetAmountState[action.label] = action.amount
      return modifyAssetAmountState

    default:
      return state;
  }
}
const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'expression':

    default:
      return state;
  }
}
const liabilitiesReducer = (state, action) => {
  switch (action.type) {
    case 'expression':

    default:
      return state;
  }
}
const goalsReducer = (state, action) => {
  switch (action.type) {
    case 'expression':

    default:
      return state;
  }
}

export default combineReducers({
  form: formReducer,
  assets: assetsReducer,
})
