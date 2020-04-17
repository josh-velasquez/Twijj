import firebase from "firebase";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyA-0ES8kK0A7YJFZVNIsM1xQV-dE9BY1jA",
  authDomain: "twijj-271803.firebaseapp.com",
  databaseURL: "https://twijj-271803.firebaseio.com",
  projectId: "twijj-271803",
  storageBucket: "twijj-271803.appspot.com",
  messagingSenderId: "434963010544",
  appId: "1:434963010544:web:6d56670aa1caa0ccab4335",
  measurementId: "G-HF3KRVS2FV",
});
const database = app.firestore();

export default database;
