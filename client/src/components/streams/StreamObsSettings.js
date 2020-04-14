import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStreamServerIp } from "../../actions";
import { Link } from "react-router-dom";

class StreamObsSettings extends React.Component {
  componentDidMount() {
    this.props.fetchStreamServerIp();
  }

  getServerUrl() {
    return `rtmp://${this.props.server.ip}/live`;
  }

  renderContent() {
    if (this.props.server === undefined) {
      return;
    }
    return (
      <div>
        <h4>
          Please enter the following information to your streaming software:
        </h4>
        <table className="ui definition table">
          <tbody>
            <tr>
              <td className="two wide column">Stream URL</td>
              <td>{this.getServerUrl()}</td>
              <td>
                <i
                  className="copy icon"
                  onClick={() => {
                    navigator.clipboard.writeText(this.getServerUrl());
                  }}
                ></i>
              </td>
            </tr>
            <tr>
              <td>Stream Key</td>
              <td>{this.props.match.params.id}</td>
              <td>
                <i
                  className="copy icon"
                  onClick={() => {
                    navigator.clipboard.writeText(this.props.match.params.id);
                  }}
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  renderActions() {
    return (
      <React.Fragment>
        <Link to="/" className="ui button">
          Okay
        </Link>
      </React.Fragment>
    );
  }

  render() {
    return (
      <Modal
        title="Streamer Settings"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { server: state.streamServer.serverIp };
};

export default connect(mapStateToProps, { fetchStreamServerIp })(
  StreamObsSettings
);
