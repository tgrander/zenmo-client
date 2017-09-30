import axios from 'axios'
import { Observable } from 'rxjs/Observable'
import {
    TRANSACTIONS_FETCH_SUCCESS,
    HYDRATE_TRANSACTIONS_STATE
} from '../constants/transactions-constants'
import {
    fetchTransactionsError,
    fetchTransactionsSuccess,
    loadingTransactions
} from '../actions/transactions-actions'

const fetchTransactions = async () => await axios.get('/plaid/transactions')

const increment = () => ({ type: 'INCREMENT' });

const transactionsEpic = (action$, store) => {

    return action$.ofType('FETCH_TRANSACTIONS')
        .mergeMap(() =>
            Observable.fromPromise(fetchTransactions())
            .map(res => res.data.transactions)
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
