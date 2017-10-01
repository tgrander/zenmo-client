import axios from 'axios'
import propTypes from 'prop-types'
import React from 'react'
import Categories from './dashboard/Categories'
import Transactions from './dashboard/Transactions'
import Totals from './dashboard/Totals'

import './Dashboard.css'


class Dashboard extends React.PureComponent {

    componentWillMount() {

        console.log('DASHBOARD MOUNTING...');

        axios.post('/plaid/accounts')
            .then(res => console.log('ACCOUNTS RES: ', res))
    }

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
