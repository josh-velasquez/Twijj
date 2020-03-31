import { SIGN_IN, SIGN_OUT, AUTH_FAIL } from "../actions/types";

const INITAL_STATE = {
  isSignedIn: null,
  userId: null,
  rejectSignIn: false
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload.userId, userFullName: action.payload.userFullName, userEmail: action.payload.userEmail };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null, rejectSignIn: false };
    case AUTH_FAIL:
      return { ...state, rejectSignIn: true };
    default:
      return state;
  }
};
