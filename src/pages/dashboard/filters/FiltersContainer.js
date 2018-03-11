import pipe from 'lodash/fp/flow';
import moment from 'moment';
import { connect } from 'react-redux';
import withHandlers from 'recompose/withHandlers';
import Filters from './Filters';
import {
	changeDateRange,
	getDateRangeDefaultValue,
} from 'modules/transactions/actions';

// REDUX

const mapStateToProps = ({ filters, transactions }) => ({
	accountsFilter: filters.accountsFilter,
	categoryFilter: filters.categoryFilter,
	defaultDateRange: transactions.dateRange.default.map((date) =>
		moment(date),
	),
	dateRange: transactions.dateRange.current.map((date) => moment(date)),
	transactionsTypeFilter: filters.transactionsTypeFilter,
});

const actions = {
	changeDateRange,
	getDateRangeDefaultValue,
};

const redux = connect(mapStateToProps, actions);

// RECOMPOSE

const handlers = withHandlers({
	onChangeDate: ({ changeDateRange }) => (dateRange) =>
		changeDateRange(dateRange.map((date) => date.toDate())),
});

export default pipe(handlers, redux)(Filters);
