import reduce from 'lodash/reduce'
import types from './types'
import CategoryTypes from 'constants/categories/category-types'


const reduceTransactionsToCategories = transactions => {

    return reduce(transactions, (categories, transaction) => {

        const category = transaction.category
            ? transaction.category[0]
            : CategoryTypes.UNDEFINED

        const amount = transaction.amount || 0

        if (categories[category]) {
            categories[category] = categories[category] += amount
            return categories
        }

        categories[category] = amount
        return categories

    }, {})
}



export const categorizeTransactions = transactions => ({

    type: types.CATEGORIZE_TRANSACTIONS,
    categories: reduceTransactionsToCategories(transactions)
})
