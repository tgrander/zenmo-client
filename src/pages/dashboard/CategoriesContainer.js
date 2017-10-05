import { connect } from 'react-redux'
import withHandlers from 'recompose/withHandlers'
import pipe from 'lodash/fp/flow'
import Categories from './categories/Categories'
import {
    changeTransactionsFilter,
    changeQuickDisplayFilter,
    resetQuickDisplayFilter
} from 'modules/transactions/actions'


const mapStateToProps = ({ categories }) => {

    return {
        categories: categories.categories,
        isLoading: categories.isLoading
    }
}

const redux = connect(
    mapStateToProps,
    {
        changeTransactionsFilter,
        changeQuickDisplayFilter,
        resetQuickDisplayFilter
    }
)

const handlers = withHandlers({ })

export default pipe(
    handlers,
    redux,
)(Categories)
