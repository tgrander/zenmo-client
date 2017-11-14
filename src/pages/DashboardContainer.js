import pipe from 'lodash/fp/flow'
import moment from 'moment'
import { connect } from 'react-redux'
import withHandlers from 'recompose/withHandlers'
import Dashboard from './dashboard/Dashboard'
import { changeDateRange, getDateRangeDefaultValue } from 'modules/transactions/actions'


const mapStateToProps = ({ transactions }) => ({

    defaultDateRange: transactions.defaultDateRange.map(date => moment(date)),
    dateRange: transactions.dateRange.map(date => moment(date))
})

const actions = {
    changeDateRange,
    getDateRangeDefaultValue
}

const redux = connect(mapStateToProps, actions)

const handlers = withHandlers({
    onChangeDate: ({ changeDateRange }) => dateRange => changeDateRange(
        dateRange.map(date => date.toDate())
    )
})

export default pipe(
    handlers,
    redux
)(Dashboard)
