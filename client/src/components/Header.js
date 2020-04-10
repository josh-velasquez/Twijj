import React from "react";
import { Link } from "react-router-dom";
import Profile from "./profile/Profile";
import GoogleAuth from "./GoogleAuth";

import "./style.css";
import Logo from "./logonobg.png";

const Header = () => {
  return (
    <div className="ui menu inverted">
      <div className="header item">
        <Link to="/">
          <img src={Logo} style={{ width: "100px" }}></img>
        </Link>
      </div>
      <a className="item">Streams</a>
      <a className="item">Browse</a>
      <div className="right menu hideOnMobile">
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>
        <Profile />
        <div className="item">
          <GoogleAuth />
        </div>
        <div className="item">
          <div
            className="ui compact menu"
            style={{ backgroundColor: "#1b1c1d" }}
          >
            <div className="ui simple dropdown item">
              <i className="settings icon"></i>
              <div className="menu">
                <div className="item">Dark Mode</div>
                <div className="item">Payment</div>
                <div className="item">Messaging</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
