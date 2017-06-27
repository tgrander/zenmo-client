import React from 'react';
import { Field } from 'redux-form';

import InputField from './InputField';

const Overview = () => (
  <section className="overview">
    <div>

    </div>
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
  </section>
)

export default Overview;
