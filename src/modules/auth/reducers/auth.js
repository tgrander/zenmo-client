import { SET_CURRENT_USER } from '../constants';

const defaultState = {
  currentUseruser: null,
}

const authReducer = (state=defaultState, action) => {
  switch (action.type) {
    case: SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.currentUser
      }

    default:
      return state;
  }
}

export default authReducer;
