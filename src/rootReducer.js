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
  }
}

const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const CHANGE_ITEM_LABEL = 'CHANGE_ITEM_LABEL';
const CHANGE_ITEM_AMOUNT = 'CHANGE_ITEM_AMOUNT';

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
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.section]: {
          ...state[action.payload.section],
          [action.payload.label]: 0
        }
      }
    case REMOVE_ITEM:
      let removeItemState = {...state}
      delete removeItemState[action.payload.section][action.payload.label]
      return removeItemState

    case CHANGE_ITEM_LABEL:
      let changeItemLabelState = {
        ...state,
        [action.payload.section]: {
          ...state[action.payload.section],
          [action.payload.newLabel]: state[action.payload.section][action.payload.oldLabel]
        }
      }
      delete changeItemLabelState[action.payload.section][action.payload.oldLabel]
      return changeItemLabelState

    case CHANGE_ITEM_AMOUNT:
      return {
        ...state,
        [action.payload.section]: {
          ...state[action.payload.section],
          [action.payload.label]: action.payload.amount
        }
      }

    default:
      return state;
  }
}
const totalsReducer = (state=defaultTotalsState, action) => {
  switch (action.type) {
    case constants.RECALCULATE_ASSETS_TOTAL:
      return {
        ...state,
        assetsTotal: action.assetsTotal
      }
    break;
    case constants.RECALCULATE_EXPENSES_TOTAL:
      return {
        ...state,
        expensesTotal: action.expensesTotal
      }
    break;
    case constants.RECALCULATE_LIABILITIES_TOTAL:
      return {
        ...state,
        liabilitiesTotal: action.liabilitiesTotal
      }
    break;
    case constants.RECALCULATE_GOALS_TOTAL:
      return {
        ...state,
        goalsTotal: action.goalsTotal
      }
    case constants.UPDATE_NET_INCOME:
      return {
        ...state,
        netIncome: action.netIncome
      }
    case constants.UPDATE_LEFTOVER:
      return {
        ...state,
        leftover: action.leftover
      }
    break;
    default:
      return state;
  }
}
// const assetsReducer = (state=defaultAssetsState, action) => {
//   switch (action.type) {
//     case constants.ADD_ASSET:
//       return {
//         ...state,
//         [action.label]: 0
//       }
//
//     case constants.REMOVE_ASSET:
//       let removeAssetState = {...state}
//       delete removeAssetState[action.label]
//       return removeAssetState
//
//     case constants.MODIFY_ASSET_LABEL:
//       let modifyAssetLabelState = {
//         ...state,
//         [action.newLabel]: state.oldLabel
//       }
//       delete modifyAssetLabelState[action.oldLabel]
//       return modifyAssetLabelState
//
//     case constants.MODIFY_ASSET_AMOUNT:
//       return {
//         ...state,
//         [action.section]: {
//           [action.label]: action.amount
//         }
//       }
//
//     default:
//       return state;
//   }
// }
//
// const expensesReducer = (state=defaultExpensesState, action) => {
//   switch (action.type) {
//     case constants.ADD_EXPENSE:
//       // let addAssetState = {...state}
//       // addAssetState[action.label] = 0
//       // return addAssetState
//     break;
//     case constants.REMOVE_EXPENSE:
//       // let removeAssetState = {...state}
//       // delete removeAssetState[action.label]
//       // return removeAssetState
//     break;
//     case constants.MODIFY_EXPENSE_LABEL:
//       // let modifyAssetLabelState = {...state}
//       // modifyAssetLabelState[action.newLabel] = state.oldLabel
//       // delete modifyAssetLabelState[action.oldLabel]
//       // return modifyAssetLabelState
//     break;
//     case constants.MODIFY_EXPENSE_AMOUNT:
//       return {
//         ...state,
//         [action.label]: action.amount
//       }
//     break;
//     default:
//       return state;
//   }
// }
//
// const liabilitiesReducer = (state=defaultLiabilitiesState, action) => {
//   switch (action.type) {
//     case constants.ADD_LIABILITY:
//       // let addAssetState = {...state}
//       // addAssetState[action.label] = 0
//       // return addAssetState
//     break;
//     case constants.REMOVE_LIABILITY:
//       // let removeAssetState = {...state}
//       // delete removeAssetState[action.label]
//       // return removeAssetState
//     break;
//     case constants.MODIFY_LIABILITY_LABEL:
//       // let modifyAssetLabelState = {...state}
//       // modifyAssetLabelState[action.newLabel] = state.oldLabel
//       // delete modifyAssetLabelState[action.oldLabel]
//       // return modifyAssetLabelState
//     break;
//     case constants.MODIFY_LIABILITY_AMOUNT:
//       return {
//         ...state,
//         [action.label]: action.amount
//       }
//     break;
//     default:
//       return state;
//   }
// }
//
// const goalsReducer = (state=defaultGoalsState, action) => {
//   switch (action.type) {
//     case constants.ADD_GOAL:
//       // let addAssetState = {...state}
//       // addAssetState[action.label] = 0
//       // return addAssetState
//     break;
//     case constants.REMOVE_GOAL:
//       // let removeAssetState = {...state}
//       // delete removeAssetState[action.label]
//       // return removeAssetState
//     break;
//     case constants.MODIFY_GOAL_LABEL:
//       // let modifyAssetLabelState = {...state}
//       // modifyAssetLabelState[action.newLabel] = state.oldLabel
//       // delete modifyAssetLabelState[action.oldLabel]
//       // return modifyAssetLabelState
//     break;
//     case constants.MODIFY_GOAL_AMOUNT:
//       return {
//         ...state,
//         [action.label]: action.amount
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
  // assets: assetsReducer,
  // expenses: expensesReducer,
  // liabilities: liabilitiesReducer,
  // goals: goalsReducer,
  auth: authReducer,
  totals: totalsReducer,
})
