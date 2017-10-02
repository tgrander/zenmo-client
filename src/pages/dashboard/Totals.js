import reduce from 'lodash/reduce'
import pipe from 'lodash/fp/flow'
import { connect } from 'react-redux'
import withHandlers from 'recompose/withHandlers'
import Totals from './totals/Totals'


const mapStateToProps = ({ totals, transactions }) => {

    return {
        accounts: transactions.accounts,
        isLoading: totals.isLoading,
        accountTotals: reduce(totals.totals, (accountTotals, total, account) => {

            if (account !== 'total') {
                accountTotals.push({
                    account,
                    total: total.toFixed(2)
                })
            }

            return accountTotals

        }, []),
        totalOfAllAccounts: totals.totals.total.toFixed(2)
    }
}

const redux = connect(
    mapStateToProps,
    {

    }
)

const handlers = withHandlers({ })

export default pipe(
    handlers,
    redux
)(Totals)
