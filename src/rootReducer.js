import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { combineEpics } from 'redux-observable';

import authReducer from './modules/auth/reducers/auth';

import { pingEpic } from './rxjs/epics/trialBalance';

import * as constants from './modules/trialBalance/constants';

const defaultAssetsState = {
  'Checkings': 4800,
  'Savings': 5050,
  'Monthly Income': 6200
}
const defaultExpensesState = {
  'Rent': 2000,
  'Monthly Expenses': 1500,
}
const defaultLiabilitiesState = {
  'Student Loans': 500,
  'Bootcamp Loans': 500,
}
const defaultGoalsState = {
  'Add to Savings': 1000,
  'Invest in Stocks': 200,
}
const defaultTotalsState = {
  assetsTotal: 0,
  expensesTotal: 0,
  liabilitiesTotal: 0,
  goalsTotal: 0,
  netIncome: 0,
  bottomLine: 0,
}

const totalsReducer = (state=defaultTotalsState, action) => {
  switch (action.type) {
    case constants.RECALCULATE_ASSETS_TOTAL:
      return {
        ...state,
        assetsTotal: action.total
      }
    case constants.RECALCULATE_EXPENSES_TOTAL:
      return {
        ...state,
        assetsTotal: action.total
      }
    case constants.RECALCULATE_LIABILITIES_TOTAL:
      return {
        ...state,
        assetsTotal: action.total
      }
    case constants.RECALCULATE_GOALS_TOTAL:
      return {
        ...state,
        assetsTotal: action.total
      }
    default:
      return state;
  }
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

const liabilitiesReducer = (state=defaultLiabilitiesState, action) => {
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

const goalsReducer = (state=defaultGoalsState, action) => {
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

export const rootEpic = combineEpics(
  pingEpic,
)

export default combineReducers({
  form: formReducer,
  assets: assetsReducer,
  expenses: expensesReducer,
  liabilities: liabilitiesReducer,
  goals: goalsReducer,
  auth: authReducer,
})
