import React from "react";
import { connect } from "react-redux";
import {
  chatConnect,
  chatDisconnect,
  chatMessageSend,
  chatSignIn,
  chatSignOut,
} from "../../actions";

/**
 * The chat component that will be shown alongside streams.
 *
 * For now, simply returns a template with no functionality.
 */
class StreamChat extends React.Component {
  handleSubmit(event) {
    event.preventDefault();

    const message = event.target.querySelector("input").value;

    if (message) {
      this.props.chatMessageSend(message);
      event.target.querySelector("input").value = "";
    }
  }

  componentDidMount() {
    // if (this.props.stream && this.props.isSignedIn && this.props.profile) {
    //   const socket = io(`http://localhost:8001`, {
    //     query: {
    //       streamid: this.props.stream.userid,
    //       userid: this.props.profile.userid,
    //       username: this.props.profile.username
    //     }
    //   });
    // }
    this.props.chatConnect(this.props.stream && this.props.stream.userid);
  }

  componentDidUpdate() {
    if (
      this.props.isSignedIn &&
      this.props.chatConnected &&
      !this.props.chatSignedIn &&
      this.props.profile
    ) {
      this.props.chatSignIn(
        this.props.profile.userid,
        this.props.profile.username
      );
    } else if (
      !this.props.isSignedIn &&
      this.props.chatConnected &&
      this.props.chatSignedIn
    ) {
      this.props.chatSignOut();
    }
  }

  componentWillUnmount() {
    this.props.chatDisconnect();
  }

  placeholder() {
    const username =
      this.props.stream &&
      this.props.stream.user_info &&
      this.props.stream.user_info.username;
    let placeholder = "Sign in to chat with " + (username || "User");

    if (this.props.chatSignedIn) {
      placeholder = "Chat with " + (username || "User");
    }

    return placeholder;
  }

  disabled() {
    return !this.props.chatSignedIn && !this.props.chatSending;
  }

  render() {
    return (
      <div id="chat-container" className="four wide column">
        <div className="ui secondary menu header center aligned grid">
          <div className="ui item">Stream Chat</div>
        </div>
        <ul id="chat-messages" className="content-scrollable" />
        <form id="chat-form" action="" onSubmit={(e) => this.handleSubmit(e)}>
          <input
            autoComplete="off"
            placeholder={this.placeholder()}
            disabled={this.disabled()}
          />
          <button disabled={this.disabled()}>Chat</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profiles[state.auth.userId],
    isSignedIn: state.auth.isSignedIn,
    chatConnected: state.chat.connected,
    chatSignedIn: state.chat.signedIn,
    chatSending: state.chat.sending,
  };
};

export default connect(mapStateToProps, {
  chatConnect,
  chatDisconnect,
  chatMessageSend,
  chatSignIn,
  chatSignOut,
})(StreamChat);
