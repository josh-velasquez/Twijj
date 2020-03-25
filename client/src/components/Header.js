import React from "react";
import { Link } from "react-router-dom";
import Profile from "./profile/Profile";
import GoogleAuth from "./GoogleAuth";

import "./style.css";
import Logo from "./logonobg.png";

const Header = () => {
  return (
    <div class="ui menu inverted">
      <div class="header item">
        <Link to="/">
          <img src={Logo} style={{ width: "100px" }}></img>
        </Link>
      </div>
      <a class="item active">Streams</a>
      <a class="item">Browse</a>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>
        <div className="item">
          <GoogleAuth />
        </div>
        <div className="item">
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
      </div>
    </div>
  );
};

export default Header;
