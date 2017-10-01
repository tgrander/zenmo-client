import { connect } from 'react-redux'
import withHandlers from 'recompose/withHandlers'
import pipe from 'lodash/fp/flow'
import Transactions from './transactions/Transactions'
import { fetchTransactions } from '../../modules/transactions/actions'


const mapStateToProps = ({ transactions }) => {

    return {
        isLoading: transactions.isLoading,
        transactions: transactions.transactions.map(transaction => {

            return {
                key: transaction.transaction_id,
                amount: transaction.amount,
                category: transaction.category && transaction.category[0],
                date: transaction.date,
                description: transaction.name
            }
        })
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
