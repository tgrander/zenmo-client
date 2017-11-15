import { connect } from 'react-redux'
import { updateTransactionCategory } from 'modules/transactions/actions'
import CategoriesMenu from './CategoriesMenu'


const mapStateToProps = ({ categories }) => ({
    categories: categories.categories
})

export default connect(mapStateToProps, { updateTransactionCategory })(CategoriesMenu)
