import { reduxForm } from 'redux-form';
import pipe from 'lodash/fp/flow';
import withHandlers from 'recompose/withHandlers';

import SignUp from '../components/SignUp';

const form = reduxForm({form: 'signin'});

const handlers = withHandlers({
  signup: props => values => {
    const { email, password } = values;
    console.log('VALUES: ', values);
  },
})

export default pipe(
  form,
  handlers,
)(SignUp)
