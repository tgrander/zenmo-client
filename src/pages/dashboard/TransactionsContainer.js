import { connect } from 'react-redux'
import withHandlers from 'recompose/withHandlers'
import pipe from 'lodash/fp/flow'
import map from 'lodash/map'
import moment from 'moment'
import Transactions from './transactions/Transactions'
import {
    changeDateRange,
    fetchTransactions,
    getDateRangeDefaultValue
} from '../../modules/transactions/actions'


const mapAccountsToFilters = accounts => (

    map(accounts, account => ({
        text: account.name,
        value: account
    }))
)

const mapTransactionsToTableDataSource = transactionsData => (

    map(transactionsData.transactions, transaction => ({

        account: transactionsData.accounts[transaction.account_id].name,
        amount: transaction.amount,
        category: transaction.category && transaction.category[0],
        date: moment(transaction.date).format('MMM Do, YYYY'),
        description: transaction.name,
        key: transaction.transaction_id,
    }))
)

const mapStateToProps = ({ transactions }) => {

    return {
        accountFilters: mapAccountsToFilters(transactions.accounts),
        accounts: transactions.accounts,
        dateRange: transactions.dateRange,
        defaultDateRange: transactions.defaultDateRange,
        isLoading: transactions.isLoading,
        transactions: mapTransactionsToTableDataSource(transactions)
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
