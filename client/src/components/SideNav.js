import React from "react";
import "./style.css";

import OpenPNG from "./open.png"
import HolderPNG from "./holder.png"

class SideNav extends React.Component {
	    constructor(props) {
        super(props)
        this.state = {
            subscriptions: [],
        }
    }
	
retrieveSubscribers(){
	/*replace this code with actual code to populate subcriptions state*/
	this.setState(state => ({
		subscriptions: [HolderPNG,HolderPNG],
	}))
}

componentDidMount(){
	this.retrieveSubscribers();
}

displaySubscribers(){
	let arr = [];
	for(let i = 0; i < this.state.subscriptions.length; i++){
		arr.push(<div className="subIcon" key={i}><img src={this.state.subscriptions[i]} style={{width: "50px" , height: "50px"}}></img></div>);
	}
	return arr;
}

render() {
  return (
	<div class="sidenav">
		<div className="subIcon">
			<span>
				<img src={OpenPNG} style={{width: "50px" , height: "50px"}}></img>
			</span>
		</div>
		{this.displaySubscribers()}
	</div>
  )
}
};

export default SideNav;
