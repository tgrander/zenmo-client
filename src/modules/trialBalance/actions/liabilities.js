import {
  ADD_LIABILITY,
  REMOVE_LIABILITY,
  MODIFY_LIABILITY_LABEL,
  MODIFY_LIABILITY_AMOUNT,
  RECALCULATE_LIABILITIES_TOTAL,
} from '../constants';

export const addLiability = label => ({
  type: ADD_LIABILITY,
  label
})
export const removeLiability = label => ({
  type: REMOVE_LIABILITY,
  label
})
export const modifyLiabilityLabel = (oldLabel, newLabel) => ({
  type: MODIFY_LIABILITY_LABEL,
  oldLabel,
  newLabel
})
export const modifyLiabilityAmount = (label, amount) => ({
  type: MODIFY_LIABILITY_AMOUNT,
  label,
  amount
})
export const updateLiabilitiesTotal = (total) => ({
  type: RECALCULATE_LIABILITIES_TOTAL,
  total
})
