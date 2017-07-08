import React from 'react';
import { Field } from 'redux-form';

import InputField from '../../shared/form/InputField';

function SignUp({
  handleSubmit,
  signin,
  submitting,
  pristine,
  currentUser,
  history
}) {
  if (currentUser) {
    history.push('/overview')
  }
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
