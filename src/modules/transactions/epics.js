import axios from 'axios'
import flatten from 'lodash/flatten'
import { Observable } from 'rxjs/Observable'
import types from './types'
import {
    fetchTransactionsError,
    fetchTransactionsSuccess,
    loadingTransactions
} from './actions'

const fetchTransactions = async (dateRange) => {

    return await axios.post('/plaid/transactions', { dateRange })
}

const transactionsEpic = (action$, store) => {

    return action$.ofType(types.SET_DEFAULT_TRANSACTIONS_DATE_RANGE)
        .mergeMap(() =>
            Observable.fromPromise(fetchTransactions(store.getState().transactions.dateRange))
            .map(res => {

                console.log('RESPONSE: ', res);
                return flatten(res.data.transactions)}
            )
            .flatMap(transactions =>
                Observable.of(
                    fetchTransactionsSuccess(transactions)
                )
             )
            .catch(error => Observable.of(fetchTransactionsError(error)))
            .startWith(loadingTransactions())
        )
}

export default transactionsEpic
