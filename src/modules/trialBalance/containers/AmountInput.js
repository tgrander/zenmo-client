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
  // onChange: (props) => (e) => {
  //   const { section } = props
  //   const updateAmountFunction = props[section]
  //   console.log();
  //   debounce(
  //     () => updateAmountFunction(e.target.value),
  //     800
  //   )
  // }
})

export default pipe(
  handlers,
  redux,
)(AmountInput)
