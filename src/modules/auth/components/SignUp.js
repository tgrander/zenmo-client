import React from 'react';
import { Field } from 'redux-form';

import InputField from '../../shared/form/InputField';

function SignUp({ handleSubmit, signup, submitting, pristine }) {
  return(
    <form onSubmit={handleSubmit(signup)}>
      <Field
        name="name"
        component={InputField} />
      <Field
        name="email"
        component={InputField} />
      <Field
        name="password"
        component={InputField} />
      <button type="submit" disabled={ pristine || submitting }>
        Sign Up
      </button>
    </form>
  )
}

export default SignUp;
