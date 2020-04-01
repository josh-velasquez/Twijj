import React from "react";
import { connect } from "react-redux";
import { fetchProfile, awaitSignIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidUpdate(){
    if(this.props.rejectSignIn === true){
      this.auth.signOut();
    }
  }
  
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "434963010544-itr9jvms5cn5i6e4097458nrv17uv5me.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.fetchProfile({
          id: this.auth.currentUser.get().getId(), 
          name: this.auth.currentUser.get().getBasicProfile().getName(), 
          email: this.auth.currentUser.get().getBasicProfile().getEmail()
        });
      this.props.awaitSignIn(this.auth.currentUser.get().getId(), this.auth.currentUser.get().getBasicProfile().getName() , this.auth.currentUser.get().getBasicProfile().getEmail());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
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
