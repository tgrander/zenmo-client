import React, { PureComponent } from 'react';

class InputField extends PureComponent {
  render() {
    const { input, type, label } = this.props;
    return (
      <div>
        <div className="">
          <input {...input} type={type} placeholder="$0.00" />
        </div>
      </div>
    )
  }
}

export default InputField;
