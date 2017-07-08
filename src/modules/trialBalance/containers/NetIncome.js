import { connect } from 'react-redux';
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers';

import { updateNetIncome } from '../actions/totals';
import Total from '../components/Total';

const calculateNetIncome = (assetsTotal, expensesTotal, liabilitiesTotal) => {
  const netIncome = assetsTotal - expensesTotal - liabilitiesTotal
  if (netIncome === NaN) {
    return 0;
  }
  return netIncome;
}

const mapStateToProps = state => {
  const {
    assetsTotal,
    expensesTotal,
    liabilitiesTotal,
  } = state.totals;

  return {
    total: calculateNetIncome(assetsTotal, expensesTotal, liabilitiesTotal),
    className: 'bottome-line'
  }
}

const redux = connect(
  mapStateToProps,
  {
    updateNetIncome
  }
)

const handlers = withHandlers({
  updateTotal: ({ updateNetIncome }) => total => {
    updateNetIncome(total)
  }
})

export default compose(
  redux,
  handlers,
)(Total)
