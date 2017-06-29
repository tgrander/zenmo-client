import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import isEmpty from 'lodash/isEmpty';



import * as constants from './modules/trialBalance/constants';

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

const assetsReducer = (state=defaultAssetsState, action) => {
  switch (action.type) {
    case constants.ADD_ASSET:
      let addAssetState = {...state}
      addAssetState[action.label] = 0
      return addAssetState

    case constants.REMOVE_ASSET:
      let removeAssetState = {...state}
      delete removeAssetState[action.label]
      return removeAssetState

    case constants.MODIFY_ASSET_LABEL:
      let modifyAssetLabelState = {...state}
      modifyAssetLabelState[action.newLabel] = state.oldLabel
      delete modifyAssetLabelState[action.oldLabel]
      return modifyAssetLabelState

    case constants.MODIFY_ASSET_AMOUNT:
      let modifyAssetAmountState = {...state}
      modifyAssetAmountState[action.label] = action.amount
      return modifyAssetAmountState

    default:
      return state;
  }
}
const expensesReducer = (state=defaultExpensesState, action) => {
  switch (action.type) {
    case constants.ADD_EXPENSE:
      // let addAssetState = {...state}
      // addAssetState[action.label] = 0
      // return addAssetState

    case constants.REMOVE_EXPENSE:
      // let removeAssetState = {...state}
      // delete removeAssetState[action.label]
      // return removeAssetState

    case constants.MODIFY_EXPENSE_LABEL:
      // let modifyAssetLabelState = {...state}
      // modifyAssetLabelState[action.newLabel] = state.oldLabel
      // delete modifyAssetLabelState[action.oldLabel]
      // return modifyAssetLabelState

    case constants.MODIFY_EXPENSE_AMOUNT:
      // let modifyAssetAmountState = {...state}
      // modifyAssetAmountState[action.label] = action.amount
      // return modifyAssetAmountState

    default:
      return state;
  }
}
const liabilitiesReducer = (state=defaultExpensesState, action) => {
  switch (action.type) {
    case constants.ADD_LIABILITY:
      // let addAssetState = {...state}
      // addAssetState[action.label] = 0
      // return addAssetState

    case constants.REMOVE_LIABILITY:
      // let removeAssetState = {...state}
      // delete removeAssetState[action.label]
      // return removeAssetState

    case constants.MODIFY_LIABILITY_LABEL:
      // let modifyAssetLabelState = {...state}
      // modifyAssetLabelState[action.newLabel] = state.oldLabel
      // delete modifyAssetLabelState[action.oldLabel]
      // return modifyAssetLabelState

    case constants.MODIFY_LIABILITY_AMOUNT:
      // let modifyAssetAmountState = {...state}
      // modifyAssetAmountState[action.label] = action.amount
      // return modifyAssetAmountState

    default:
      return state;
  }
}
const goalsReducer = (state=defaultExpensesState, action) => {
  switch (action.type) {
    case constants.ADD_GOAL:
      // let addAssetState = {...state}
      // addAssetState[action.label] = 0
      // return addAssetState

    case constants.REMOVE_GOAL:
      // let removeAssetState = {...state}
      // delete removeAssetState[action.label]
      // return removeAssetState

    case constants.MODIFY_GOAL_LABEL:
      // let modifyAssetLabelState = {...state}
      // modifyAssetLabelState[action.newLabel] = state.oldLabel
      // delete modifyAssetLabelState[action.oldLabel]
      // return modifyAssetLabelState

    case constants.MODIFY_GOAL_AMOUNT:
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
