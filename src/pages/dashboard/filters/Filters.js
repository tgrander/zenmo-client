import { Button, DatePicker, Dropdown, Icon, Menu } from 'antd';
import propTypes from 'prop-types';
import React from 'react';
import filterTypes from 'constants/filters/filter-types';
import CategoriesMenuContainer from '../transactions/CategoriesMenuContainer';

import './Filters.css';


const transactionsFiltersMenu = (
  <Menu onClick={e => console.log(e)}>
    <Menu.Item key={filterTypes.transactions.ALL}>{filterTypes.transactions.ALL}</Menu.Item>
    <Menu.Item key={filterTypes.transactions.SPENDING}>{filterTypes.transactions.SPENDING}</Menu.Item>
    <Menu.Item key={filterTypes.transactions.INCOME}>{filterTypes.transactions.INCOME}</Menu.Item>
    <Menu.Item key={filterTypes.transactions.PAYMENTS}>{filterTypes.transactions.PAYMENTS}</Menu.Item>
  </Menu>
);

class Filters extends React.PureComponent {
  static propTypes = {
    dateRange: propTypes.object.isRequired,
    defaultValue: propTypes.object.isRequired,
    onChangeDate: propTypes.func.isRequired,
  }

  render() {
    const { props } = this;

    return (
      <div className="dashboard-filter">
        <span>Showing</span>

        <Dropdown overlay={transactionsFiltersMenu}>
          <Button>
            {props.transactionsTypeFilter} <Icon type="down" />
          </Button>
        </Dropdown>

        <span>between</span>

        <DatePicker.RangePicker {...{
            defaultValue: props.defaultDateRange,
            format: 'MM-DD-YYYY',
            value: props.dateRange,
            onChange: props.onChangeDate,
          }}
        />

        <span>for</span>

        <Dropdown overlay={<CategoriesMenuContainer />}>
          <Button>
            {props.categoryFilter} <Icon type="down" />
          </Button>
        </Dropdown>

        <span>from</span>

        <Dropdown overlay={transactionsFiltersMenu}>
          <Button>
            {props.accountsFilter} <Icon type="down" />
          </Button>
        </Dropdown>
      </div>
    );
  }
}

export default Filters;
