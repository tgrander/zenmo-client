import React from 'react'
import { connect } from 'react-redux'
import withHandlers from 'recompose/withHandlers'
import pipe from 'lodash/fp/flow'

import AmountInput from '../components/AmountInput'
import {
  modifyAssetAmount,
  modifyExpenseAmount,
  modifyLiabilityAmount,
  modifyGoalAmount,
} from '../actions/assets.js';

const redux = connect(
  null,
  {
    assets: modifyAssetAmount,
    expenses: modifyExpenseAmount,
    liabilities: modifyLiabilityAmount,
    goals: modifyGoalAmount,
  }
)

const handlers = withHandlers({
  changeHandler: props => e => {
    const {
      onChangeAction,
      section,
      input: { name }
    } = props;

    const amount = parseInt(e.target.value)

    onChangeAction(section, name, amount);
    input.onChange(e);
  }
})

export default pipe(
  handlers,
  redux,
)(AmountInput)
