import streams from "../apis/streams";
import history from "../history";
import {
  AWAIT_SIGN_IN,
  SIGN_IN,
  SIGN_OUT,
  AUTH_FAIL,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_PROFILE,
  CREATE_PROFILE,
  EDIT_PROFILE,
  FETCH_STREAM_SERVER_IP,
  FETCH_ADMINS,
} from "./types";
import database from "../config/firebaseDb";

export const awaitSignIn = (userId, userFullName, userEmail) => {
  return {
    type: AWAIT_SIGN_IN,
    payload: { userId, userFullName, userEmail },
  };
};

export const signIn = () => {
  return {
    type: SIGN_IN,
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const payload = {
    description: formValues.description,
    title: formValues.title,
    gametag: formValues.gametag,
    userid: userId,
  };
  database
    .collection("streams")
    .doc(userId)
    .set(payload)
    .then(() => {
      dispatch({ type: CREATE_STREAM, payload: payload });
      history.push("/");
    })
    .catch(function (error) {
      console.log("Error canot create stream: " + error);
    });
};

export const fetchStreams = () => async (dispatch) => {
  database
    .collection("streams")
    .get()
    .then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => doc.data());
      dispatch({ type: FETCH_STREAMS, payload: data });
    })
    .catch(function (error) {
      console.log("Error fetching streams: " + error);
    });
};

export const fetchStream = (id) => async (dispatch) => {
  database
    .collection("streams")
    .where("userid", "==", id)
    .get()
    .then((querySnapshot) => {
      const data_stream = querySnapshot.docs.map((doc) => doc.data())[0];
      database // Get the information of the user that created the stream
        .collection("users")
        .where("userid", "==", id)
        .get()
        .then((querySnapshot) => {
          const data_user = querySnapshot.docs.map((doc) => doc.data())[0];
          data_stream.user_info = data_user;
          dispatch({ type: FETCH_STREAM, payload: data_stream });
        })
        .catch(function (error) {
          console.error("Error fetching user info for stream: " + error);
        });
    })
    .catch(function (error) {
      console.error("Error fetching a stream: " + error);
    });
};

export const editStream = (id, formValues) => async (dispatch) => {
  database
    .collection("streams")
    .doc(id)
    .update({
      title: formValues.title,
      description: formValues.description,
      gametag: formValues.gametag,
    })
    .then(function () {
      formValues.userid = id;
      dispatch({ type: EDIT_STREAM, payload: formValues });
      history.push("/");
    })
    .catch(function (error) {
      console.log("Failed to update stream: " + error);
    });
};

export const deleteStream = (id) => async (dispatch) => {
  database
    .collection("streams")
    .doc(id)
    .delete()
    .then(function () {
      dispatch({ type: DELETE_STREAM, payload: id });
      history.push("/");
    })
    .catch(function (error) {
      console.log("Failed to delete stream: " + error);
    });
};

const createProfile = (createData) => async (dispatch) => {
  const payload = {
    bio: "This is a default bio",
    email: createData.email,
    name: createData.name,
    userid: createData.id,
    username: createData.name,
  };
  database
    .collection("users")
    .doc(createData.id)
    .set(payload)
    .then(() => {
      dispatch({ type: CREATE_PROFILE, payload: payload });
      dispatch({ type: SIGN_IN });
      history.push("/");
    })
    .catch(function (error) {
      console.error("Error cannot create profile: " + error);
      dispatch({ type: AUTH_FAIL });
    });
};

export const fetchProfile = (fetchData) => async (dispatch) => {
  database
    .collection("users")
    .where("userid", "==", fetchData.id)
    .get()
    .then((querySnapshot) => {
      if (querySnapshot.empty) {
        dispatch(createProfile(fetchData));
      } else {
        const data = querySnapshot.docs.map((doc) => doc.data());
        dispatch({ type: FETCH_PROFILE, payload: data[0] });
        dispatch({ type: SIGN_IN });
      }
    })
    .catch(function (error) {
      console.error("Error fetching a profile: " + error);
      dispatch({ type: AUTH_FAIL });
    });
};

export const editProfile = (id, formValues) => async (dispatch) => {
  database
    .collection("users")
    .doc(id)
    .update({
      username: formValues.username,
      bio: formValues.bio,
    })
    .then(function () {
      dispatch({ type: EDIT_PROFILE, payload: formValues });
      history.push("/");
    })
    .catch(function (error) {
      console.error("Failed to update profile: " + error);
    });
};

export const fetchStreamServerIp = () => async (dispatch) => {
  database
    .collection("serverip")
    .get()
    .then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => doc.data());
      dispatch({ type: FETCH_STREAM_SERVER_IP, payload: data[0] });
    })
    .catch(function (error) {
      console.error("Failed to retrieve server ip: " + error);
    });
};

export const fetchAdmins = () => async (dispatch) => {
  database
    .collection("admins")
    .get()
    .then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => doc.data());
      dispatch({ type: FETCH_ADMINS, payload: data });
    })
    .catch(function (error) {
      console.error("Failed to retrieve admins: " + error);
    });
};
