import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  MODIFY_EXPENSE_LABEL,
  MODIFY_EXPENSE_AMOUNT,
} from '../constants';

export const addExpense = label => ({
  type: constants.ADD_EXPENSE,
  label
})
export const removeExpense = label => ({
  type: constants.REMOVE_EXPENSE,
  label
})
export const modifyExpenseLabel = (oldLabel, newLabel) => ({
  type: constants.MODIFY_EXPENSE_LABEL,
  oldLabel,
  newLabel
})
export const modifyExpenseAmount = (label, amount) => ({
  type: constants.MODIFY_EXPENSE_AMOUNT,
  label,
  amount
})
export const updateExpensesTotal = (total) => ({
  type: constants.RECALCULATE_EXPENSES_TOTAL,
  total
})
