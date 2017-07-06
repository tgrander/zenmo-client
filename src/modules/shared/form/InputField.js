import React from 'react';

function InputField({ input, type, className, label }) {
  return (
    <div className={className || ''}>
      <input
        {...input}
        type={type}
        defaultValue={input.value}
        placeholder={label} />
    </div>
  )
}

export default InputField;
