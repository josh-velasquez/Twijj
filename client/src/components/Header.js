import React from "react";
import { Link } from "react-router-dom";
import Profile from "./profile/Profile";
import GoogleAuth from "./GoogleAuth";
import Settings from "./Settings";

import "./style.css";
import Logo from "./logo.png";
import Gear from "./gear.png";

import "./style.css";
import Logo from "./logo.png";
import Gear from "./gear.png";

const Header = () => {
  return (
	<div class="ui secondary  menu">
		<div id="logo">
		<a href="#homepage.html">
			<img src={Logo} style={{width: "200px" , height: "50px"}}></img>
		</a>
		</div>
		<a style={{color: "white"}} className="item" href="#stream">Stream</a>
		<a style={{color: "white"}} className="item" href="#browse">Browse</a>
		<div className="right menu">
			<div className="item">
			  <div className="ui icon input">
				<input type="text" placeholder="Search..."/>
				<i className="search link icon"></i>
			  </div>
			</div>
			<GoogleAuth/>
			<a class="item" href="#homepage.html">
				<img src={Gear} a href="settings.html" style={{width: "40px" , height: "40px"}}></img>
			</a>
		</div>
	</div>
  );
};

export default Header;
