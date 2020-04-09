import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";
import profileReducer from "./profileReducer";
import streamServerReducer from "./streamServerReducer";
import chatReducer from "./chatReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  profiles: profileReducer,
  streams: streamReducer,
  streamServer: streamServerReducer,
  chat: chatReducer
});
