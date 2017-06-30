import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import pipe from 'lodash/fp/flow';

import TrialBalance from '../components/TrialBalance';
import * as assetActions from '../actions/assets';

const form = reduxForm({form: 'trialBalance'});

const mapStateToProps = state => {
  const {
    assets,
    expenses,
    liabilities,
    goals,
    form: { trialBalance }
  } = state;

  return {
    assets,
    expenses,
    liabilities,
    goals,
    trialBalance,
    initialValues: {
      ...assets,
      ...expenses,
      ...liabilities,
      ...goals,
    }
  }
}

const redux = connect(
  mapStateToProps,
  assetActions
)

export default pipe(
  form,
  redux
)(TrialBalance)
