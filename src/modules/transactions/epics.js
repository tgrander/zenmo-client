import axios from 'axios'
import flatten from 'lodash/flatten'
import moment from 'moment'
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
        .mergeMap(() => {

            const dateRange = store.getState().transactions.dateRange

            return Observable.fromPromise(fetchTransactions(dateRange))
                .map(res => res.data.transactions)
                .flatMap(transactionsData => {

                    return Observable.of(
                        fetchTransactionsSuccess(transactionsData)
                    )
                })
                .catch(error => Observable.of(fetchTransactionsError(error)))
                .startWith(loadingTransactions())
        })
}

export default transactionsEpic
