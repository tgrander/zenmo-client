import { Table, DatePicker } from 'antd';
import React from 'react'
import propTypes from 'prop-types'

import './Transactions.css'


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
        transactions: propTypes.array.isRequired
    }

    getColumns = () => ([{
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
            filters: this.props.accountFilters,
            key: 'account',
            title: 'Account',
            width: 150,
            onFilter: this.props.changeTransactionsFilter
        }, {
            dataIndex: 'amount',
            key: 'amount',
            title: 'Amount',
            width: 100,
        }, {
            dataIndex: 'category',
            key: 'category',
            title: 'Category',
            width: 120,
    }])

    componentWillMount() {

        this.props.getDateRangeDefaultValue()
    }

    render() {

        const { getColumns, props } = this

        console.log('TRANSACTIONS: ', props.transactions)

        return (

            <div className="transactions-wrapper">

                <DatePicker.RangePicker {...{
                    defaultValue: props.defaultDateRange,
                    format: 'MM-DD-YYYY',
                    value: props.dateRange,
                    onChange: props.changeDateRange
                }} />

                <Table {...{
                    columns: getColumns(),
                    dataSource: props.transactions,
                    loading: props.isLoading,
                    pagination: false,
                    scroll: { y: 500 }
                }}/>

            </div>
        )
    }
}

export default Transactions
