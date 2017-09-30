import { Card } from 'antd'
import map from 'lodash/map'
import propTypes from 'prop-types'
import React from 'react'
import AccountTotal from './AccountTotal'

import './Totals.css'


class Totals extends React.PureComponent {

    render() {

        const { props } = this

        return (
            <Card {...{
                    loading: true,
                    noHovering: true,
                    style: { width: '100%' },
                    title: "Totals"
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
        )
    }
}

export default Totals
