import { connect } from 'react-redux';
import compose from 'recompose/compose'

import Total from '../components/Total';

const calculateNetIncome = (assetsTotal, expensesTotal, liabilitiesTotal) =>
  assetsTotal - expensesTotal - liabilitiesTotal

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
  mapStateToProps
)

export default compose(
  redux,
)(Total)
