import map from 'lodash/map'
import React from 'react'
import propTypes from 'prop-types'


import Transaction from './Transaction'

class Transactions extends React.PureComponent {

    static propTypes = {
        fetchTransactions: propTypes.func.isRequired
    }

    componentWillMount() {

        this.props.fetchTransactions()
    }

    render() {

        const { props } = this

        if (props.isLoading) {
            return (
                <div>'~ L O A D I N G ~'</div>
            )
        }

        return (
            <div>
                {
                    // <div className="filters"></div>
                    //
                    // <div className="transactions">
                    //     {
                    //         map(props.transactions, transaction =>
                    //             <Transaction {...{
                    //                     key: transaction.transaction_id,
                    //                     transaction
                    //                 }} />
                    //         )
                    //     }
                    // </div>
                }
            </div>
        )
    }
}

export default Transactions
