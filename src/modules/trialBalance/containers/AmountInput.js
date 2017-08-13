import { connect } from 'react-redux'
import withHandlers from 'recompose/withHandlers'
import pipe from 'lodash/fp/flow'

import AmountInput from '../components/AmountInput'
import { changeItemAmount } from '../actions/trialBalanceActions';

const redux = connect(
  null,
  {
    changeItemAmount
  }
)

const changeHandler = props => e => {

  const {
    changeItemAmount,
    section,
    input,
    uid
  } = props;

  const amount = parseInt(e.target.value) || 0

  changeItemAmount(section, input.name, amount, uid);

  input.onChange(e);
}

const handlers = withHandlers({ changeHandler })

export default pipe(
  handlers,
  redux,
)(AmountInput)
