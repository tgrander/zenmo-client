import React from 'react';
import { Field } from 'redux-form';

import InputField from './InputField';

import '../styles/overview.css';

const TrialBalance = ({
  totalAssets,
  totalExpenses,
  bottomLine,
  assets,
  addAsset,
  removeAsset,
  modifyAssetLabel,
  modifyAssetAmount,
  trialBalance,
}) => {

  console.log('FORM: ', trialBalance);

  return (
    <section className="overview">

      <div className="trial-balance-sections">

      </div>

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
          name="rent"
          type="number"
          component={InputField}
          label="Rent" />
        <Field
          name="bootcampLoans"
          type="number"
          component={InputField}
          label="Bootcamp Loans" />
        <Field
          name="studentLoans"
          type="number"
          component={InputField}
          label="Student Loans" />
        <Field
          name="monthlyExpenses"
          type="number"
          component={InputField}
          label="Monthly Expenses" />

        <div className="total">{totalExpenses ? totalExpenses : 0.00}</div>
        <div className="total">{totalExpenses ? totalExpenses : 0.00}</div>

        <Field
          name="putTowardsSavings"
          type="number"
          component={InputField}
          label="Put Towards Savings" />
        <Field
          name="investInStocks"
          type="number"
          component={InputField}
          label="Invest in Stocks" />

        <div className="bottom-line">{bottomLine ? bottomLine : 0.00}</div>
      </form>

    </section>
  )
}

export default TrialBalance;
