import React, { PureComponent } from 'react'

class InputField extends PureComponent {
  render() {

    console.log('PROPS: ', this.props);

    const {
      input,
      className,
      changeHandler
    } = this.props;

    return (
      <div className={className || ''}>
        <input {...input}
          type='number'
          placeholder="0.00"
          onChange={changeHandler} />
      </div>
    )
  }
}

export default InputField;
