import { Observable } from 'rxjs/Observable';
import { categorizeTransactions } from './actions'
import types from './types'


export const categoriesEpic = (action$, store) =>
    action$.ofType('TRANSACTIONS_FETCH_SUCCESS')
        .map(() => store.getState().transactions.transactions)
        .flatMap(transactions =>
            Observable.of(categorizeTransactions(transactions))
        )
