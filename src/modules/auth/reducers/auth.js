import { SET_CURRENT_USER } from '../constants';

const defaultState = {
  status: 'ANONYMOUS',
  currentUser: null,
}

const authReducer = (state=defaultState, action) => {
  switch (action.type) {
    case 'ATTEMPT_USER_SIGN_IN':
      return {
        ...state,
        status: 'FETCHING_USER'
      }
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.currentUser
      }

    default:
      return state;
  }
}

export default authReducer;
