import axios from 'axios'
import types from './types'


export const fetchTransactions = () => ({ type: types.FETCH_TRANSACTIONS })

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
