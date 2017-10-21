import React from 'react'


export default ({ accountFilters, changeTransactionsFilter }) => ([{
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
        filters: accountFilters,
        key: 'account',
        title: 'Account',
        width: 150,
        onFilter: changeTransactionsFilter
    }, {
        dataIndex: 'amount',
        key: 'amount',
        title: 'Amount',
        width: 100,
    }, {
        dataIndex: 'category',
        key: 'category',
        render: text => <a href="#">{text}</a>,
        title: 'Category',
        width: 120,
}])
