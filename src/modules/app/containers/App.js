import { connect } from 'react-redux';
import { auth } from '../../../firebase';
import pipe from 'lodash/fp/flow';
import withHandlers from 'recompose/withHandlers';

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
