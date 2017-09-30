import { reduxForm } from 'redux-form'
import pipe from 'lodash/fp/flow'
import withHandlers from 'recompose/withHandlers'
import { auth } from '../firebase'
import { connect } from 'react-redux'

import SignUp from './signup/Signup'

const form = reduxForm({form: 'signup'})

const redux = connect(
  state => ({
    currentUser: state.auth.currentUser
  })
)

const handlers = withHandlers({
  signup: props => values => {
    const { email, password } = values
    if (email && password) {
      auth.createUserWithEmailAndPassword(email, password)
    }
  },
})

export default pipe(
  form,
  redux,
  handlers,
)(SignUp)
