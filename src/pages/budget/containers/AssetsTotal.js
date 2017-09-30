import { connect } from 'react-redux';
import pipe from 'lodash/fp/flow';
import withHandlers from 'recompose/withHandlers';
import withState from 'recompose/withState';
import Total from '../components/Total';
import calculateTotal from '../../../helpers/calculateTotal';
import { updateTotal } from '../actions/trialBalanceActions';


const mapStateToProps = state => ({
    total: calculateTotal(state.trialBalance.assets)
})

const redux = connect(mapStateToProps, { updateTotal })

const amountState = withState('amount', 'updateAmount', 0)

const handlers = withHandlers({

  updateTotalHandler: ({ updateTotal, total }) => () => {

      updateTotal('assetsTotal', total)
  }
})

export default pipe(
    handlers,
    redux,
    // amountState,
)(Total)
