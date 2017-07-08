import {
  UPDATE_NET_INCOME,
  UPDATE_LEFTOVER,
} from '../constants';

export const updateNetIncome = netIncome => ({
  type: UPDATE_NET_INCOME,
  netIncome
})

export const updateLeftover = leftover => ({
  type: UPDATE_LEFTOVER,
  leftover
})
