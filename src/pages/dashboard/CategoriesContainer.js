import { connect } from 'react-redux';
import withHandlers from 'recompose/withHandlers';
import pipe from 'lodash/fp/flow';
import {
	changeTransactionsFilter,
	changeQuickDisplayFilter,
	resetQuickDisplayFilter,
} from 'modules/transactions/actions';
import Categories from './categories/Categories';

const mapStateToProps = ({ categories }) => {
	const { allTypes, typesById, categoriesById } = categories;

	const types = allTypes.map((typeId) => {
		const type = typesById[typeId];
		return {
			...type,
			allCategories: type.allCategories.map(
				(categoryId) => categoriesById[categoryId].category,
			),
		};
	});

	return {
		types,
	};
};

const redux = connect(mapStateToProps, {
	changeTransactionsFilter,
	changeQuickDisplayFilter,
	resetQuickDisplayFilter,
});

const handlers = withHandlers({});

export default pipe(handlers, redux)(Categories);
