import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import isEmpty from 'lodash/isEmpty';

import * as assetConstants from './modules/trialBalance/constants/assets';

const defaultAssetsState = {
  'Checkings': 0,
  'Savings': 0,
}
const defaultExpensesState = {
  'Rent': 0,
  'Monthly Expenses': 0,
}
const defaultLiabilitiesState = {
  'Student Loans': 0,
  'Bootcamp Loans': 0,
}
const defaultGoalsState = {
  'Add to Savings': 0,
  'Invest in Stocks': 0,
}

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

const assetsReducer = (state=defaultAssetsState, action) => {
  switch (action.type) {
    case assetConstants.ADD_ASSET:
      let addAssetState = {...state}
      addAssetState[action.label] = 0
      return addAssetState

    case assetConstants.REMOVE_ASSET:
      let removeAssetState = {...state}
      delete removeAssetState[action.label]
      return removeAssetState

    case assetConstants.MODIFY_ASSET_LABEL:
      let modifyAssetLabelState = {...state}
      modifyAssetLabelState[action.newLabel] = state.oldLabel
      delete modifyAssetLabelState[action.oldLabel]
      return modifyAssetLabelState

    case assetConstants.MODIFY_ASSET_AMOUNT:
      let modifyAssetAmountState = {...state}
      modifyAssetAmountState[action.label] = action.amount
      return modifyAssetAmountState

    default:
      return state;
  }
}
const expensesReducer = (state=defaultExpensesState, action) => {
  switch (action.type) {
    case assetConstants.ADD_EXPENSE:
      // let addAssetState = {...state}
      // addAssetState[action.label] = 0
      // return addAssetState

    case assetConstants.REMOVE_EXPENSE:
      // let removeAssetState = {...state}
      // delete removeAssetState[action.label]
      // return removeAssetState

    case assetConstants.MODIFY_EXPENSE_LABEL:
      // let modifyAssetLabelState = {...state}
      // modifyAssetLabelState[action.newLabel] = state.oldLabel
      // delete modifyAssetLabelState[action.oldLabel]
      // return modifyAssetLabelState

    case assetConstants.MODIFY_EXPENSE_AMOUNT:
      // let modifyAssetAmountState = {...state}
      // modifyAssetAmountState[action.label] = action.amount
      // return modifyAssetAmountState

    default:
      return state;
  }
}
const liabilityReducer = (state=defaultExpensesState, action) => {
  switch (action.type) {
    case assetConstants.ADD_LIABILITY:
      // let addAssetState = {...state}
      // addAssetState[action.label] = 0
      // return addAssetState

    case assetConstants.REMOVE_LIABILITY:
      // let removeAssetState = {...state}
      // delete removeAssetState[action.label]
      // return removeAssetState

    case assetConstants.MODIFY_LIABILITY_LABEL:
      // let modifyAssetLabelState = {...state}
      // modifyAssetLabelState[action.newLabel] = state.oldLabel
      // delete modifyAssetLabelState[action.oldLabel]
      // return modifyAssetLabelState

    case assetConstants.MODIFY_LIABILITY_AMOUNT:
      // let modifyAssetAmountState = {...state}
      // modifyAssetAmountState[action.label] = action.amount
      // return modifyAssetAmountState

    default:
      return state;
  }
}
const goalsReducer = (state=defaultExpensesState, action) => {
  switch (action.type) {
    case assetConstants.ADD_GOAL:
      // let addAssetState = {...state}
      // addAssetState[action.label] = 0
      // return addAssetState

    case assetConstants.REMOVE_GOAL:
      // let removeAssetState = {...state}
      // delete removeAssetState[action.label]
      // return removeAssetState

    case assetConstants.MODIFY_GOAL_LABEL:
      // let modifyAssetLabelState = {...state}
      // modifyAssetLabelState[action.newLabel] = state.oldLabel
      // delete modifyAssetLabelState[action.oldLabel]
      // return modifyAssetLabelState

    case assetConstants.MODIFY_GOAL_AMOUNT:
      // let modifyAssetAmountState = {...state}
      // modifyAssetAmountState[action.label] = action.amount
      // return modifyAssetAmountState

    default:
      return state;
  }
}

export default combineReducers({
  form: formReducer,
  assets: assetsReducer,
  expenses: expensesReducer,
  liabilities: liabilitiesReducer,
  goals: goalsReducer,
})
