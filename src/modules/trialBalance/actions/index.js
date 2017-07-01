import * as constants from '../constants';

/*
* ASSETS ACTIONS
*/
export const addAsset = label => ({
  type: constants.ADD_ASSET,
  label
})
export const removeAsset = label => ({
  type: constants.REMOVE_ASSET,
  label
})
export const modifyAssetLabel = (oldLabel, newLabel) => ({
  type: constants.MODIFY_ASSET_LABEL,
  oldLabel,
  newLabel
})
export const modifyAssetAmount = (label, amount) => ({
  type: constants.MODIFY_ASSET_AMOUNT,
  label,
  amount
})
export const updateAssetsTotal = (total) => ({
  type: constants.RECALCULATE_ASSETS_TOTAL,
  total
})

/*
* EXPENSES ACTIONS
*/
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

/*
* LIABILIES ACTIONS
*/
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

/*
* GOALS ACTIONS
*/
export const addGoal = label => ({
  type: constants.ADD_GOAL,
  label
})
export const removeGoal = label => ({
  type: constants.REMOVE_GOAL,
  label
})
export const modifyGoalLabel = (oldLabel, newLabel) => ({
  type: constants.MODIFY_GOAL_LABEL,
  oldLabel,
  newLabel
})
export const modifyGoalAmount = (label, amount) => ({
  type: constants.MODIFY_GOAL_AMOUNT,
  label,
  amount
})
export const updateGoalsTotal = (total) => ({
  type: constants.RECALCULATE_GOALS_TOTAL,
  total
})
