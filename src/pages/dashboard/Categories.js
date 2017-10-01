import { connect } from 'react-redux'
import withHandlers from 'recompose/withHandlers'
import pipe from 'lodash/fp/flow'
import Categories from './categories/Categories'


const mapStateToProps = ({ categories }) => {

    return {
        categories: categories.categories
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
    redux,
)(Categories)
