import propTypes from 'prop-types'
import React from 'react'
import Categories from './dashboard/Categories'
import Transactions from './dashboard/Transactions'
import Totals from './dashboard/Totals'

import './Dashboard.css'


class Dashboard extends React.PureComponent {

    render() {

        return (
            <div className="dashboard">
                <div className="left-column">
                    <Totals />
                    <Categories />
                </div>
                <div className="right-column">
                    <Transactions />
                </div>
            </div>
        )
    }
}

export default Dashboard
