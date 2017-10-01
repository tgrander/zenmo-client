import { Card } from 'antd'
import propTypes from 'prop-types'
import React from 'react'


class CardWithProps extends React.PureComponent {

    static propTypes = {
        title: propTypes.string.isRequired
    }

    render() {

        const { props } = this

        return (
            <Card {...{
                loading: true,
                noHovering: true,
                style: { width: '100%' },
                title: props.title
            }}>

                {this.props.children}

            </Card>
        )
    }
}

export default CardWithProps
