import React from 'react';
import { Field } from 'redux-form';

import InputField from '../../shared/form/InputField';

function SignUp({}) {
  return(
    <form>
      <Field
        name="email"
        component={InputField}
      />
      <Field
        name="password"
        component={InputField}
      />
      <Field
        name="verifyPassword"
        component={InputField}
      />
    </form>
  )
}

export default SignUp;
