import { Table } from 'antd';
import React from 'react'
import propTypes from 'prop-types'
import tableColumns from 'models/transactions/table-columns'

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

    render() {

        const { props } = this

        return (
            /*
            transactions are mapped to the table using the
            mapTransactionsToTableDataSource function in TransactionsContainer
            */
            <div className="transactions-wrapper">

                <Table {...{
                    columns: tableColumns({
                        categories: props.categories
                    }),
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
