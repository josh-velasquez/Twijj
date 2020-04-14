import {
  CHAT_CONNECT,
  CHAT_DISCONNECT,
  CHAT_SIGN_IN,
  CHAT_SIGN_OUT,
  CHAT_MESSAGE_SENDING,
  CHAT_MESSAGE_SENT,
  CHAT_MESSAGE_ADD,
  VIEWER_COUNT_UPDATE
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CHAT_CONNECT:
      return { ...state, connected: true, messages: [] };
    case CHAT_DISCONNECT:
      return { ...state, connected: false, messages: [] };
    case CHAT_SIGN_IN:
      return { ...state, signedIn: true };
    case CHAT_SIGN_OUT:
      return { ...state, signedIn: false };
    case CHAT_MESSAGE_SENDING:
      return { ...state, sending: true };
    case CHAT_MESSAGE_SENT:
      return { ...state, sending: false };
    case CHAT_MESSAGE_ADD:
      return { ...state, messages: [...state.messages, action.message]}
    case VIEWER_COUNT_UPDATE:
      return { ...state, viewer_count: action.payload.viewer_count };
    default:
      return state;
  }
};
