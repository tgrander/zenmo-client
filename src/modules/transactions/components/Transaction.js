import propTypes from 'prop-types'
import React from 'react'

import '../styles/transaction.css'


class Transaction extends React.PureComponent {

    static propTypes = {
        transaction: propTypes.object.isRequired
    }

    render() {

        const { props } = this

        return (
            <div className="transaction">
                <div className="transaction-value">{props.transaction.date}</div>
                <div className="transaction-value">{props.transaction.name}</div>
                <div className="transaction-value">{props.transaction.location.adress}</div>
                <div className="transaction-value">{props.transaction.amount}</div>
                <div className="transaction-value">{props.transaction.category[0]}</div>
            </div>
        )
    }
}

export default Transaction
