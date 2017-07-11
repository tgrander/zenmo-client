import {
  ADD_ITEM,
  REMOVE_ITEM,
  CHANGE_ITEM_LABEL,
  CHANGE_ITEM_AMOUNT,
  UPDATE_TOTAL,
  UPDATE_NET_INCOME,
  UPDATE_LEFTOVER,
} from '../constants';

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
export const changeItemAmount = (section, label, amount) => ({
  type: CHANGE_ITEM_AMOUNT,
  payload: {
    section,
    label,
    amount
  }
})
export const updateTotal = (section, total) => ({
  type: UPDATE_TOTAL,
  payload: {
    section,
    total
  }
})
export const updateNetIncome = netIncome => ({
  type: UPDATE_NET_INCOME,
  payload: {
    netIncome
  }
})
export const updateLeftover = leftover => ({
  type: UPDATE_LEFTOVER,
  payload: {
    leftover
  }
})
