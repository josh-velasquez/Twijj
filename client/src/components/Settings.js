import React from "react";

class Settings extends React.Component {
  render() {
    return (
      <div class="content">
        <div class="ui compact menu">
          <div class="ui simple dropdown item">
            <i class="settings icon small"></i>
            <div class="menu">
              <div class="item">Dark Mode</div>
              <div class="item">Payment</div>
              <div class="item">Messaging</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
