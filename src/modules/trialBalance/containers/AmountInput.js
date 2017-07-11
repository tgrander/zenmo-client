import { connect } from 'react-redux'
import withHandlers from 'recompose/withHandlers'
import pipe from 'lodash/fp/flow'

import AmountInput from '../components/AmountInput'
import {
  changeItemAmount
} from '../actions/trialBalanceActions';

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
      input
    } = props;

    const amount = parseInt(e.target.value)

    changeItemAmount(section, input.name, amount);
    input.onChange(e);
  }
})

export default pipe(
  handlers,
  redux,
)(AmountInput)
