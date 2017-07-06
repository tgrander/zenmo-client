import { reduxForm } from 'redux-form';
import pipe from 'lodash/fp/flow';
import withHandlers from 'recompose/withHandlers';

import SignUp from '../components/SignUp';

const form = reduxForm({form: 'signin'});

const handlers = withHandlers({
  signUp: (props) => (values) => {
    const { handleSubmit } = props;

  }
})

export default (
  form,
)(SignUp)
