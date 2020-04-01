import { AWAIT_SIGN_IN, SIGN_IN, SIGN_OUT, AUTH_FAIL } from "../actions/types";

const INITAL_STATE = {
  isSignedIn: null,
  userId: null,
  rejectSignIn: false
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case AWAIT_SIGN_IN:
      return { ...state, isSignedIn: false, 
          userId: action.payload.userId,
          userFullName: action.payload.userFullName,
          userEmail: action.payload.userEmail
        };
    case SIGN_IN:
      return { ...state, isSignedIn: true};
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null, userFullName: null, rejectSignIn: false, userEmail: null};
    case AUTH_FAIL:
      return { ...state, rejectSignIn: true };
    default:
      return state;
  }
};
