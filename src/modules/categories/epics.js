import { Observable } from 'rxjs/Observable';
import {
    categorizeTransactions,
    displayAllCategories,
    fetchCategories,
    fetchCategoriesSuccess,
    fetchCategoriesFailure
} from './actions'
import types from './types'
import transactionTypes from '../transactions/types'


export const categorizeTransactionsEpic = (action$, store) =>
    action$.ofType(transactionTypes.TRANSACTIONS_FETCH_SUCCESS)
        .map(() => store.getState().transactions.transactions)
        .flatMap(transactions => {

            displayAllCategories(transactions)
            return Observable.of(categorizeTransactions(transactions))
        })

export const fetchCategoriesEpic = action$ =>
    action$.ofType(transactionTypes.TRANSACTIONS_FETCH_SUCCESS)
        .mergeMap(() => Observable.fromPromise(fetchCategories())
            .mergeMap(categoriesSnapshot => Observable.of(fetchCategoriesSuccess(categoriesSnapshot)))
            .catch(error => Observable.of(fetchCategoriesFailure(error)))
            .startWith({ type: types.FETCH_CATEGORIES }))
