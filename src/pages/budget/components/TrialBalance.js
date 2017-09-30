import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import AmountInput from '../containers/AmountInput';
import AssetsTotal from '../containers/AssetsTotal';
import ExpensesTotal from '../containers/ExpensesTotal';
import LiabilitiesTotal from '../containers/LiabilitiesTotal';
import GoalsTotal from '../containers/GoalsTotal';

import NetIncome from '../containers/NetIncome';
import Leftover from '../containers/Leftover';

import '../styles/overview.css';

const propTypes = {

}

const TrialBalance = ({
  addItem,
  removeItem,
  changeItemLabel,
  changeItemAmount,

  currentUser,
}) => {

  if (!currentUser) {
    return <div></div>
  }

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
          uid={currentUser.uid} />
        <Field
          name="Savings"
          component={AmountInput}
          section="assets"
          uid={currentUser.uid} />
        <Field
          name="Monthly Income"
          component={AmountInput}
          section="assets"
          uid={currentUser.uid} />

        <AssetsTotal className="assets" />

        <Field
          name="Rent"
          label="Checkings"
          component={AmountInput}
          section="expenses"
          uid={currentUser.uid} />
        <Field
          name="Monthly Expenses"
          component={AmountInput}
          section="expenses"
          uid={currentUser.uid} />

        <ExpensesTotal className="expenses" />

        <Field
          name="Student Loans"
          component={AmountInput}
          section="liabilities"
          uid={currentUser.uid} />
        <Field
          name="Bootcamp Loans"
          component={AmountInput}
          section="liabilities"
          uid={currentUser.uid} />

        <LiabilitiesTotal className="liabilities" />

        <NetIncome />

        <Field
          name="Add to Savings"
          component={AmountInput}
          section="goals"
          uid={currentUser.uid} />
        <Field
          name="Invest in Stocks"
          component={AmountInput}
          section="goals"
          uid={currentUser.uid} />

        <GoalsTotal className="goals" />

        <Leftover />

      </form>

    </section>
  )
}

export default TrialBalance;
