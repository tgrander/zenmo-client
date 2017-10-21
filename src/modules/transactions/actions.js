import axios from 'axios'
import reduce from 'lodash/reduce'
import moment from 'moment'
import types from './types'


export const fetchTransactions = () => ({ type: types.FETCH_TRANSACTIONS })

export const fetchTransactionsError = error => ({

    type: types.TRANSACTIONS_FETCH_FAILURE,
    error
})

export const fetchTransactionsSuccess = transactions => ({

    type: types.TRANSACTIONS_FETCH_SUCCESS,
    transactions: transactions.sort(
        (a,b) => b.date - a.date
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

export const changeTransactionsFilter = filter => ({

    type: types.CHANGE_FILTER,
    payload: filter
})

export const changeQuickDisplayFilter = filter => ({

    type: types.CHANGE_QUICK_DISPLAY_FILTER,
    payload: filter
})

export const resetQuickDisplayFilter = filter => ({

    type: types.RESET_QUICK_DISPLAY_FILTER
})

const normalizeAccounts = accountsArray => reduce(accountsArray, (acc, curr) => {

    acc[curr.account_id] = curr

    return acc

}, {})
