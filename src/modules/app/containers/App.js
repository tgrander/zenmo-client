import { connect } from 'react-redux';
import pipe from 'lodash/fp/flow';
import {
  fetchTrialBalance
} from '../../trialBalance/actions/trialBalanceActions'
import {
  setCurrentUser
} from '../../auth/actions/authActions'

import App from '../components/App';

const redux = connect(
  state => ({
    currentUser: state.auth.currentUser,
    isFetchingTrialBalance: state.trialBalance.isFetching
  }),
  {
    fetchTrialBalance,
    setCurrentUser,
  }
)

export default pipe(
  redux,
)(App)
