import React, { PureComponent } from 'react'
import debounce from 'lodash/debounce'

class InputField extends PureComponent {
  render() {

    const onChange = () => {

    }

    const { input, name, className } = this.props;
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
