import { FETCH_STREAM_SERVER_IP } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM_SERVER_IP:
      return { ...state, serverIp: action.payload };
    default:
      return state;
  }
};
