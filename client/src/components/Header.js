import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

class Header extends React.Component {
  renderProfileButton() {
    let to = "/";
    if (this.props.isSignedIn) {
      to = `/profile/${this.props.currentUserId}`;
    }
    return (
      <Link to={to} className="item">
        Streamer
      </Link>
    );
  }

  render() {
    return (
      <div className="ui secondary pointing menu">
        {this.renderProfileButton()}
        <div className="right menu">
          <Link to="/" className="item">
            All Streams
          </Link>
          <GoogleAuth />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, null)(Header);
