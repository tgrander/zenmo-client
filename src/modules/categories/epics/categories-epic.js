import { Observable } from 'rxjs/Observable';
import { categorizeTransactions } from '../actions/categories-actions'
import { CATEGORIZE_TRANSACTIONS } from '../constants/categories-actions-types'


export const categoriesEpic = (action$, store) =>
    action$.ofType('TRANSACTIONS_FETCH_SUCCESS')
        .map(() => store.getState().transactions.transactions)
        .flatMap(transactions =>
            Observable.of(categorizeTransactions(transactions))
        )
