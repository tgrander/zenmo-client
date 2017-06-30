import React, { PureComponent } from 'react';

class InputField extends PureComponent {
  render() {
    const { input, type, label, className } = this.props;
    return (
      <div>
        <div className={className || ''}>
          <input {...input}
            type='number'
            defaultValue={input.value}
            placeholder="0.00" />
        </div>
      </div>
    )
  }
}

export default InputField;

// <input {...input} type={type} placeholder="0.00" />
