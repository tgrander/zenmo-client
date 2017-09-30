import React from 'react';
import { Field } from 'redux-form';

import Input from '../../shared/components/Input';

function SignUp({
  handleSubmit,
  signup,
  submitting,
  pristine,
  currentUser,
  history
}) {
  if (currentUser) {
    history.push('/overview')
  }
  return(
    <form onSubmit={handleSubmit(signup)}>
      <Field
        name="email"
        component={Input}
        label="Email" />
      <Field
        name="password"
        component={Input}
        label="Password"
        type="password" />
      <button type="submit" disabled={ pristine || submitting }>
        Sign Up
      </button>
    </form>
  )
}

export default SignUp;
