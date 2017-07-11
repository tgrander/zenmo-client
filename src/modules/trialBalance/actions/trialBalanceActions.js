import {
  ADD_ITEM,
  REMOVE_ITEM,
  CHANGE_ITEM_LABEL,
  CHANGE_ITEM_AMOUNT,
  RECALCULATE_SECTION_TOTAL,
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
  type: 'UPDATE_TOTAL',
  payload: {
    section,
    total
  }
})
