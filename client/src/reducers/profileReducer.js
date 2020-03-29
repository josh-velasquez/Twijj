import { FETCH_PROFILE, EDIT_PROFILE } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return { ...state, [action.payload.userid]: action.payload };
    case EDIT_PROFILE:
      return { ...state, [action.payload.userid]: action.payload };
    default:
      return state;
  }
};
