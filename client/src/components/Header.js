import React from "react";
import { Link } from "react-router-dom";
import Profile from "./profile/Profile";
import GoogleAuth from "./GoogleAuth";
import Settings from "./Settings";

import "./style.css";
import Logo from "./logo.png";
import Gear from "./gear.png";

const Header = () => {
  return (
	<div class="topnav">
		<div id="logo">
			<a href="#homepage.html">
				<img src={Logo} a href="homepage.html" style={{width: "200px" , height: "50px"}}></img>
			</a>
		</div>
		<a href="#stream">Stream</a>
		<a href="#browse">Browse</a>
		<div class="search-container">
			<form action="/searchpage.php">
				<input type="text" placeholder="Search for..." name="search"></input>
				<button type="submit"><i class="fa fa-search"></i></button>
			</form>
		</div>
		<a href="#User profile">User Profile</a>
		<a href="#homepage.html">
			<img src={Gear} a href="settings.html" style={{width: "40px" , height: "40px"}}></img>
		</a>
	</div>
  );
};

export default Header;
