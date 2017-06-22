import React from 'react';
import { Field } from 'redux-form';

import InputField from './InputField';

function Overview() {
  return (
    <form>
      <Field
        name="checkings"
        type="number"
        component={InputField}
        label="Checkings" />
      <Field
        name="savings"
        type="number"
        component={InputField}
        label="Savings" />
      <Field
        name="monthlyIncome"
        type="number"
        component={InputField}
        label="Monthly Income" />
    </form>
  )
}
