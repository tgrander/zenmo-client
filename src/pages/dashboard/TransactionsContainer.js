import { connect } from 'react-redux'
import withHandlers from 'recompose/withHandlers'
import pipe from 'lodash/fp/flow'
import chain from 'lodash/chain'
import map from 'lodash/map'
import head from 'lodash/head'
import filter from 'lodash/filter'
import moment from 'moment'
import Transactions from './transactions/Transactions'
import CategoryFilters from 'constants/transactions/category-filters'
import {
    changeDateRange,
    changeTransactionsFilter,
    fetchTransactions,
    getDateRangeDefaultValue
} from '../../modules/transactions/actions'


const mapAccountsToFilters = accounts => (

    map(accounts, account => ({
        text: account.name,
        value: account.name,
        account
    }))
)

const filterTransactionsByCategory = (transactions, categoryFilter) => {

    if (categoryFilter === CategoryFilters.ALL) {
        return transactions
    }

    return filter(transactions, transaction => {

        return transaction.category && head(transaction.category) === categoryFilter
    })
}

const mapTransactionsToTableDataSource = transactionsData => {

    const transactions = filterTransactionsByCategory(
        transactionsData.transactions,
        transactionsData.filter
    )

    return map(transactions, transaction => ({

        account: transactionsData.accounts[transaction.account_id].name,
        amount: transaction.amount,
        category: transaction.category && transaction.category[0],
        date: moment(transaction.date).format('MMM Do, YYYY'),
        description: transaction.name,
        key: transaction.transaction_id,
    }))
}

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
        changeTransactionsFilter,
        getDateRangeDefaultValue,
        fetchTransactions
    }
)

const handlers = withHandlers({ })

export default pipe(
    // handlers,
    redux
)(Transactions)
