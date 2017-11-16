import { combineEpics } from 'redux-observable'
import { totalsEpic } from './totals/epics'
import {
    fetchTransactionsEpic,
    updateTransactionCategoryEpic,
    updateCategoryForAllTransactionsWithSameNameEpic
} from './transactions/epics'
import {
    categorizeTransactionsEpic,
    fetchCategoriesEpic
} from './categories/epics'


export default combineEpics(
    categorizeTransactionsEpic,
    fetchCategoriesEpic,
    fetchTransactionsEpic,
    totalsEpic,
    updateCategoryForAllTransactionsWithSameNameEpic,
    updateTransactionCategoryEpic,
)
