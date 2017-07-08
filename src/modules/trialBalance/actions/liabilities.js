import {
  ADD_LIABILITY,
  REMOVE_LIABILITY,
  MODIFY_LIABILITY_LABEL,
  MODIFY_LIABILITY_AMOUNT,
} from '../constants';

export const addLiability = label => ({
  type: constants.ADD_LIABILITY,
  label
})
export const removeLiability = label => ({
  type: constants.REMOVE_LIABILITY,
  label
})
export const modifyLiabilityLabel = (oldLabel, newLabel) => ({
  type: constants.MODIFY_LIABILITY_LABEL,
  oldLabel,
  newLabel
})
export const modifyLiabilityAmount = (label, amount) => ({
  type: constants.MODIFY_LIABILITY_AMOUNT,
  label,
  amount
})
export const updateLiabilitiesTotal = (total) => ({
  type: constants.RECALCULATE_LIABILITIES_TOTAL,
  total
})
