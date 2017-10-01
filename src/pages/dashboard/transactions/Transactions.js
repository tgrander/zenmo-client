import { Table, DatePicker } from 'antd';
import React from 'react'
import propTypes from 'prop-types'

import './Transactions.css'


const columns = [{
    title: 'Date',
    dataIndex: 'date',
    width: 150,
}, {
    title: 'Description',
    dataIndex: 'description',
    width: 150,
}, {
    title: 'Amount',
    dataIndex: 'amount',
    width: 150,
}, {
    title: 'Category',
    dataIndex: 'category',
    width: 150,
}]

const data = [];


class Transactions extends React.PureComponent {

    static propTypes = {
        getDateRangeDefaultValue: propTypes.func.isRequired,
        fetchTransactions: propTypes.func.isRequired
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
