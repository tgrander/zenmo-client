import {
  ADD_GOAL,
  REMOVE_GOAL,
  MODIFY_GOAL_LABEL,
  MODIFY_GOAL_AMOUNT,
} from '../constants';

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
