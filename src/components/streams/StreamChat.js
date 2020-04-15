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
 */
class StreamChat extends React.Component {
  componentDidMount() {
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

    if (this.at_bottom) {
      this.message_container_end.scrollIntoView();
      this.at_bottom = false;
    }
  }

  componentWillUnmount() {
    this.props.chatDisconnect();
  }

  handleSubmit(event) {
    event.preventDefault();

    const message = this.message_form_textarea.value;

    if (message) {
      this.props.chatMessageSend(message);
      this.message_form_textarea.value = "";
    }
  }

  submitOnEnter(event) {
    // If the enter key is pressed without the shift key.
    if (event.keyCode === 13 && !event.shiftKey) {
      event.preventDefault();
      this.message_form.requestSubmit();
    }
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

  renderMessages() {
    const username =
      this.props.stream &&
      this.props.stream.user_info &&
      this.props.stream.user_info.username;
    if (!this.props.messages || this.props.messages.length === 0) {
      return (
        <div className="message empty white-text">
          <span>Send a message to chat with {username || "User"}!</span>
        </div>
      );
    }

    return this.props.messages.map((message) => {
      return (
        <div className="message white-text" key={message.messageid}>
          <span className="message-username">{`${message.username}: `}</span>
          <span className="message-text">{message.text}</span>
        </div>
      );
    });
  }

  render() {
    if (this.message_container) {
      if (
        this.message_container.scrollHeight -
          this.message_container.scrollTop ===
        this.message_container.clientHeight
      ) {
        this.at_bottom = true;
      }
    }
    return (
      <div id="chat-container" className="four wide column">
        <div className="ui secondary menu header center aligned grid">
          <div className="ui item white-text">Stream Chat</div>
        </div>
        <div
          id="chat-messages"
          ref={(element) => (this.message_container = element)}
          className="content-scrollable"
        >
          {this.renderMessages()}
          <div ref={(element) => (this.message_container_end = element)}></div>
        </div>
        <form
          id="chat-form"
          className="hide-on-mobile"
          ref={(element) => (this.message_form = element)}
          action=""
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <textarea
            ref={(element) => (this.message_form_textarea = element)}
            placeholder={this.placeholder()}
            disabled={this.disabled()}
            onKeyDown={(e) => this.submitOnEnter(e)}
          />
          <button className="ui button teal" disabled={this.disabled()}>
            Chat
          </button>
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
    messages: state.chat.messages,
  };
};

export default connect(mapStateToProps, {
  chatConnect,
  chatDisconnect,
  chatMessageSend,
  chatSignIn,
  chatSignOut,
})(StreamChat);
