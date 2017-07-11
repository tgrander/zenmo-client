import { connect } from 'react-redux';
import compose from 'recompose/compose'

import Total from '../components/Total';

const calculateLeftover = (netIncome, goals) => netIncome - goals

const mapStateToProps = state => {
  const {
    goals,
    netIncome,
  } = state.trialBalance.totals;

  return {
    total: calculateLeftover(netIncome, goals),
    className: 'bottome-line'
  }
}

const redux = connect(
  mapStateToProps
)

export default compose(
  redux,
)(Total)
