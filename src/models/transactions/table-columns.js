import React from 'react';
import CategoryContainer from '../../pages/dashboard/transactions/CategoryContainer';

export default (categories) => [
	{
		dataIndex: 'date',
		key: 'date',
		title: 'Date',
		width: 100,
	},
	{
		dataIndex: 'description',
		key: 'description',
		title: 'Payee',
		width: 230,
	},
	{
		dataIndex: 'category',
		key: 'category',
		render: (props) => <CategoryContainer {...props} />,
		title: 'Category',
		width: 100,
	},
	{
		dataIndex: 'amount',
		key: 'amount',
		title: 'Amount',
		width: 100,
	},
];
