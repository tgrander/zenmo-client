import propTypes from 'prop-types';
import React from 'react';
import CategoriesContainer from './CategoriesContainer';
import FiltersContainer from './filters/FiltersContainer';
import TransactionsContainer from './TransactionsContainer';

import './Dashboard.css';


class Dashboard extends React.PureComponent {
    static propTypes = {
      getDateRangeDefaultValue: propTypes.func.isRequired,
    }

    componentWillMount() {
      this.props.getDateRangeDefaultValue();
    }

    render() {
      const { props } = this;

      return (
        <div className="dashboard">
          <FiltersContainer />
          <div className="dashboard-content">
            <TransactionsContainer />
          </div>
        </div>
      );
    }
}

export default Dashboard;
