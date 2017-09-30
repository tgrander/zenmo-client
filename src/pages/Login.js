import pipe from 'lodash/fp/flow'
import { connect } from 'react-redux'
import withHandlers from 'recompose/withHandlers'
import { reduxForm } from 'redux-form'
import { auth } from '../firebase'
import Login from './login/Login'


const form = reduxForm({form: 'signin'})

const redux = connect(
  state => ({
    currentUser: state.auth.currentUser
  })
)

const handlers = withHandlers({
  signin: props => values => {
    const { email, password } = values
    if (email && password) {
      auth.signInWithEmailAndPassword(email, password)
    }
  },
})

export default pipe(
  form,
  redux,
  handlers,
)(Login)
