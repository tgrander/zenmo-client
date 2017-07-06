import React from 'react';
import { Field } from 'redux-form';

import InputField from '../../shared/form/InputField';

function SignUp({ handleSubmit, signin, submitting, pristine }) {
  return(
    <form onSubmit={handleSubmit(signin)}>
      <Field
        name="email"
        component={InputField}
        label="Email" />
      <Field
        name="password"
        component={InputField}
        label="Password" />
      <button type="submit" disabled={ pristine || submitting }>
        Sign In
      </button>
    </form>
  )
}

export default SignUp;
