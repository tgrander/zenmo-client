import { Table, DatePicker } from 'antd';
import React from 'react'
import propTypes from 'prop-types'

import './Transactions.css'


const columns = [{
    title: 'Date',
    dataIndex: 'date',
    width: 100,
}, {
    title: 'Description',
    dataIndex: 'description',
    width: 230,
}, {
    title: 'Account',
    dataIndex: 'account',
    width: 150,
}, {
    title: 'Amount',
    dataIndex: 'amount',
    width: 100,
}, {
    title: 'Category',
    dataIndex: 'category',
    width: 120,
}]

const data = [];


class Transactions extends React.PureComponent {

    static propTypes = {
        dateRange: propTypes.array.isRequired,
        defaultDateRange: propTypes.array.isRequired,
        getDateRangeDefaultValue: propTypes.func.isRequired,
        fetchTransactions: propTypes.func.isRequired,
        transactions: propTypes.array.isRequired
    }

    componentWillMount() {

        this.props.getDateRangeDefaultValue()
    }

    render() {

        const { props } = this

        return (

            <div className="transactions-wrapper">

                <DatePicker.RangePicker {...{
                    defaultValue: props.defaultDateRange,
                    format: 'MM-DD-YYYY',
                    value: props.dateRange,
                    onChange: props.changeDateRange
                }} />

                <div className="transaction-filters"></div>

                <Table {...{
                    columns: columns,
                    dataSource: props.transactions,
                    loading: false,
                    pagination: false,
                    scroll: { y: 500 }
                }}/>

            </div>
        )
    }
}

export default Transactions
