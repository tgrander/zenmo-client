import { connect } from 'react-redux'
import withHandlers from 'recompose/withHandlers'
import pipe from 'lodash/fp/flow'
import Categories from '../components/categories'
import { hydrateStore } from '../actions/transactions'


const mapStateToProps = state => {

    return {
        transactions: state.transactions.transactions
    }
}

const redux = connect(
    mapStateToProps,
    {
        hydrateStore
    }
)

const handlers = withHandlers({ })

export default pipe(
    handlers,
    redux,
)(Categories)
