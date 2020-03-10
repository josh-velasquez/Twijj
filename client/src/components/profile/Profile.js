import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  render() {
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
}

const mapStateToProps = state => {
  return {
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, null)(Profile);
