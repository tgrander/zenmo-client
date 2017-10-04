import propTypes from 'prop-types'
import React from 'react'

import './Category.css'


class Category extends React.PureComponent {

    static propTypes = {
        amount: propTypes.string.isRequired,
        name: propTypes.string.isRequired
    }

    render() {

        const { props } = this

        return (
            <div className="category">
                <div className="category-name">{props.name}</div>
                <div className="category-amount">{props.amount}</div>
            </div>
        )
    }
}

export default Category
