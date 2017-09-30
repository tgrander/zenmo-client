import { connect } from 'react-redux'
import withHandlers from 'recompose/withHandlers'
import pipe from 'lodash/fp/flow'
import Transactions from '../components/Transactions'
import { fetchTransactions } from '../actions/transactions-actions'


const mapStateToProps = state => {

    const { transactions } = state

    return {
        isLoading: transactions.isLoading,
        transactions: transactions.transactions
    }
}

const reduxActions = {
    fetchTransactions
}

const redux = connect(
    mapStateToProps,
    {
        fetchTransactions
    }
)

const handlers = withHandlers({ })

export default pipe(
    // handlers,
    redux
)(Transactions)
