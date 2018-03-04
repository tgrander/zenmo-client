import types from './types';
import transactionTypes from '../transactions/types';

const uuid = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  return `${s4() + s4()}-${s4()}-${s4()}-${
    s4()}-${s4()}${s4()}${s4()}`;
};

const categories = {
  Income: ['Paychecks', 'Tax Return', 'Citi Cash Back'],
  'Debt Payments': ['Bank of America CC', 'Interest & Fees', 'Bootcamp Loans', 'Student Loans', 'Couch Installments'],
  'Fixed Costs': ['Rent', 'Electric', 'Gas', 'Internet', 'Phone Bill', 'Transportation'],
  'Quality of Life': ['Groceries', 'Fast Food', 'Renter\'s/Home Insurance', 'Therapy', 'Medical', 'Software Subscriptions', 'Protein & Supplements', 'Hair', 'Fitness', 'Education', 'Miscellaneous'],
  'Spend Less On': ['Movies', 'Music', 'Shopping', 'Restaurants', 'Coffee', 'Alcohol', 'Car Service'],
  'One-Time Expenses': ['Contact Lenses'],
};

const allTypes = ['Income', 'Debt Payments', 'Fixed Costs', 'Quality of Life', 'Spend Less On', 'One-Time Expenses'];

const typesById = {};

for (let i = 0; i < allTypes.length; i += 1) {
  const categoryType = allTypes[i];
  const id = uuid();

  typesById[id] = {
    id,
    type: categoryType,
    allCategories: categories[categoryType],
  };
}

const allCategories = ['Paychecks', 'Tax Return', 'Citi Cash Back', 'Bank of America CC', 'Bootcamp Loans', 'Student Loans', 'Couch Installments', 'Rent', 'Electric', 'Gas', 'Internet', 'Phone Bill', 'Transportation', 'Groceries', 'Fast Food', 'Interest & Fees', 'Renter/Home Insurance', 'Therapy', 'Medical', 'Software Subscriptions', 'Protein & Supplements', 'Hair', 'Fitness', 'Education', 'Movies', 'Music', 'Shopping', 'Restaurants', 'Coffee', 'Alcohol', 'Car Service', 'Contact Lenses'];

const categoriesById = {};

Object.keys(categories).forEach((type) => {
  const categoriesByType = categories[type];
  for (let i = 0; i < categoriesByType.length; i += 1) {
    const category = categoriesByType[i];
    const id = uuid();

    categoriesById[id] = {
      id,
      type,
      category,
    };
  }
});

const initialState = {
  allCategories: Object.keys(categoriesById),
  allTypes: Object.keys(typesById),
  categoriesById,
  typesById,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CATEGORIZE_TRANSACTIONS:
      return {
        ...state,
        transactionCategories: action.transactionCategories,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
