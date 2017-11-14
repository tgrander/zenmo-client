import { DatePicker } from 'antd';
import axios from 'axios'
import propTypes from 'prop-types'
import React from 'react'
import Categories from './CategoriesContainer'
import Transactions from './TransactionsContainer'
import Totals from './TotalsContainer'

import './Dashboard.css'


class Dashboard extends React.PureComponent {

    componentWillMount() {
        this.props.getDateRangeDefaultValue()
    }

    render() {

        const { props } = this

        return (
            <div className="dashboard">
                <div className="dashboard-filter">
                    <DatePicker.RangePicker {...{
                        defaultValue: props.defaultDateRange,
                        format: 'MM-DD-YYYY',
                        value: props.dateRange,
                        onChange: props.onChangeDate
                    }} />
                </div>
                <div className="dashboard-content">
                    <div className="left-column">
                        <Categories />
                    </div>
                    <div className="right-column">
                        <Transactions />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
