import axios from 'axios'
import flatten from 'lodash/flatten'
import moment from 'moment'
import { Observable } from 'rxjs/Observable'
import types from './types'
import {
    fetchTransactions,
    fetchTransactionsError,
    fetchTransactionsRequest,
    fetchTransactionsSuccess,
    loadingTransactions
} from './actions'


const transactionsEpic = (action$, store) => {

    return action$.ofType(types.SET_DEFAULT_TRANSACTIONS_DATE_RANGE)
        .mergeMap(() => {

            return Observable.fromPromise(fetchTransactionsRequest())
                .flatMap(transactions => {

                    return Observable.of(fetchTransactionsSuccess(transactions))
                })
                .catch(error => Observable.of(fetchTransactionsError(error)))
                .startWith(fetchTransactions())
        })
}

export default transactionsEpic
