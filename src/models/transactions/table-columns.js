import React from 'react'
import Category from 'pages/dashboard/transactions/Category'


export default ({ categories }) => ([{
        dataIndex: 'date',
        key: 'date',
        title: 'Date',
        width: 100,
    }, {
        dataIndex: 'description',
        key: 'description',
        title: 'Description',
        width: 230,
    }, {
        dataIndex: 'account',
        key: 'account',
        title: 'Account',
        width: 150,
    }, {
        dataIndex: 'amount',
        key: 'amount',
        title: 'Amount',
        width: 100,
    }, {
        dataIndex: 'category',
        key: 'category',
        render: ({ menu }) => <Category menu={menu}/>,
        title: 'Category',
        width: 120,
}])
