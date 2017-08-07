import { connect } from 'react-redux';
import pipe from 'lodash/fp/flow';
import {
  fetchTrialBalance
} from '../../trialBalance/actions/trialBalanceActions'

import App from '../components/App';

const redux = connect(
  state => ({
    currentUser: state.auth.currentUser
  }),
  {
    fetchTrialBalance
  }
)

export default pipe(
  redux,
)(App)
