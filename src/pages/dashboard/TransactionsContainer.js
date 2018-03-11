import pipe from 'lodash/fp/flow';
import map from 'lodash/map';
import head from 'lodash/head';
import filter from 'lodash/filter';
import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import CategoryFilters from 'constants/transactions/category-filters';
import CategoryTypes from 'constants/categories/category-types';
import {
	changeTransactionsFilter,
	fetchTransactions,
} from '../../modules/transactions/actions';
import CategoriesMenuContainer from './transactions/CategoriesMenuContainer';
import Transactions from './transactions/Transactions';

const mapAccountsToFilters = (accounts) =>
	map(accounts, (account) => ({
		text: account.name,
		value: account.name,
		account,
	}));

const mapTransactionsToTableDataSource = (transactions) =>
	map(transactions, (transaction) => ({
		account: null,
		amount: transaction.amount,
		category: {
			category: transaction.category,
			menu: <CategoriesMenuContainer transaction={transaction} />,
		},
		date: moment(transaction.date).format('MMM Do, YYYY'),
		description: transaction.name,
		key: transaction.transaction_id,
		transactionId: transaction.transaction_id,
	}));

const mapStateToProps = ({ categories, transactions }) => {
	const { allTransactions, transactionsById } = transactions;
	const arrayOfTransactions = allTransactions.map(
		(id) => transactionsById[id],
	);

	return {
		accountFilters: mapAccountsToFilters(transactions.accounts),
		accounts: transactions.accounts,
		categories: categories.categories,
		dateRange: transactions.dateRange,
		defaultDateRange: transactions.defaultDateRange,
		isLoading: transactions.isLoading,
		transactions: mapTransactionsToTableDataSource(
			arrayOfTransactions,
			categories.categories,
		),
	};
};

const redux = connect(mapStateToProps, {
	changeTransactionsFilter,
	fetchTransactions,
});

export default pipe(redux)(Transactions);
