import { connect } from 'react-redux'
import withHandlers from 'recompose/withHandlers'
import pipe from 'lodash/fp/flow'
import Categories from './categories/Categories'
import {
    changeTransactionsFilter
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
        changeTransactionsFilter
    }
)

const handlers = withHandlers({ })

export default pipe(
    handlers,
    redux,
)(Categories)
