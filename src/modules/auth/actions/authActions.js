import { auth } from '../../../firebase';

export const setCurrentUser = currentUser => ({
  type: 'SET_CURRENT_USER',
  currentUser
})
const fetchUser = user => ({
  type: 'FETCHING_USER',
  user
})
const fetchUserSuccess = user => ({
  type: 'FETCH_USER_SUCCESS',
  user
})
const fetchUserError = () => ({
  type: 'FETCH_USER_ERROR'
})
export const startListeningToAuthStateChanges = dispatch => {
  auth.onAuthStateChanged(user => {
    if (user) {

    } else {

    }
  })
}
