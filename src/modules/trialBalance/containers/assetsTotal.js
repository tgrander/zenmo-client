import { connect } from 'react-redux'
import pipe from 'lodash/fp/flow';
import withHandlers from 'recompose/withHandlers';
import withState from 'recompose/withState';
import Total from '../components/Total'
import calculateTotal from '../../../helpers/calculateTotal'
import animateAmountChange from '../../../helpers/animateAmountChange'

const mapStateToProps = state => ({
  total: calculateTotal(state.assets)
})

const redux = connect(mapStateToProps)

const amountState = withState('amount', 'updateAmount', 0)

const handlers = withHandlers({
  onChange: ({updateAmount}) => () => {

  }
})

export default pipe(
  redux,
  amountState,
  handlers,
)(Total)
