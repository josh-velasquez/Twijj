import {
  CHAT_CONNECT,
  CHAT_DISCONNECT,
  CHAT_SIGN_IN,
  CHAT_SIGN_OUT,
  CHAT_MESSAGE_SEND,
  CHAT_MESSAGE_RECEIVE
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CHAT_CONNECT:
      return { ...state, chatConnected: true };
    case CHAT_DISCONNECT:
      return { ...state, chatConnected: false };
    case CHAT_SIGN_IN:
      return { ...state, chatSignedIn: true };
    case CHAT_SIGN_OUT:
      return { ...state, chatSignedIn: false };
    case CHAT_MESSAGE_SEND:
      return { ...state };
    case CHAT_MESSAGE_RECEIVE:
      return { ...state };
    default:
      return state;
  }
};
