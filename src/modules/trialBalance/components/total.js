import React, { PureComponent } from 'react';

class Total extends PureComponent {

  componentWillReceiveProps(nextProps) {
    console.log('NEXT TOTAL: ', nextProps.total);
    console.log('CURR TOTAL: ', this.props.total);
    const { updateTotal, total } = this.props;
    if (total !== nextProps.total && updateTotal) {
      updateTotal(nextProps.total);
    }
  }

  render() {
    const { total, className, updateTotal, updateAssetsTotal } = this.props;
    return (
      <div
        className={className ? `label total ${className}` : `label total`}>
        {total}
      </div>
    )
  }
}

export default Total;
