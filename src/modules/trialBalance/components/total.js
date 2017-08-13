import React, { PureComponent } from 'react'

class Total extends PureComponent {

    render() {

        const { total, className, updateTotalHandler } = this.props

        updateTotalHandler && updateTotalHandler()

        return (
            <div
                className={className ? `label total ${className}` : `label total`}>
                {total}
            </div>
        )
    }
}

export default Total
