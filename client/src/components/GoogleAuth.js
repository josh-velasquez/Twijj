import React from "react";
import { connect } from "react-redux";
import { fetchProfile, awaitSignIn, signOut } from "../actions";
import firebase from "firebase";

class GoogleAuth extends React.Component {
  provider = new firebase.auth.GoogleAuthProvider();

  componentDidUpdate(){
    if(this.props.rejectSignIn === true){
      firebase.auth().signOut();
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(this.onAuthChange);
  }

  onAuthChange = user => {
    if (user) {
      this.props.fetchProfile({
        id: user.uid,
        name: user.displayName,
        email: user.email
      });
      this.props.awaitSignIn(
        user.uid,
        user.displayName,
        user.email
      );
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    firebase
      .auth()
      .signInWithPopup(this.provider)
      .catch(function(error) {
        console.log(error);
      });
  };

  onSignOutClick = () => {
    firebase.auth().signOut();
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }

  renderAuthButton() {
    if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    rejectSignIn: state.auth.rejectSignIn
  };
};

export default connect(
  mapStateToProps,
  { fetchProfile, awaitSignIn, signOut }
)(GoogleAuth);
