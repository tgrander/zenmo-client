import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import pipe from 'lodash/fp/flow';
import React from 'react';

import TrialBalance from '../components/TrialBalance';
import * as trialBalanceActions from '../actions/trialBalanceActions';

const form = reduxForm({form: 'trialBalance'});

const mapStateToProps = state => {
  const { auth: { currentUser } } = state;

  return {
    currentUser,
    initialValues: {
      ...assets,
      ...expenses,
      ...liabilities,
      ...goals,
    },
  }
}

const redux = connect(
  mapStateToProps,
  {
    trialBalanceActions
  }
)

export default pipe(
  form,
  redux,
)(TrialBalance)
