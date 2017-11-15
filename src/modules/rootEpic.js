import { combineEpics } from 'redux-observable'
import { totalsEpic } from './totals/epics'
import { fetchTransactionsEpic, updateTransactionCategoryEpic } from './transactions/epics'
import { categorizeTransactionsEpic, fetchCategoriesEpic } from './categories/epics'


export default combineEpics(
    fetchCategoriesEpic,
    fetchTransactionsEpic,
    totalsEpic,
    updateTransactionCategoryEpic,
)
