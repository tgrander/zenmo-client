import React from 'react'
import { connect } from 'react-redux'
import withHandlers from 'recompose/withHandlers'
import pipe from 'lodash/fp/flow'

import AmountInput from '../components/AmountInput'
import {
  changeItemAmount
} from '../actions/trialBalance';

const redux = connect(
  null,
  {
    changeItemAmount
  }
)

const handlers = withHandlers({
  changeHandler: props => e => {
    
    const {
      changeItemAmount,
      section,
      input: { name }
    } = props;

    const amount = parseInt(e.target.value)

    changeItemAmount(section, name, amount);
    input.onChange(e);
  }
})

export default pipe(
  handlers,
  redux,
)(AmountInput)
