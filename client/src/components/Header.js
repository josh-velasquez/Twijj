import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Profile from "./profile/Profile";
import GoogleAuth from "./GoogleAuth";

import "./style.css";
import Logo from "./logonobg.png";

class Header extends React.Component {
  renderCreate() {
    console.log(this.props);
    if (this.props.isSignedIn) {
      return (
        <div className="item" style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
    else{
      return (
        <div className="item">
          Sign in to start streaming
        </div>
      );
    }
  }

  render() {
  return (
    <div
      className="ui menu inverted"
      style={{ margin: "0px 0px 2px", flex: "0 0 auto" }}
    >
      <div className="header item">
        <Link to="/">
          <img src={Logo} style={{ width: "100px" }}></img>
        </Link>
      </div>
      <a className="item">Streams</a>
      <a className="item">Browse</a>
      <div className="right menu hide-on-mobile">
        {this.renderCreate()}
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps)(Header);
