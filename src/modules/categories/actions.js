import reduce from 'lodash/reduce';
import types from './types';
import CategoryTypes from 'constants/categories/category-types';
import { db } from '../../firebase';


const reduceTransactionsToCategories = transactions => reduce(transactions, (accum, curr) => {
  const { primaryCategory, subCategory, amount } = curr;

  if (!primaryCategory) {
    accum.Undefined
      ? accum.Undefined += amount
      : accum.Undefined = amount;
    return accum;
  }

  if (primaryCategory in accum) {
    const category = accum[primaryCategory];
    category.amount += amount;
    category.subCategories[subCategory]
      ? category.subCategories[subCategory] += amount
      : category.subCategories[subCategory] = amount;
  } else {
    accum[primaryCategory] = { amount };
    accum[primaryCategory].subCategories = { [subCategory]: amount };
  }

  return accum;
}, {});


export const categorizeTransactions = transactions => ({
  type: types.CATEGORIZE_TRANSACTIONS,
  transactionCategories: reduceTransactionsToCategories(transactions),
});

export const fetchCategories = () =>
  db.collection('categories')
    .orderBy('name')
    .get();

export const fetchCategoriesSuccess = categoriesSnapshot => ({
  type: types.FETCH_CATEGORIES_SUCCESS,
  categories: categoriesSnapshot.docs.map(doc => doc.data()),
});

export const fetchCategoriesFailure = error => ({
  type: types.FETCH_CATEGORIES_FAILURE,
  error,
});
