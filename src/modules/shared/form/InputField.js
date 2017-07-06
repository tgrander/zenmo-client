import React from 'react';

function InputField({ input, type, className, label }) {
  return (
    <div>
      <label>{label}</label>
      <div className={className || ''}>
        <input
          {...input}
          type={type}
          defaultValue={input.value}
          placeholder={label} />
      </div>
    </div>
  )
}

export default InputField;
