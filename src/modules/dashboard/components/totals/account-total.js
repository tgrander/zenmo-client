import React from 'react'
import propTypes from 'prop-types'

import './totals.css'


const AccountTotal = ({ account, total }) => (

    <div className="total-row">
        <div className="account-label">{account}</div>
        <div className="account-total">{total}</div>
    </div>
)

export default AccountTotal
