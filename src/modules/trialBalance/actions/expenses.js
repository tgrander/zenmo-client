import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  MODIFY_EXPENSE_LABEL,
  MODIFY_EXPENSE_AMOUNT,
  RECALCULATE_EXPENSES_TOTAL,
} from '../constants';

export const addExpense = label => ({
  type: ADD_EXPENSE,
  label
})
export const removeExpense = label => ({
  type: REMOVE_EXPENSE,
  label
})
export const modifyExpenseLabel = (oldLabel, newLabel) => ({
  type: MODIFY_EXPENSE_LABEL,
  oldLabel,
  newLabel
})
export const modifyExpenseAmount = (label, amount) => ({
  type: MODIFY_EXPENSE_AMOUNT,
  label,
  amount
})
export const updateExpensesTotal = (total) => ({
  type: RECALCULATE_EXPENSES_TOTAL,
  total
})
