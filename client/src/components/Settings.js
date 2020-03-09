import React from "react";

class Settings extends React.Component {
  renderList() {
    return (
      <div class="ui link list">
        <a href="#" class="item">
          Dark Mode
        </a>
        <a href="#" class="item">
          Payment
        </a>
        <a href="#" class="item">
          Messaging
        </a>
      </div>
    );
  }
  render() {
    return (
      <h2 class="ui header">
        <i class="settings icon small"></i>
        <div class="content">
          <div class="sub header">Settings</div>
        </div>
      </h2>
    );
  }
}

export default Settings;
