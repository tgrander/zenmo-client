import { connect } from 'react-redux';
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers';

import { updateNetIncome } from '../actions/trialBalanceActions';
import Total from '../components/Total';

const calculateNetIncome = (

    assetsTotal,
    expensesTotal,
    liabilitiesTotal

) => {

    const netIncome = assetsTotal - expensesTotal - liabilitiesTotal

    return netIncome || 0;
}

const mapStateToProps = state => {

    const {
        assets,
        expenses,
        liabilities,
    } = state.trialBalance.totals;

    return {
        total: calculateNetIncome(assets, expenses, liabilities),
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
