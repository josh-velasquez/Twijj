import {
  FETCH_PROFILE,
  CREATE_PROFILE,
  EDIT_PROFILE,
  FETCH_ADMINS
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return { ...state, [action.payload.userid]: action.payload };
    case CREATE_PROFILE:
      return { ...state, [action.payload.userid]: action.payload };
    case EDIT_PROFILE:
      return { ...state, [action.payload.userid]: action.payload };
    case FETCH_ADMINS:
      return { ...state, admins: action.payload };
    default:
      return state;
  }
};
