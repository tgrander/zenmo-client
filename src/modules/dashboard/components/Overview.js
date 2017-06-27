import React from 'react';
import { Field } from 'redux-form';

import InputField from './InputField';

import '../styles/overview.css';

const Overview = ({
  totalAssets,
  totalExpenses,
  bottomLine
}) => (
  <section className="overview">

    <div className="labels">
      <div className="label">Checkings</div>
      <div className="label">Savings</div>
      <div className="label">Monthly Income</div>

      <div className="label total">Total Assets</div>

      <div className="label">Rent</div>
      <div className="label">Bootcamp Loans</div>
      <div className="label">Student Loans</div>
      <div className="label">Monthly Expenses</div>

      <div className="label total">Total Expenses</div>
      <div className="label total">Net Income</div>

      <div className="label">Put Towards Savings</div>
      <div className="label">Invest In Stocks</div>

      <div className="bottom-line">Leftover for Fun</div>
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

      <div className="total">{totalAssets ? totalAssets : 0.00}</div>

      <Field
        name="monthlyIncome"
        type="number"
        component={InputField}
        label="Rent" />
      <Field
        name="monthlyIncome"
        type="number"
        component={InputField}
        label="Bootcamp Loans" />
      <Field
        name="monthlyIncome"
        type="number"
        component={InputField}
        label="Student Loans" />
      <Field
        name="monthlyIncome"
        type="number"
        component={InputField}
        label="Monthly Expenses" />

      <div className="total">{totalExpenses ? totalExpenses : 0.00}</div>
      <div className="total">{totalExpenses ? totalExpenses : 0.00}</div>

      <Field
        name="monthlyIncome"
        type="number"
        component={InputField}
        label="Put Towards Savings" />
      <Field
        name="monthlyIncome"
        type="number"
        component={InputField}
        label="Invest in Stocks" />

      <div className="bottom-line">{bottomLine ? bottomLine : 0.00}</div>
    </form>

  </section>
)

export default Overview;
