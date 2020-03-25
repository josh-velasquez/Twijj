import React from "react";
import { Link } from "react-router-dom";
import Profile from "./profile/Profile";
import GoogleAuth from "./GoogleAuth";
import Settings from "./Settings";

import "./style.css";
import Logo from "./logo.png";

const Header = () => {
  return (
    <div className="ui secondary pointing menu" style={{backgroundColor: "black"}}>
      <div id="logo">
      <Link to="/">
          <img src={Logo} style={{width: "200px" , height: "50px"}}></img>
      </Link>
      </div>
        <Link style={{color: "white"}} className="item">Stream</Link>
        <Link style={{color: "white"}} className="item">Browse</Link>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..."/>
              <i className="search link icon"></i>
            </div>
          </div>
          <Profile />
          <GoogleAuth />
          <Settings />
      </div>
    </div>
  );
};

export default Header;
