import axios from 'axios'
import flatten from 'lodash/flatten'
import { Observable } from 'rxjs/Observable'
import types from './types'
import {
    fetchTransactionsError,
    fetchTransactionsSuccess,
    loadingTransactions
} from './actions'

const fetchTransactions = async () => await axios.get('/plaid/transactions')

const transactionsEpic = (action$, store) => {

    return action$.ofType(types.FETCH_TRANSACTIONS)
        .mergeMap(() =>
            Observable.fromPromise(fetchTransactions())
            .map(res => flatten(res.data.transactions))
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
