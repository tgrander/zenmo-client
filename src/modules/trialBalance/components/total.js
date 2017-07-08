import React, { PureComponent } from 'react';

class Total extends PureComponent {

  componentWillReceiveProps(nextProps) {
    console.log('NEXT TOTAL: ', nextProps);
    console.log('CURR TOTAL: ', this.props.total);
    const { updateTotal, total } = this.props;
    if (total !== nextProps.total && updateTotal) {
      updateTotal();
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
