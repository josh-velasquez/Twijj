import React from "react";

/**
 * The chat component that will be shown alongside streams.
 *
 * For now, simply returns a template with no functionality.
 */
class StreamChat extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div class="four wide column">
        <ul id="messages">
          <li>
            <span>User 0</span>
            <span>hello</span>
          </li>
          <li>
            <span>User 1</span>
            <span>bruh</span>
          </li>
        </ul>
        <form action="" onSubmit={this.handleSubmit}>
          <input id="message-box" autocomplete="off"/>
          <button>Chat</button>
        </form>
      </div>
    );
  }
}

export default StreamChat;
