import { connect } from 'react-redux'
import Dashboard from './dashboard/Dashboard'


const mapStateToProps = ({ transactions }) => ({

    defaultDateRange: transactions.defaultDateRange
})

export default connect(mapStateToProps)(Dashboard)
