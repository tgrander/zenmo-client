import { DatePicker } from 'antd';
import propTypes from 'prop-types';
import React from 'react';
import CategoriesContainer from './CategoriesContainer';
import TransactionsContainer from './TransactionsContainer';

import './Dashboard.css';


class Dashboard extends React.PureComponent {
    static propTypes = {
      getDateRangeDefaultValue: propTypes.fund.isRequired,
    }

    componentWillMount() {
      this.props.getDateRangeDefaultValue();
    }

    render() {
      const { props } = this;

      return (
        <div className="dashboard">
          <div className="dashboard-filter">
            <DatePicker.RangePicker {...{
                defaultValue: props.defaultDateRange,
                format: 'MM-DD-YYYY',
                value: props.dateRange,
                onChange: props.onChangeDate,
              }}
            />
          </div>
          <div className="dashboard-content">
            <div className="left-column">
              <CategoriesContainer />
            </div>
            <div className="right-column">
              <TransactionsContainer />
            </div>
          </div>
        </div>
      );
    }
}

export default Dashboard;
