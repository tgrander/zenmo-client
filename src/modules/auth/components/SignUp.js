import React from 'react';
import { Field } from 'redux-form';

function SignUp({}) {
  return(
    <form>
      <Field
        name="email"
        component={}
      />
      <Field
        name="password"
        component={}
      />
      <Field
        name="verifyPassword"
        component={}
      />
    </form>
  )
}

export default SignUp;
