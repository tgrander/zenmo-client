import { DatePicker } from 'antd';
import axios from 'axios'
import propTypes from 'prop-types'
import React from 'react'
import Categories from './CategoriesContainer'
import Transactions from './TransactionsContainer'
import Totals from './TotalsContainer'
import moment from 'moment'

import './Dashboard.css'


const dateFormat = 'MM/DD/YYYY'

class Dashboard extends React.PureComponent {

    componentWillMount() {

    }

    render() {

        const { props } = this

        return (
            <div className="dashboard">
                <div className="dashboard-filter">
                    <DatePicker.RangePicker
                      defaultValue={[
                          moment(props.defaultDateRange[0], dateFormat),
                          moment(props.defaultDateRange[1], dateFormat)
                      ]}
                      format={dateFormat}
                    />
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
