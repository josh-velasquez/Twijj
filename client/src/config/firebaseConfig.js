import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1AvhSoik7K4H-8VjkfN2puZ-9JHz6vbI",
  authDomain: "twijj-271803.firebaseapp.com",
  databaseURL: "https://twijj-271803.firebaseio.com",
  projectId: "twijj-271803",
  storageBucket: "twijj-271803.appspot.com",
  messagingSenderId: "434963010544",
  appId: "1:434963010544:web:6d56670aa1caa0ccab4335",
  measurementId: "G-HF3KRVS2FV"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
