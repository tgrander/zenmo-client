import { connect } from 'react-redux'
import compose from 'recompose/compose'
import Total from '../components/Total'


const calculateLeftover = (netIncome, goalsTotal) => {

    console.log('NET INCOME: ', netIncome)
    console.log('GOALS: ', goalsTotal)

    return (netIncome - goalsTotal)
}

const mapStateToProps = state => {

  const {
    goalsTotal,
    netIncome,
  } = state.trialBalance.totals

  return {
    total: calculateLeftover(netIncome, goalsTotal) || 0,
    className: 'bottome-line'
  }
}

const redux = connect(
  mapStateToProps
)

export default compose(
  redux,
)(Total)
