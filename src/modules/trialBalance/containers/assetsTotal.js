import { connect } from 'react-redux';
import pipe from 'lodash/fp/flow';

import withHandlers from 'recompose/withHandlers';
import withState from 'recompose/withState';

import Total from '../components/Total';
import calculateTotal from '../../../helpers/calculateTotal';
import { updateAssetsTotal } from '../actions/assets';

const mapStateToProps = state => ({
  total: calculateTotal(state.trialBalance.assets)
})

const redux = connect(
  mapStateToProps,
  {
    updateAssetsTotal,
  }
)

const amountState = withState('amount', 'updateAmount', 0)

const handlers = withHandlers({
  onChange: ({updateAmount}) => () => {
    // var count = oldAmount;
    // var number = newAmount;
    // var interval = setInterval(function(){
    //   cb(++count)
    //   if (count === number) clearInterval(interval)
    // }, 100);
  },
  updateTotal: ({ updateAssetsTotal }) => total => {
    updateAssetsTotal(total)
  }
})

export default pipe(
  amountState,
  handlers,
  redux,
)(Total)
