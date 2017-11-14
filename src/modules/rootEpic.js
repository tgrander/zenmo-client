import { combineEpics } from 'redux-observable'
import { totalsEpic } from './totals/epics'
import transactionsEpic from './transactions/epics'
import { categorizeTransactionsEpic, fetchCategoriesEpic } from './categories/epics'


export default combineEpics(
    fetchCategoriesEpic,
    totalsEpic,
    transactionsEpic
)
