import { connect } from 'react-redux'
import pipe from 'lodash/fp/flow';
import withHandlers from 'recompose/withHandlers'
import { updateTotal } from '../actions/trialBalanceActions';
import Total from '../components/Total'


const calculateNetIncome = (

    assetsTotal,
    expensesTotal,
    liabilitiesTotal

) => {

    const netIncome = assetsTotal - expensesTotal - liabilitiesTotal

    return netIncome || 0
}

const mapStateToProps = state => {

    const {
        assetsTotal,
        expensesTotal,
        liabilitiesTotal,
    } = state.trialBalance.totals

    return {
        total: calculateNetIncome(assetsTotal, expensesTotal, liabilitiesTotal),
        className: 'bottome-line'
    }
}

const redux = connect(
  mapStateToProps,
  {
    updateTotal
  }
)

const handlers = withHandlers({

  updateTotalHandler: ({ updateTotal, total }) => () => {

      updateTotal('netIncome', total)
  }
})

export default pipe(
    handlers,
    redux,
    // amountState,
)(Total)
