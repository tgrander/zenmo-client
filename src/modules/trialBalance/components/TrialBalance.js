import React from 'react';
import { Field } from 'redux-form';
import { Redirect } from 'react-router'

import AmountInput from './AmountInput';
import AssetsTotal from '../containers/AssetsTotal';
import ExpensesTotal from '../containers/ExpensesTotal';
import LiabilitiesTotal from '../containers/LiabilitiesTotal';
import GoalsTotal from '../containers/GoalsTotal';

import NetIncome from '../containers/NetIncome';
import Leftover from '../containers/Leftover';

import '../styles/overview.css';

const TrialBalance = ({
  addItem,
  removeItem,
  changeItemLabel,
  changeItemAmount,

  currentUser,
}) => {

  // if (!currentUser) {
  //   return <Redirect to="/" push />
  // }

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
          component={AmountInput}
          section="assets"
          onChangeAction={changeItemAmount} />
        <Field
          name="Savings"
          component={AmountInput}
          section="assets"
          onChangeAction={changeItemAmount} />
        <Field
          name="Monthly Income"
          component={AmountInput}
          section="assets"
          onChangeAction={changeItemAmount} />

        <AssetsTotal className="assets" />

        <Field
          name="Rent"
          label="Checkings"
          component={AmountInput}
          section="expenses"
          onChangeAction={changeItemAmount} />
        <Field
          name="Monthly Expenses"
          component={AmountInput}
          section="expenses"
          onChangeAction={changeItemAmount} />

        <ExpensesTotal className="expenses" />

        <Field
          name="Student Loans"
          component={AmountInput}
          section="liabilities"
          onChangeAction={changeItemAmount} />
        <Field
          name="Bootcamp Loans"
          component={AmountInput}
          section="liabilities"
          onChangeAction={changeItemAmount} />

        <LiabilitiesTotal className="liabilities" />

        <NetIncome />

        <Field
          name="Add to Savings"
          component={AmountInput}
          section="goals"
          onChangeAction={changeItemAmount} />
        <Field
          name="Invest in Stocks"
          component={AmountInput}
          section="goals"
          onChangeAction={changeItemAmount} />

        <GoalsTotal className="goals" />

        <Leftover />
      </form>

    </section>
  )
}

export default TrialBalance;
