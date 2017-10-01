import map from 'lodash/map'
import propTypes from 'prop-types'
import React from 'react'
import Card from '../../../shared/components/Card'
import AccountTotal from './AccountTotal'

import './Totals.css'


class Totals extends React.PureComponent {

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

                        </div>
                        <div className="total">
                            {props.totals.total}
                        </div>
                    </div>

                    {
                        map(props.totals, accountTotal =>
                            <AccountTotal {...{
                                ...accountTotal,
                                key: accountTotal.account
                            }} />
                        )
                    }
                </Card>
            </div>
        )
    }
}

export default Totals
