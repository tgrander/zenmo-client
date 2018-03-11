import React from 'react';
import Category from '../../pages/dashboard/transactions/Category';

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
		render: (props) => <Category {...props} />,
		title: 'Category',
		width: 120,
	},
	{
		dataIndex: 'account',
		key: 'account',
		title: 'Account',
		width: 150,
	},
	{
		dataIndex: 'amount',
		key: 'amount',
		title: 'Amount',
		width: 100,
	},
];
