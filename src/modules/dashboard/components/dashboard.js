import propTypes from 'prop-types'
import React from 'react'
import Categories from '../../categories/components/categories'
import Transactions from '../../transactions/containers/Transactions'
import Totals from '../containers/totals'

import './dashboard.css'


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
