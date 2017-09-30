import reduce from 'lodash/reduce'
import { CATEGORIZE_TRANSACTIONS } from '../constants/categories-actions-types'


const reduceTransactionsToCategories = transactions => {

    return reduce(transactions, (categories, transaction) => {

        const category = transaction.category
            ? transaction.category[0]
            : 'undefined'

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

    type: CATEGORIZE_TRANSACTIONS,
    categories: reduceTransactionsToCategories(transactions)
})
