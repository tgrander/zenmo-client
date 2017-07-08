import {
  ADD_GOAL,
  REMOVE_GOAL,
  MODIFY_GOAL_LABEL,
  MODIFY_GOAL_AMOUNT,
  RECALCULATE_GOALS_TOTAL,
} from '../constants';

export const addGoal = label => ({
  type: ADD_GOAL,
  label
})
export const removeGoal = label => ({
  type: REMOVE_GOAL,
  label
})
export const modifyGoalLabel = (oldLabel, newLabel) => ({
  type: MODIFY_GOAL_LABEL,
  oldLabel,
  newLabel
})
export const modifyGoalAmount = (label, amount) => ({
  type: MODIFY_GOAL_AMOUNT,
  label,
  amount
})
export const updateGoalsTotal = (total) => ({
  type: RECALCULATE_GOALS_TOTAL,
  total
})
