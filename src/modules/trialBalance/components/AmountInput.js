import React, { PureComponent } from 'react'

class InputField extends PureComponent {
  render() {

    const {
      input,
      className,
      onChangeAction,
    } = this.props;

    const changeHandler = e => {
      const amount = parseInt(e.target.value)
      onChangeAction(this.props.input.name, amount);
      input.onChange(e);
    }

    return (
      <div className={className || ''}>
        <input {...input}
          type='number'
          placeholder="0.00"
          onChange={changeHandler}
          defaultValue={input.value} />
      </div>
    )
  }
}

export default InputField;
