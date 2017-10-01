import axios from 'axios'
import types from './types'
import moment from 'moment'


export const fetchTransactions = () => ({

    type: types.FETCH_TRANSACTIONS
})

export const fetchTransactionsError = error => ({

    type: types.TRANSACTIONS_FETCH_FAILURE,
    error
})

export const fetchTransactionsSuccess = transactions => ({

    type: types.TRANSACTIONS_FETCH_SUCCESS,
    transactions: transactions.sort(
        (a,b) => new Date(b.date) - new Date(a.date)
    )
})

export const loadingTransactions = () => ({ type: types.LOADING_TRANSACTIONS })

export const getDateRangeDefaultValue = () => {

    const date = new Date()
    const y = date.getFullYear()
    const m = date.getMonth();
    const firstDay = new Date(y, m, 1);
    const lastDay = new Date(y, m + 1, 0);
    const startDate = moment(firstDay)
    const endDate = moment(lastDay)

    return {
        type: types.SET_DEFAULT_TRANSACTIONS_DATE_RANGE,
        payload: [startDate, endDate]
    }
}

export const changeDateRange = range => ({

    type: types.CHANGE_DATE_RANGE,
    payload: range
})
