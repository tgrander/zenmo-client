import moment from 'moment'
import { connect } from 'react-redux'
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

export default connect(mapStateToProps, actions)(Dashboard)
