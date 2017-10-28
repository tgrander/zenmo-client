import React from 'react'
import propTypes from 'prop-types'

import './Totals.css'


const AccountTotal = ({ account, total }) => (

    <div className="total-row">
        <div className="account-label">{account}</div>
        <div className="account-total">{total}</div>
        <div></div>
    </div>
)

export default AccountTotal
