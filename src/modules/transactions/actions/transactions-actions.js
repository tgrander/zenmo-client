import axios from 'axios'
import {
    FETCH_TRANSACTIONS,
    HYDRATE_TRANSACTIONS_STATE,
    LOADING_TRANSACTIONS,
    TRANSACTIONS_FETCH_FAILURE,
    TRANSACTIONS_FETCH_SUCCESS
} from '../constants/transactions-constants'


export const fetchTransactions = () => ({ type: FETCH_TRANSACTIONS })

export const fetchTransactionsError = error => ({

    type: TRANSACTIONS_FETCH_FAILURE,
    error
})

export const fetchTransactionsSuccess = transactions => ({

    type: TRANSACTIONS_FETCH_SUCCESS,
    transactions: transactions.sort(
        (a,b) => new Date(b.date) - new Date(a.date)
    )
})

export const loadingTransactions = () => ({ type: LOADING_TRANSACTIONS })
