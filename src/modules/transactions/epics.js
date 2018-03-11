import axios from 'axios';
import flatten from 'lodash/flatten';
import moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { db } from '../../firebase';
import types from './types';
import {
	fetchTransactionsError,
	fetchTransactionsRequest,
	fetchTransactionsSuccess,
	loadingTransactions,
	updateSingleTransactionCategory,
	updateCategoryForAllTransactionsWithSameName,
} from './actions';
import mockTransactions from '../../data/mockTransactions';

const fetchTransactions = (db, startDate, endDate) =>
	new Promise((resolve, reject) => {
		resolve(mockTransactions);
		// db
		// 	.collection('transactions')
		// 	.where('date', '>=', startDate)
		// 	.where('date', '<=', endDate)
		// 	.orderBy('date')
		// 	.get()
		// 	.then(snapshot => {
		// 		const transactions = snapshot.docs.reduce((accum, curr) => {
		// 			const transaction = curr.data();
		// 			accum.push(transaction);
		// 			return accum;
		// 		}, []);
		//
		// 		return resolve(transactions);
		// 	})
		// 	.catch(err => reject(err));
	});

export const fetchTransactionsEpic = (action$, store) =>
	action$
		.ofType(
			types.SET_DEFAULT_TRANSACTIONS_DATE_RANGE,
			types.CHANGE_DATE_RANGE,
		)
		.mergeMap(() => {
			const [
				startDate,
				endDate,
			] = store.getState().transactions.dateRange.default;
			// const startDate = new Date('February 1, 2018');
			// const endDate = new Date('February 28, 2018');

			return Observable.fromPromise(
				fetchTransactions(db, startDate, endDate),
			)
				.flatMap((transactions) =>
					Observable.of(fetchTransactionsSuccess(transactions)),
				)
				.catch((error) => Observable.of(fetchTransactionsError(error)));
		});

export const updateTransactionCategoryEpic = (action$) =>
	action$.ofType(types.UPDATE_TRANSACTION_CATEGORY).mergeMap(({ params }) =>
		Observable.fromPromise(updateSingleTransactionCategory(params))
			.mergeMap((res) =>
				Observable.of({
					type: types.UPDATE_TRANSACTION_CATEGORY_SUCCESS,
				}),
			)
			.catch((error) =>
				Observable.of({
					type: types.UPDATE_TRANSACTION_CATEGORY_FAILURE,
				}),
			),
	);

export const updateCategoryForAllTransactionsWithSameNameEpic = (action$) =>
	action$.ofType(types.UPDATE_TRANSACTION_CATEGORY).mergeMap(({ params }) =>
		Observable.fromPromise(
			updateCategoryForAllTransactionsWithSameName(params),
		)
			.mergeMap((res) =>
				Observable.of({
					type:
						types.UPDATE_CATEGORY_FOR_ALL_TRANSACTIONS_WITH_SAME_NAME_SUCCESS,
				}),
			)
			.catch((error) => ({
				type:
					types.UPDATE_CATEGORY_FOR_ALL_TRANSACTIONS_WITH_SAME_NAME_FAILURE,
				error,
			}))
			.startWith({
				type: types.UPDATE_CATEGORY_FOR_ALL_TRANSACTIONS_WITH_SAME_NAME,
			}),
	);
