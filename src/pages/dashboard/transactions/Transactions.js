import { Table } from 'antd';
import React from 'react';
import propTypes from 'prop-types';
import tableColumns from 'models/transactions/table-columns';

import './Transactions.css';

class Transactions extends React.PureComponent {
	static propTypes = {
		accountFilters: propTypes.array.isRequired,
		accounts: propTypes.object.isRequired,
		changeDateRange: propTypes.func.isRequired,
		changeTransactionsFilter: propTypes.func.isRequired,
		dateRange: propTypes.array.isRequired,
		defaultDateRange: propTypes.array.isRequired,
		getDateRangeDefaultValue: propTypes.func.isRequired,
		fetchTransactions: propTypes.func.isRequired,
		isLoading: propTypes.bool.isRequired,
		transactions: propTypes.array.isRequired,
	};

	render() {
		const { props } = this;

		const rowSelection = {
			onChange: (selectedRowKeys, selectedRows) => {
				console.log(
					`selectedRowKeys: ${selectedRowKeys}`,
					'selectedRows: ',
					selectedRows,
				);
			},
			getCheckboxProps: record => ({
				disabled: record.name === 'Disabled User',
				name: record.name,
			}),
		};

		return (
			<div className="transactions-wrapper">
				<Table
					{...{
						columns: tableColumns(props.categories),
						dataSource: props.transactions,
						loading: props.isLoading,
						pagination: false,
						rowSelection,
						scroll: { y: '100%' },
					}}
				/>
			</div>
		);
	}
}

export default Transactions;
