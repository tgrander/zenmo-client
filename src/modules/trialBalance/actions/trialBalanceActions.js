import {
  ADD_ITEM,
  REMOVE_ITEM,
  CHANGE_ITEM_LABEL,
  CHANGE_ITEM_AMOUNT,
  UPDATE_TOTAL,
  UPDATE_NET_INCOME,
  UPDATE_LEFTOVER,

  FETCH_TRIAL_BALANCE,
  IS_FETCHING_TRIAL_BALANCE,
  TRIAL_BALANCE_FETCH_SUCCESS,
  TRIAL_BALANCE_FETCH_FAILURE,
} from '../constants';


export const fetchTrialBalance = userId => ({
  type: FETCH_TRIAL_BALANCE,
  userId
})
export const isFetchingTrialBalance = () => ({
  type: IS_FETCHING_TRIAL_BALANCE
})
export const trialBalanceFetchSuccess = trialBalance => ({
  type: TRIAL_BALANCE_FETCH_SUCCESS,
  trialBalance
})
export const trialBalanceFetchFailure = () => ({
  type: TRIAL_BALANCE_FETCH_FAILURE
})

export const addItem = (section, label) => ({
  type: ADD_ITEM,
  payload: {
    section,
    label
  }
})
export const removeItem = (section, label) => ({
  type: REMOVE_ITEM,
  payload: {
    section,
    label
  }
})
export const changeItemLabel = (section, oldLabel, newLabel) => ({
  type: CHANGE_ITEM_LABEL,
  payload: {
    section,
    oldLabel,
    newLabel
  }
})
export const changeItemAmount = (section, label, amount, uid) => ({
  type: CHANGE_ITEM_AMOUNT,
  payload: {
    section,
    label,
    amount,
    uid
  }
})
export const updateTotal = (section, total) => ({
  type: UPDATE_TOTAL,
  payload: {
    section,
    total
  }
})
