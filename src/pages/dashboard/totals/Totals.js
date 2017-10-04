import map from 'lodash/map'
import propTypes from 'prop-types'
import React from 'react'
import Card from '../../../shared/components/Card'
import AccountTotal from './AccountTotal'

import './Totals.css'


class Totals extends React.PureComponent {

    static propTypes = {
        accounts: propTypes.array.isRequired,
        accountTotals: propTypes.array.isRequired,
        totalOfAllAccounts: propTypes.string.isRequired
    }

    render() {

        const { props } = this

        return (
            <div className="totals-wrapper">

                <Card {...{
                    isLoading: props.isLoading,
                    title:'Totals'
                }}>

                    <div className="total-row">
                        <div className="total-label">
                            Total
                        </div>
                        <div className="total">
                            {props.totalOfAllAccounts}
                        </div>
                    </div>

                    {map(props.accountTotals, ({ account, total }) => (

                            <AccountTotal {...{
                                account: props.accounts[account].name,
                                total: total,
                                key: account
                            }} />
                        ))
                    }
                </Card>
            </div>
        )
    }
}

export default Totals
