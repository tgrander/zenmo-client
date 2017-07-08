import { connect } from 'react-redux';
import pipe from 'lodash/fp/flow';
import { setCurrentUser } from '../../auth/actions/auth';

import App from '../components/App';

const redux = connect(
  state => ({
    currentUser: state.auth.currentUser
  }),
  {
    setCurrentUser
  }
)

export default pipe(
  redux,
)(App)
