import reduce from 'lodash/reduce'
import types from './types'
import CategoryTypes from 'constants/categories/category-types'
import { db } from '../../firebase'


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

export const  displayAllCategories = (transactions) => {

    const allCategories = transactions.reduce((acc, curr) => {

        Object.keys(curr.category).forEach(category => {

            if (!acc[category]) {
                acc[category] = true
            }
        })

        return acc

    }, {})

    const categoryPairs = transactions.reduce((acc, curr) => {

        const category = `${Object.keys(curr.category)}`

        if (!acc[category]) {
            acc[category] = [curr]
        } else {
            acc[category].push(curr)
        }

        return acc

    }, {})

    console.log('ALL CATEGORIES: ', allCategories)
    console.log('CATEGORY PAIRS: ', categoryPairs)
}

export const categorizeTransactions = transactions => ({

    type: types.CATEGORIZE_TRANSACTIONS,
    categories: reduceTransactionsToCategories(transactions)
})

export const fetchCategories = () => db.collection('categories').get()

export const fetchCategoriesSuccess = categoriesSnapshot => {

    return {
        type: types.FETCH_CATEGORIES_SUCCESS,
        categories: categoriesSnapshot.docs.map(doc => doc.data())
    }
}

export const fetchCategoriesFailure = error => ({
    type: types.FETCH_CATEGORIES_FAILURE,
    error
})
