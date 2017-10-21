import axios from 'axios'
import flatten from 'lodash/flatten'
import moment from 'moment'
import { Observable } from 'rxjs/Observable'
import types from './types'
import {
    fetchTransactions,
    fetchTransactionsError,
    fetchTransactionsSuccess,
    loadingTransactions
} from './actions'


const fetchTransactionsRequest = async (dateRange = {}) => {

    return await axios.post('/transactions/get', { dateRange })
        .then(res => res.data)
}


const transactionsEpic = (action$, store) => {

    return action$.ofType(types.SET_DEFAULT_TRANSACTIONS_DATE_RANGE)
        .mergeMap(() => {

            const dateRange = store.getState().transactions.dateRange

            return Observable.fromPromise(fetchTransactionsRequest())
                .flatMap(transactionsData => {

                    return Observable.of(
                        fetchTransactionsSuccess(transactionsData)
                    )
                })
                .catch(error => Observable.of(fetchTransactionsError(error)))
                .startWith(fetchTransactions())
        })
}

export default transactionsEpic
