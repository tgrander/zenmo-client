import propTypes from 'prop-types';
import React from 'react';
import CategoryFilters from 'constants/transactions/category-filters';

import './Category.css';


class Category extends React.PureComponent {
    static propTypes = {
      amount: propTypes.string.isRequired,
      category: propTypes.string.isRequired,
      onChangeQuickDisplayFilter: propTypes.func.isRequired,
      onChangeTransactionsFilter: propTypes.func.isRequired,
      onResetQuickDisplayFilter: propTypes.func.isRequired,
    }

    state = {
      selected: false,
    }

    onChangeQuickDisplayFilter = () => {
      this.props.onChangeQuickDisplayFilter(this.props.category);
    }

    onChangeTransactionsFilter = () => {
      if (this.state.selected) {
        this.props.onChangeTransactionsFilter(CategoryFilters.ALL);
      } else {
        this.props.onChangeTransactionsFilter(this.props.category);
      }

      return this.setState({ selected: !this.state.selected });
    }

    render() {
      const {
        props,
        onChangeQuickDisplayFilter,
        onChangeTransactionsFilter,
        state,
      } = this;

      return (
        <div
          style={{ backgroundColor: state.selected && '#1DE9B6' }}
          {...{
                className: 'category',
                onClick: onChangeTransactionsFilter,
                onMouseEnter: onChangeQuickDisplayFilter,
                onMouseLeave: props.onResetQuickDisplayFilter,
            }}
        >
          <div className="category-name">{props.category}</div>
          <div className="category-amount">{props.amount}</div>
        </div>
      );
    }
}

export default Category;
