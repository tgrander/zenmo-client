import types from './types'

const defaultState = {
  status: 'ANONYMOUS',
  currentUser: null,
}

const authReducer = (state=defaultState, action) => {
  switch (action.type) {
    case types.ATTEMPT_USER_SIGN_IN:
      return {
        ...state,
        status: 'FETCHING_USER'
      }
    case types.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.currentUser
      }

    default:
      return state
  }
}

export default authReducer
