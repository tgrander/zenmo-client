import { reduxForm } from 'redux-form';
import pipe from 'lodash/fp/flow';
import withHandlers from 'recompose/withHandlers';
import { auth } from '../../../firebase';

import SignIn from '../components/SignIn';

const form = reduxForm({form: 'signin'});

const handlers = withHandlers({
  signin: props => values => {
    const { email, password } = values;
    if (email && password) {
      auth.signInWithEmailAndPassword(email, password)
    }
  },
})

export default pipe(
  form,
  handlers,
)(SignIn)
