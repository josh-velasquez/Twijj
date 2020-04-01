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

export default StreamChat;
