import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import pipe from 'lodash/fp/flow';

import TrialBalance from '../components/TrialBalance';
import * as assetActions from '../actions/assets';

const form = reduxForm({form: 'trialBalance'});

const mapStateToProps = state => {
  const { assets, form: { trialBalance } } = state;
  return {
    assets,
    trialBalance
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
