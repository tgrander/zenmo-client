import propTypes from 'prop-types'
import React from 'react'

import './Category.css'


class Category extends React.PureComponent {

    static propTypes = {
        amount: propTypes.string.isRequired,
        category: propTypes.string.isRequired,
        onChangeQuickDisplayFilter: propTypes.func.isRequired,
        onChangeTransactionsFilter: propTypes.func.isRequired,
        onResetQuickDisplayFilter: propTypes.func.isRequired
    }

    onChangeQuickDisplayFilter = () => {

        this.props.onChangeQuickDisplayFilter(this.props.category)
    }

    onChangeTransactionsFilter = () => {

        this.props.onChangeTransactionsFilter(this.props.category)
    }

    render() {

        const {
            props,
            onChangeQuickDisplayFilter,
            onChangeTransactionsFilter
        } = this

        return (
            <div {...{
                className: "category",
                onClick: onChangeTransactionsFilter,
                onMouseEnter: onChangeQuickDisplayFilter,
                onMouseLeave: props.onResetQuickDisplayFilter
            }}>
                <div className="category-name">{props.category}</div>
                <div className="category-amount">{props.amount}</div>
            </div>
        )
    }
}

export default Category
