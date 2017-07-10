const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const CHANGE_ITEM_LABEL = 'CHANGE_ITEM_LABEL';
const CHANGE_ITEM_AMOUNT = 'CHANGE_ITEM_AMOUNT';
const RECALCULATE_SECTION_TOTAL = 'RECALCULATE_SECTION_TOTAL';

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
export const updateItemTotal = sectionTotal => ({
  type: RECALCULATE_SECTION_TOTAL,
  sectionTotal
})
