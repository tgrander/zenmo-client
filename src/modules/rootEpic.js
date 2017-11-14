import { combineEpics } from 'redux-observable'
import { totalsEpic } from './totals/epics'
import transactionsEpic from './transactions/epics'
import { categoriesEpic } from './categories/epics'


export default combineEpics(
    categoriesEpic,
    totalsEpic,
    transactionsEpic
)
