import React from 'react'
import PlaidLinkConnection from '../../plaid/plaid-link'
import endpoints from '../../../services/endpoints'
import map from 'lodash/map'

import Transaction from './Transaction'

class Transactions extends React.PureComponent {

    componentWillMount() {

        endpoints.getTransactions()
            .then(res => {

                console.log(res)
                this.props.hydrateStore(res.data.transactions)
            })
    }

    render() {

        const { props } = this

        return (
            <div>
                <div className="filters"></div>

                <div className="transactions">
                    {
                        map(props.transactions, transaction =>
                            <Transaction transaction={transaction} />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Transactions
