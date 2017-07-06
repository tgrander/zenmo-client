import { reduxForm } from 'redux-form';
import pipe from 'lodash/fp/flow';

import SignUp from '../components/SignUp';

const form = reduxForm({form: 'signin'});

export default (
  form,
)(SignUp)
