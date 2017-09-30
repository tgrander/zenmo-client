import { Observable } from 'rxjs/Observable';
import reduce from 'lodash/reduce'


const reduceTransactionsToTotals = transactions => (

    reduce(transactions, (totals, transaction) => {

        const amount = transaction.amount || 0

        const account = transaction.account_id

        totals.total = totals.total += amount

        totals[account]
            ? totals[account] = totals[account] += amount
            : totals[account] = amount

        return totals

    }, {total: 0})
)

const dashboardEpic = (action$, store) => (

    action$.ofType('TRANSACTIONS_FETCH_SUCCESS')
        .map(() => store.getState().transactions.transactions)
        .map(transactions => reduceTransactionsToTotals(transactions))
        .flatMap(totals =>
            Observable.of({
                type: 'CALCULATE_TRANSACTION_TOTALS',
                totals
            })
        )
)

export default dashboardEpic
