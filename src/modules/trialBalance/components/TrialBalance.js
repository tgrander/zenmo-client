import React from 'react';
import { Field } from 'redux-form';

import InputField from './InputField';
import AssetsTotal from '../containers/AssetsTotal';
import ExpensesTotal from '../containers/ExpensesTotal';
import LiabilitiesTotal from '../containers/LiabilitiesTotal';
import GoalsTotal from '../containers/GoalsTotal';

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

        <div className="label total assets">Total Assets</div>

        <div className="label">Rent</div>
        <div className="label">Monthly Expenses</div>

        <div className="label total expenses">Total Expenses</div>

        <div className="label">Student Loans</div>
        <div className="label">Bootcamp Loans</div>

        <div className="label total liabilities">Total Liabilities</div>
        <div className="label total net-income">Net Income</div>

        <div className="label">Put Towards Savings</div>
        <div className="label">Invest In Stocks</div>

        <div className="label total goals">Total Goals</div>
        <div className="bottom-line">Leftover for Fun</div>
      </div>

      <form className="overview-amounts">
        <Field
          name="Checkings"
          type="number"
          component={InputField}
          label="Checkings" />
        <Field
          name="Savings"
          type="number"
          component={InputField}
          label="Savings" />
        <Field
          name="Monthly Income"
          type="number"
          component={InputField}
          label="Monthly Income" />

        <AssetsTotal className="assets" />

        <Field
          name="Rent"
          type="number"
          component={InputField}
          label="Rent" />
        <Field
          name="Monthly Expenses"
          type="number"
          component={InputField}
          label="Monthly Expenses" />

        <ExpensesTotal className="expenses" />

        <Field
          name="Student Loans"
          type="number"
          component={InputField}
          label="Student Loans" />
        <Field
          name="Bootcamp Loans"
          type="number"
          component={InputField}
          label="Bootcamp Loans" />

        <LiabilitiesTotal className="liabilities" />
        <div className="bottom-line">{bottomLine ? bottomLine : 0.00}</div>

        <Field
          name="Add to Savings"
          type="number"
          component={InputField}
          label="Add to Savings" />
        <Field
          name="Invest in Stocks"
          type="number"
          component={InputField}
          label="Invest in Stocks" />

        <GoalsTotal className="goals" />

        <div className="bottom-line">{bottomLine ? bottomLine : 0.00}</div>
      </form>

    </section>
  )
}

export default TrialBalance;
