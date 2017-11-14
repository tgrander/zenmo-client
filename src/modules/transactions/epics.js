import axios from 'axios'
import flatten from 'lodash/flatten'
import moment from 'moment'
import { Observable } from 'rxjs/Observable'
import { db } from '../../firebase'
import types from './types'
import {
    // fetchTransactions,
    fetchTransactionsError,
    fetchTransactionsRequest,
    fetchTransactionsSuccess,
    loadingTransactions
} from './actions'


const fetchTransactions = (db, startDate, endDate) => new Promise((resolve, reject) => {
    db.collection('transactions')
        .where('date', '>=', startDate)
        .where('date', '<=', endDate)
        .orderBy('date')
        .get()
        .then(snapshot => {

            const transactions = snapshot.docs.reduce((accum, curr) => {
                const transaction = curr.data()
                accum.push(transaction)
                return accum
            }, [])

            return resolve(transactions)
        })
        .catch(err => reject(err))
})


const transactionsEpic = (action$, store) => {

    return action$.ofType(types.SET_DEFAULT_TRANSACTIONS_DATE_RANGE, types.CHANGE_DATE_RANGE)
        .mergeMap(() => {

            const [ startDate, endDate ] = store.getState().transactions.dateRange

            return Observable.fromPromise(fetchTransactions(db, startDate, endDate))
                .flatMap(transactions => Observable.of(fetchTransactionsSuccess(transactions)))
                .catch(error => Observable.of(fetchTransactionsError(error)))
        })
}

export default transactionsEpic
