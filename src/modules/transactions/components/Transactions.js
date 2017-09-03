import React from 'react'
import PlaidLinkConnection from '../../plaid/plaid-link'
import endpoints from '../../../services/endpoints'

class Transactions extends React.Component {

    render() {

        return (
            <div>
                <PlaidLinkConnection />

                <a onClick={endpoints.getTransactions}>Get Transactions</a>
            </div>

        )

    }
}

export default Transactions
