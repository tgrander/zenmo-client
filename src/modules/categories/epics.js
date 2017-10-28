import { Observable } from 'rxjs/Observable';
import { categorizeTransactions, displayAllCategories } from './actions'
import types from './types'


export const categoriesEpic = (action$, store) =>
    action$.ofType('TRANSACTIONS_FETCH_SUCCESS')
        .map(() => store.getState().transactions.transactions)
        .flatMap(transactions => {

            displayAllCategories(transactions)
            return Observable.of(categorizeTransactions(transactions))
        })
