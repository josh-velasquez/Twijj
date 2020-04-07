import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProfile } from "../../actions";

class Profile extends React.Component {
  componentDidUpdate() {
    if (this.props.currentUserId != null && this.props.profile == null) {
      this.props.fetchProfile({
        id: this.props.currentUserId,
        email: this.props.currentUserEmail,
        name: this.props.currentUserName,
      });
    }
  }

  render() {
    if (this.props.isSignedIn && this.props.profile != null) {
      return (
        <Link
          to={`/profile/${this.props.currentUserId}`}
          className="item"
          style={{ color: "white" }}
        >
          {this.props.profile.username}
        </Link>
      );
    }
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profiles[state.auth.userId],
    currentUserId: state.auth.userId,
    currentUserEmail: state.auth.userEmail,
    currentUserName: state.auth.userFullName,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchProfile })(Profile);
