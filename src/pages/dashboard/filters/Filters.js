import { DatePicker } from 'antd';
import propTypes from 'prop-types';
import React from 'react';


class Filters extends React.PureComponent {
  static propTypes = {

  }

  render() {
    const { props } = this;

    return (
      <div className="dashboard-filter">
        <DatePicker.RangePicker {...{
            defaultValue: props.defaultDateRange,
            format: 'MM-DD-YYYY',
            value: props.dateRange,
            onChange: props.onChangeDate,
          }}
        />
      </div>
    );
  }
}

export default Filters;
