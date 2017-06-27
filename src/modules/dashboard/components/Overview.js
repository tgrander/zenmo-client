import React from 'react';
import { Field } from 'redux-form';

import InputField from './InputField';

import '../styles/overview.css';

const Overview = () => (
  <section className="overview">
    <div className="labels">
      <div className="label">Checkings</div>
      <div className="label">Savings</div>
      <div className="label">Monthly Income</div>
    </div>
    <form className="overview-amounts">
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
