import React, { PureComponent } from 'react'

class InputField extends PureComponent {
  render() {

    const { input, className } = this.props;

    return (
      <div className={className || ''}>
        <input {...input}
          type='number'
          defaultValue={input.value}
          placeholder="0.00" />
      </div>
    )
  }
}

export default InputField;
