import React from "react";
import { connect } from "react-redux";
import { chatConnect, chatDisconnect, chatSignIn, chatSignOut } from "../../actions";

/**
 * The chat component that will be shown alongside streams.
 *
 * For now, simply returns a template with no functionality.
 */
class StreamChat extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
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
      this.props.isSignedIn
      && this.props.chatConnected
      && !this.props.chatSignedIn
      && this.props.profile
    ) {
      this.props.chatSignIn(this.props.profile.userid, this.props.profile.username);
    }
    else if (
      !this.props.isSignedIn
      && this.props.chatConnected
      && this.props.chatSignedIn
    ) {
      this.props.chatSignOut();
    }
  }

  componentWillUnmount() {
    this.props.chatDisconnect();
  }

  render() {
    return (
      <div id="chat-container" class="four wide column">
        <div class="ui secondary menu header center aligned grid">
          <div class="ui item">Stream Chat</div>
        </div>
        <ul id="chat-messages" class="content-scrollable">
          <li>
            <span>User 0</span>
            <span>hello</span>
          </li>
          <li>
            <span>User 1</span>
            <span>bruh</span>
          </li>
        </ul>
        <form id="chat-form" action="" onSubmit={this.handleSubmit}>
          <input autoComplete="off"/>
          <button>Chat</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profiles[state.auth.userId],
    isSignedIn: state.auth.isSignedIn,
    chatConnected: state.chat.chatConnected,
    chatSignedIn: state.chat.chatSignedIn
  }
}

export default connect(
  mapStateToProps,
  {
    chatConnect,
    chatDisconnect,
    chatSignIn,
    chatSignOut
  }
)(StreamChat);
