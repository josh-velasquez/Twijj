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

// database
//   .collection("streams")
//   .add({
//     description: "TESTING description 1",
//     title: "Test title",
//     userid: "Testing id"
//   })
//   .then(function() {
//     console.log("ADDED");
//   })
//   .catch(function(error) {
//     console.log("ERROR");
//   });

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
  // console.log(formValues);
  const { userId } = getState().auth;
  database
    .collection("streams")
    .add({
      description: formValues.description,
      title: formValues.title,
      userid: userId
    })
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      // dispatch({ type: CREATE_STREAM, payload: data });
      // history.push("/");
    })
    .catch(function(error) {
      console.log("Error canot create stream: " + error);
    });

  // const { userId } = getState().auth;
  // const response = await streams.post("/streams", { ...formValues, userId });
  // dispatch({ type: CREATE_STREAM, payload: response.data });
  // history.push("/");
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
  // const response = await streams.get("/streams");
  // dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  database
    .collection("streams")
    .where("userid", "==", id)
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      dispatch({ type: FETCH_STREAM, payload: data });
    })
    .catch(function(error) {
      console.log("Error fetching a stream: " + error);
    });
  // const response = await streams.get(`/streams/${id}`);
  // dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push("/");
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};

export const fetchProfile = id => async dispatch => {
  const response = await streams.get(`/profiles/${id}`);
  dispatch({ type: FETCH_PROFILE, payload: response.data });
};

export const editProfile = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/profiles/${id}`, formValues);
  dispatch({ type: EDIT_PROFILE, payload: response.data });
  history.push("/");
};
