import { connect } from 'react-redux'
import withHandlers from 'recompose/withHandlers'
import pipe from 'lodash/fp/flow'
import moment from 'moment'
import Transactions from './transactions/Transactions'
import {
    changeDateRange,
    fetchTransactions,
    getDateRangeDefaultValue
} from '../../modules/transactions/actions'


const mapStateToProps = ({ transactions }) => {

    return {
        accounts: transactions.accounts,
        dateRange: transactions.dateRange,
        defaultDateRange: transactions.defaultDateRange,
        isLoading: transactions.isLoading,
        transactions: transactions.transactions.map(transaction => {

            const m = moment

            return {
                account: transactions.accounts[transaction.account_id].name,
                amount: transaction.amount,
                category: transaction.category && transaction.category[0],
                date: moment(transaction.date).format('MMM Do, YYYY'),
                description: transaction.name,
                key: transaction.transaction_id,
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
        changeDateRange,
        getDateRangeDefaultValue,
        fetchTransactions
    }
)

const handlers = withHandlers({ })

export default pipe(
    // handlers,
    redux
)(Transactions)
