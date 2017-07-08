import React from 'react';
import { Field } from 'redux-form';
// import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

import InputField from '../../shared/form/InputField';

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
        component={InputField}
        label="Email" />
      <Field
        name="password"
        component={InputField}
        label="Password" />
      <button type="submit" disabled={ pristine || submitting }>
        Sign Up
      </button>
    </form>
  )
}

export default SignUp;
