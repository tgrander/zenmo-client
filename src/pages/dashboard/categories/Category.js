import propTypes from 'prop-types'
import React from 'react'

import './Category.css'


class Category extends React.PureComponent {

    static propTypes = {
        amount: propTypes.string.isRequired,
        category: propTypes.string.isRequired,
        onChangeTransactionsFilter: propTypes.func.isRequired
    }

    onChangeTransactionsFilter = () => {

        this.props.onChangeTransactionsFilter(this.props.category)
    }

    render() {

        const { props, onChangeTransactionsFilter } = this

        return (
            <div className="category" onMouseEnter={onChangeTransactionsFilter}>
                <div className="category-name">{props.category}</div>
                <div className="category-amount">{props.amount}</div>
            </div>
        )
    }
}

export default Category
