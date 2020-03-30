import streams from "../apis/streams";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_PROFILE,
  EDIT_PROFILE
} from "./types";
import database from "../config/firebaseDb";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const payload = {
    description: formValues.description,
    title: formValues.title,
    userid: userId
  };
  database
    .collection("streams")
    .doc(userId)
    .set(payload)
    .then(() => {
      dispatch({ type: CREATE_STREAM, payload: payload });
      history.push("/");
    })
    .catch(function(error) {
      console.log("Error canot create stream: " + error);
    });
};

export const fetchStreams = () => async dispatch => {
  database
    .collection("streams")
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      dispatch({ type: FETCH_STREAMS, payload: data });
    })
    .catch(function(error) {
      console.log("Error fetching streams: " + error);
    });
};

export const fetchStream = id => async dispatch => {
  database
    .collection("streams")
    .where("userid", "==", id)
    .get()
    .then(querySnapshot => {
      const data_stream = querySnapshot.docs.map(doc => doc.data())[0];
      database  // Get the information of the user that created the stream
        .collection("users")
        .where("userid", "==", id)
        .get()
        .then(querySnapshot => {
          const data_user = querySnapshot.docs.map(doc => doc.data())[0];
          data_stream.user_info = data_user;
          dispatch({ type: FETCH_STREAM, payload: data_stream });
        });
    })
    .catch(function(error) {
      console.log("Error fetching a stream: " + error);
    });
};

export const editStream = (id, formValues) => async dispatch => {
  database
    .collection("streams")
    .doc(id)
    .update({
      title: formValues.title,
      description: formValues.description
    })
    .then(function() {
      dispatch({ type: EDIT_STREAM, payload: formValues });
      history.push("/");
    })
    .catch(function(error) {
      console.log("Failed to update stream: " + error);
    });
};

export const deleteStream = id => async dispatch => {
  database
    .collection("streams")
    .doc(id)
    .delete()
    .then(function() {
      dispatch({ type: DELETE_STREAM, payload: id });
      history.push("/");
    })
    .catch(function(error) {
      console.log("Failed to delete stream: " + error);
    });
};

export const fetchProfile = id => async dispatch => {
  database
    .collection("users")
    .where("userid", "==", id)
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      dispatch({ type: FETCH_PROFILE, payload: data[0] });
    })
    .catch(function(error) {
      console.error("Error fetching a profile: " + error);
    });
};

export const editProfile = (id, formValues) => async dispatch => {
  database
    .collection("users")
    .doc(id)
    .update({
      username: formValues.username,
      bio: formValues.bio
    })
    .then(function() {
      dispatch({ type: EDIT_PROFILE, payload: formValues });
      history.push("/");
    })
    .catch(function(error) {
      console.error("Failed to update profile: " + error);
    });
};
