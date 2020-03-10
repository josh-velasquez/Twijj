import React from "react";
import "./style.css";

import OpenPNG from "./open.png"
import HolderPNG from "./holder.png"

const SideNav = () => {
  return (
	<div class="sidenav">
		<ul>
			<li>
				<a href="#sm.html">
					<img src={OpenPNG} style={{width: "50px" , height: "50px"}}></img>
				</a>
			</li>
			<li>
				<a href="#1.html">
					<img src={HolderPNG} style={{width: "50px" , height: "50px"}}></img>
				</a>
			</li>
			<li>
				<a href="#2.html">
					<img src={HolderPNG} style={{width: "50px" , height: "50px"}}></img>
				</a>
			</li>
		</ul>
	</div>
  );
};

export default SideNav;