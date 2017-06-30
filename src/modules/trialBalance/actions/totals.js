import {
RECALCULATE_ASSETS_TOTAL
RECALCULATE_EXPENSES_TOTAL
RECALCULATE_LIABILITIES_TOTAL
RECALCULATE_GOALS_TOTAL
UPDATE_NET_INCOME
UPDATE_LEFTOVER
} from '../constants';

const calculateNetIncome = (
  totalAssets, totalExpenses, totalLiabilities
) => {
  return (totalAssets - totalExpenses - totalLiabilities)
}
export const updateNetIncome = (
  totalAssets, totalExpenses, totalLiabilities
) => ({
  type: UPDATE_NET_INCOME,
  netIncome: calculateNetIncome(
    totalAssets, totalExpenses, totalLiabilities
  )
})

const calculateLefotver = (netIncome, totalGoals) => {
  return (netIncome - totalGoals)
}
export const updateLeftover = (netIncome, totalGoals) => ({
  type: UPDATE_LEFTOVER,
  leftover: calculateLefotver(netIncome, totalGoals)
})
