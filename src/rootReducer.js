import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { combineEpics } from 'redux-observable';

import authReducer from './modules/auth/reducers/auth';

import { pingEpic } from './rxjs/epics/trialBalance';

import * as constants from './modules/trialBalance/constants';

const defaultTrialBalanceState = {
  assets: {
    'Checkings': 0,
    'Savings': 0,
    'Monthly Income': 0
  },
  expenses: {
    'Rent': 0,
    'Monthly Expenses': 0,
  },
  liabilities: {
    'Student Loans': 0,
    'Bootcamp Loans': 0,
  },
  goals: {
    'Add to Savings': 0,
    'Invest in Stocks': 0,
  },
  totals: {
    assets: 0,
    expenses: 0,
    liabilities: 0,
    goals: 0,
    netIncome: 0,
    bottomLine: 0,
  }
}

const defaultTotalsState = {
  assetsTotal: 0,
  expensesTotal: 0,
  liabilitiesTotal: 0,
  goalsTotal: 0,
  netIncome: 0,
  bottomLine: 0,
}
const trialBalanceReducer = (state=defaultTrialBalanceState, action) => {
  switch (action.type) {
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
// const totalsReducer = (state=defaultTotalsState, action) => {
//   switch (action.type) {
//     case constants.UPDATE_NET_INCOME:
//       return {
//         ...state,
//         netIncome: action.netIncome
//       }
//     case constants.UPDATE_LEFTOVER:
//       return {
//         ...state,
//         leftover: action.leftover
//       }
//     break;
//     default:
//       return state;
//   }
// }

export const rootEpic = combineEpics(
  pingEpic,
)

export default combineReducers({
  form: formReducer,
  trialBalance: trialBalanceReducer,
  auth: authReducer,
  // totals: totalsReducer,
})
