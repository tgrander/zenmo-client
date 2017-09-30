import reduce from 'lodash/reduce'
import pipe from 'lodash/fp/flow'
import { connect } from 'react-redux'
import withHandlers from 'recompose/withHandlers'
import Totals from '../components/totals/totals'


const mapStateToProps = ({ dashboard }) => {

    return {
        totals: reduce(dashboard.totals, (accountTotals, total, account) => {

            if (account !== 'total') {
                accountTotals.push({
                    account,
                    total
                })
            }

            return accountTotals

        }, [])
    }
}

const redux = connect(
    mapStateToProps,
    {

    }
)

const handlers = withHandlers({ })

export default pipe(
    handlers,
    redux
)(Totals)
