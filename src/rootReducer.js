import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { combineEpics } from 'redux-observable';

import authReducer from './modules/auth/reducers/auth';

import { pingEpic, trialBalanceEpic } from './rxjs/epics/trialBalance';

import * as constants from './modules/trialBalance/constants';

const defaultTrialBalanceState = {
    assets: {},
    expenses: {},
    liabilities: {},
    goals: {},
    totals: {},
    isFetching: false,
}

const defaultTotalsState = {
  assetsTotal: 0,
  expensesTotal: 0,
  liabilitiesTotal: 0,
  goalsTotal: 0,
  netIncome: 0,
  bottomLine: 0,
}
const trialBalanceReducer = (state = defaultTrialBalanceState, action) => {
  switch (action.type) {
    case constants.IS_FETCHING_TRIAL_BALANCE:
      return {
        ...state,
        isFetching: true
      }
    case constants.TRIAL_BALANCE_FETCH_SUCCESS:
      return {
        ...state,
        ...action.trialBalance,
        isFetching: false
      }
    case constants.ADD_ITEM:
      return {
        ...state,
        [action.payload.section]: {
          ...state[action.payload.section],
          [action.payload.label]: 0
        }
      }
    case constants.REMOVE_ITEM:
      let removeItemState = {...state}
      delete removeItemState[action.payload.section][action.payload.label]
      return removeItemState

    case constants.CHANGE_ITEM_LABEL:
      let changeItemLabelState = {
        ...state,
        [action.payload.section]: {
          ...state[action.payload.section],
          [action.payload.newLabel]: state[action.payload.section][action.payload.oldLabel]
        }
      }
      delete changeItemLabelState[action.payload.section][action.payload.oldLabel]
      return changeItemLabelState

    case constants.CHANGE_ITEM_AMOUNT:
      return {
        ...state,
        [action.payload.section]: {
          ...state[action.payload.section],
          [action.payload.label]: action.payload.amount
        }
      }

    case constants.UPDATE_TOTAL:
      return {
        ...state,
        totals: {
          ...state.totals,
          [action.payload.section]: action.payload.total
        }
      }

    case constants.UPDATE_NET_INCOME:
      return {
        ...state,
        totals: {
          ...state.totals,
          netIncome: action.payload.netIncome
        }
      }

    case constants.UPDATE_LEFTOVER:
      return {
        ...state,
        totals: {
          ...state.totals,
          leftover: action.payload.leftover
        }
      }
    default:
      return state;
  }
}

export const rootEpic = combineEpics(
  pingEpic,
  trialBalanceEpic,
)

export default combineReducers({
  form: formReducer,
  trialBalance: trialBalanceReducer,
  auth: authReducer,
})
