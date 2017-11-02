import axios from 'axios'
import propTypes from 'prop-types'
import React from 'react'
import Categories from './dashboard/CategoriesContainer'
import Transactions from './dashboard/TransactionsContainer'
import Totals from './dashboard/TotalsContainer'

import './Dashboard.css'


class Dashboard extends React.PureComponent {

    componentWillMount() {
        
    }

    render() {

        return (
            <div className="dashboard">
                <div className="left-column">
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
