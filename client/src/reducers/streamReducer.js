import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  VIEWER_COUNT_UPDATE,
} from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "userid") };
    case FETCH_STREAM:
      return { ...state, [action.payload.userid]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.userid]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.userid]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    case VIEWER_COUNT_UPDATE:
      return {
        ...state,
        [action.payload.userid]: {
          ...state[action.payload.userid],
          viewer_count: action.payload.viewer_count,
        },
      };
    default:
      return state;
  }
};
